'use strict';

var beautify = require('js-beautify').js_beautify;
var _ = require('lodash');
var ts = require('./util');

var getClassName = function (name) {
  name = name.replace(/-Api|-controller|\./gi, "");
  var parts = name.split('-');
  var className = [];
  _.each(parts, function (part) {
    var words = part.toLowerCase().split('');
    for (var i = 0; i < words.length; i++) {
      className.push(i == 0 ? words[i].toUpperCase() : words[i]);
    }
  });
  return className.join('');
}

var normalizeTypeName = function (id) {
  return id.replace(/«|»/g,"");
};

var normalizeName = function (id) {
  return id.replace(/\.|\-|\{|\}|\s/g, '_');
};

var getPathToMethodName = function (opts, m, path) {
  if (path === '/' || path === '') {
    return m;
  }

  // Clean url path for requests ending with '/'
  var cleanPath = path.replace(/\/$/, '');

  var segments = cleanPath.split('/').slice(1);
  segments = _.transform(segments, function (result, segment) {
    if (segment[0] === '{' && segment[segment.length - 1] === '}') {
      segment =
        'by' + segment[1].toUpperCase() + segment.substring(2, segment.length - 1);
    }
    result.push(segment);
  });
  var result = _.camelCase(segments.join('-'));
  return m.toLowerCase() + result[0].toUpperCase() + result.substring(1);
};

var getViewForSwagger2 = function (opts, type) {
  var swagger = opts.swagger;
  var methods = [];
  var authorizedMethods = [
    'GET',
    'POST',
    'PUT',
    'DELETE',
    'PATCH',
    'COPY',
    'HEAD',
    'OPTIONS',
    'LINK',
    'UNLIK',
    'PURGE',
    'LOCK',
    'UNLOCK',
    'PROPFIND'
  ];

  var data = {
    isNode: type === 'node' || type === 'react',
    isES6: opts.isES6 || type === 'react',
    description: swagger.info.description,
    isSecure: swagger.securityDefinitions !== undefined,
    moduleName: opts.moduleName,
    className: opts.className,
    imports: opts.imports,
    domain: swagger.schemes && swagger.schemes.length > 0 && swagger.host && swagger.basePath ?
      swagger.schemes[0] +
      '://' +
      swagger.host +
      swagger.basePath.replace(/\/+$/g, '') : '',
    methods: [],
    definitions: []
  };

  var tags = {};

  _.each(swagger.tags, function (tag) {
    var name = getClassName(tag.name);
    tags[name] = tag.description;
  });

  var methodNameDict = {}

  _.forEach(swagger.paths, function (api, path) {
    var globalParams = [];
    /**
     * @param {Object} op - meta data for the request
     * @param {string} m - HTTP method name - eg: 'get', 'post', 'put', 'delete'
     */
    _.forEach(api, function (op, m) {
      if (m.toLowerCase() === 'parameters') {
        globalParams = op;
      }
    });

    _.forEach(api, function (op, m) {
      var M = m.toUpperCase();
      if (M === '' || M === 'HEAD' || M === 'OPTIONS' || M === 'PATCH' || authorizedMethods.indexOf(M) === -1) {
        return;
      }
      var secureTypes = [];
      if (swagger.securityDefinitions !== undefined || op.security !== undefined) {
        var mergedSecurity = _.merge([], swagger.security, op.security).map(function (
          security
        ) {
          return Object.keys(security);
        });
        if (swagger.securityDefinitions) {
          for (var sk in swagger.securityDefinitions) {
            if (mergedSecurity.join(',').indexOf(sk) !== -1) {
              secureTypes.push(swagger.securityDefinitions[sk].type);
            }
          }
        }
      }
      var methodName = op.operationId ?
        normalizeName(op.operationId) :
        getPathToMethodName(opts, m, path);

      // methodName = methodName.replace(/Using.+$/, "");
      // // Make sure the method name is unique
      // if (methods.indexOf(methodName) !== -1) {
      //   var i = 1;
      //   while (true) {
      //     if (methods.indexOf(methodName + '_' + i) !== -1) {
      //       i++;
      //     } else {
      //       methodName = methodName + '_' + i;
      //       break;
      //     }
      //   }
      // }
      // methods.push(methodName);

      var method = {
        path: path,
        className: opts.className,
        methodName: methodName,
        method: M,
        isGET: M === 'GET',
        isPOST: M === 'POST',
        summary: op.description || op.summary,
        externalDocs: op.externalDocs,
        isSecure: swagger.security !== undefined || op.security !== undefined,
        isSecureToken: secureTypes.indexOf('oauth2') !== -1,
        isSecureApiKey: secureTypes.indexOf('apiKey') !== -1,
        isSecureBasic: secureTypes.indexOf('basic') !== -1,
        parameters: [],
        headers: [],
        response: "object",
        group: null,
      };

      if (op.tags) {
        _.each(op.tags, function (tag) {
          var name = getClassName(tag);
          if (tags[name]) {
            method.group = name;
          }
        });
      }

      // fix method name
      if (method.group) {
        // remove Using
        var newMethodName = methodName.replace(/Using.+$/, "");
        if (!methodNameDict[method.group]) {
          methodNameDict[method.group] = [];
        }
        // Make sure the method name is unique
        if (methodNameDict[method.group].indexOf(newMethodName) == -1) {
          methodName = newMethodName;
        } else if (methodNameDict[method.group].indexOf(methodName) !== -1) {
          var i = 1;
          while (true) {
            if (methods.indexOf(methodName + '_' + i) !== -1) {
              i++;
            } else {
              methodName = methodName + '_' + i;
              break;
            }
          }
        }
        method.methodName = methodName;
        methodNameDict[method.group].push(method.methodName);
      }


      if (method.isSecure && method.isSecureToken) {
        data.isSecureToken = method.isSecureToken;
      }
      if (method.isSecure && method.isSecureApiKey) {
        data.isSecureApiKey = method.isSecureApiKey;
      }
      if (method.isSecure && method.isSecureBasic) {
        data.isSecureBasic = method.isSecureBasic;
      }
      var produces = op.produces || swagger.produces;
      if (produces) {
        method.headers.push({
          name: 'Accept',
          value: `'${produces
            .map(function(value) {
              return value;
            })
            .join(', ')}'`
        });
      }

      var response = op.responses;

      if (response && response['200']) {
        var responseSchema = response['200'].schema;
        if (responseSchema && _.isString(responseSchema.$ref)) {
          var segments = responseSchema.$ref.split('/');
          method.response = normalizeTypeName(segments.length === 1 ? segments[0] : segments[2]);
        }
      }

      var consumes = op.consumes || swagger.consumes;
      if (consumes) {
        method.headers.push({
          name: 'Content-Type',
          value: "'" + consumes + "'"
        });
      }

      var params = [];
      if (_.isArray(op.parameters)) {
        params = op.parameters;
      }
      params = params.concat(globalParams);
      _.forEach(params, function (parameter) {
        // Ignore parameters which contain the x-exclude-from-bindings extension
        if (parameter['x-exclude-from-bindings'] === true) {
          return;
        }

        // Ignore headers which are injected by proxies & app servers
        // eg: https://cloud.google.com/appengine/docs/go/requests#Go_Request_headers
        if (parameter['x-proxy-header'] && !data.isNode) {
          return;
        }
        if (_.isString(parameter.$ref)) {
          var segments = parameter.$ref.split('/');
          parameter =
            swagger.parameters[segments.length === 1 ? segments[0] : segments[2]];
        }
        parameter.camelCaseName = _.camelCase(parameter.name);
        if (parameter.enum && parameter.enum.length === 1) {
          parameter.isSingleton = true;
          parameter.singleton = parameter.enum[0];
        }
        if (parameter.in === 'body') {
          parameter.isBodyParameter = true;
        } else if (parameter.in === 'path') {
          parameter.isPathParameter = true;
        } else if (parameter.in === 'query') {
          if (parameter['x-name-pattern']) {
            parameter.isPatternType = true;
            parameter.pattern = parameter['x-name-pattern'];
          }
          parameter.isQueryParameter = true;
        } else if (parameter.in === 'header') {
          parameter.isHeaderParameter = true;
        } else if (parameter.in === 'formData') {
          parameter.isFormParameter = true;
        }
        parameter.tsType = ts.convertType(parameter);
        parameter.cardinality = parameter.required ? '' : '?';
        method.parameters.push(parameter);
      });
      data.methods.push(method);
      if (method.group) {
        if (!data.apiGroups) {
          data.apiGroups = {};
        }
        if (!data.apiGroups[method.group]) {
          data.apiGroups[method.group] = {
            desc: tags[method.group],
            items: []
          };
        }
        // api分组
        data.apiGroups[method.group].items.push(method);
      }
    });
  });

  _.forEach(swagger.definitions, function (definition, name) {
    data.definitions.push({
      name: normalizeTypeName(name),
      description: definition.description,
      tsType: ts.convertType(definition, swagger)
    });
  });

  return data;
};

var getViewForSwagger1 = function (opts, type) {
  var swagger = opts.swagger;
  var data = {
    isNode: type === 'node' || type === 'react',
    isES6: opts.isES6 || type === 'react',
    description: swagger.description,
    moduleName: opts.moduleName,
    className: opts.className,
    domain: swagger.basePath ? swagger.basePath : '',
    methods: []
  };
  swagger.apis.forEach(function (api) {
    api.operations.forEach(function (op) {
      if (op.method === 'OPTIONS') {
        return;
      }
      var method = {
        path: api.path,
        className: opts.className,
        methodName: op.nickname,
        method: op.method,
        isGET: op.method === 'GET',
        isPOST: op.method.toUpperCase() === 'POST',
        summary: op.summary,
        parameters: op.parameters,
        headers: []
      };

      if (op.produces) {
        var headers = [];
        headers.value = [];
        headers.name = 'Accept';
        headers.value.push(
          op.produces
          .map(function (value) {
            return "'" + value + "'";
          })
          .join(', ')
        );
        method.headers.push(headers);
      }

      op.parameters = op.parameters ? op.parameters : [];
      op.parameters.forEach(function (parameter) {
        parameter.camelCaseName = _.camelCase(parameter.name);
        if (parameter.enum && parameter.enum.length === 1) {
          parameter.isSingleton = true;
          parameter.singleton = parameter.enum[0];
        }
        if (parameter.paramType === 'body') {
          parameter.isBodyParameter = true;
        } else if (parameter.paramType === 'path') {
          parameter.isPathParameter = true;
        } else if (parameter.paramType === 'query') {
          if (parameter['x-name-pattern']) {
            parameter.isPatternType = true;
            parameter.pattern = parameter['x-name-pattern'];
          }
          parameter.isQueryParameter = true;
        } else if (parameter.paramType === 'header') {
          parameter.isHeaderParameter = true;
        } else if (parameter.paramType === 'form') {
          parameter.isFormParameter = true;
        }
      });
      data.methods.push(method);
    });
  });
  return data;
};

module.exports.getViewForSwagger = getViewForSwagger2;

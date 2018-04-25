# generator-swagger-2-ts [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> 

A Swagger Codegen for typescript and javascript, A [Yeoman](http://yeoman.io) generator 

This package generates a js/typescript class from a swagger url. The code is generated using Yeoman and you can modify template to diy the generated code

[中文文档](./README.cn.md)

## Installation

First, install [Yeoman](http://yeoman.io) and generator-swagger-2-ts using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-swagger-2-ts
```

Then generate your new project:

```bash
yo swagger-2-ts
```


According to the prompt:
- input swagger - UI address, for example: `http://192.168.86.8:8051/swagger-ui.html`, the package will automatically replace the url address 'swagger-ui.html' to 'v2/api-docs' to get really swagger API docs url,  then download and parse it to generate the API class
- choose generate js or typescript
- you can customize the generated API class name, API file name

## generated CODE：

```javascript
export default class API {
    $defaultDomain = 'http://localhost:8051'
    /**
    * @method
    * @name API#getSkillsUsingGET
    * @param string authorization  
    * @param $domain 
    */
    getSkillsUsingGET (parameters){ 
      let body = null;
      let config = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/api/skill',
        method: 'GET'
      };
      config.headers = {}
      config.headers['Accept'] = '*/*';
      config.headers['authorization'] = parameters.authorization;
      config.data = body
      return axios.request( config );
    }
}

```

## Use the API Class

```javascript
var API = require("./api");
var api = new API("http://192.168.86.8:8051");
api.getSkillsUsingGET({}).then(function (response) {
    console.log(response.data);
});
```

 ## Reference

 - [swagger-js-codegen](https://github.com/wcandillon/swagger-js-codegen)

## License

Apache-2.0 © [jadepeng]()


[npm-image]: https://badge.fury.io/js/generator-swagger-2-ts.svg
[npm-url]: https://npmjs.org/package/generator-swagger-2-ts
[travis-image]: https://travis-ci.org/jadepeng/generator-swagger-2-ts.svg?branch=master
[travis-url]: https://travis-ci.org/jadepeng/generator-swagger-2-ts
[daviddm-image]: https://david-dm.org/jadepeng/generator-swagger-2-ts.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/jadepeng/generator-swagger-2-ts

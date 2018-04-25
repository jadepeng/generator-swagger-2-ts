# generator-swagger-2-ts [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> 

一款基于 [Yeoman](http://yeoman.io)的swagger js/typescript代码生成器 ，借助这个软件包，可以生成一个访问swagger api 的js/typescript类.

## 安装

需要同时安装 [Yeoman](http://yeoman.io) 和 -swagger-2-ts

```bash
npm install -g yo
npm install -g generator-swagger-2-ts
```

然后cd到你的工作目录，执行:

```bash
yo swagger-2-ts
```


按提示
- 输入swagger-ui 地址，例如http://192.168.86.8:8051/swagger-ui.html，程序包会自动将这个url地址replace('swagger-ui.html', 'v2/api-docs')得到swagger-api-docs，然后下载后解析，生成api class
- 可选生成js 或者 typescript
- 可以自定义生成的api class名称、api文件名


## 生成代码demo：

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

## 使用

```javascript
var API = require("./api");
var api = new API("http://192.168.86.8:8051");
api.getSkillsUsingGET({}).then(function (response) {
    console.log(response.data);
});
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

 ## 参考

 - [swagger-js-codegen](https://github.com/wcandillon/swagger-js-codegen)

## License

Apache-2.0 © [jadepeng]()


[npm-image]: https://badge.fury.io/js/generator-swagger-2-ts.svg
[npm-url]: https://npmjs.org/package/generator-swagger-2-ts
[travis-image]: https://travis-ci.org/jadepeng/generator-swagger-2-ts.svg?branch=master
[travis-url]: https://travis-ci.org/jadepeng/generator-swagger-2-ts
[daviddm-image]: https://david-dm.org/jadepeng/generator-swagger-2-ts.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/jadepeng/generator-swagger-2-ts

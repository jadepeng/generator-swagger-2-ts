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
- API 返回泛型


## 生成代码demo：

```javascript


export type AccountUserInfo = {
  disableTime?: string
  isDisable?: number
  lastLoginIp?: string
  lastLoginPlace?: string
  lastLoginTime?: string
  openId?: string
}


export type BasePayloadResponse = {
  data?: object
  desc?: string
  retcode?: string

}

/**
 * User Account Controller
 * @class UserAccountAPI
 */
export class UserAccountAPI {
/**
  * changeUserState
  * @method
  * @name UserAccountAPI#changeUserState
  
  * @param  accountUserInfo - accountUserInfo 
  
  * @param $domain API域名,没有指定则使用构造函数指定的
  */
  changeUserState(parameters: {
    'accountUserInfo': AccountUserInfo,
    $queryParameters?: any,
    $domain?: string
  }): Promise<AxiosResponse<BasePayloadResponse>> {

    let config: AxiosRequestConfig = {
      baseURL: parameters.$domain || this.$defaultDomain,
      url: '/userAccount/changeUserState',
      method: 'PUT'
    }

    config.headers = {}
    config.params = {}

    config.headers[ 'Accept' ] = '*/*'
    config.headers[ 'Content-Type' ] = 'application/json'

    config.data = parameters.accountUserInfo
    return axios.request(config)
  }

  _UserAccountAPI: UserAccountAPI = null;

  /**
  * 获取 User Account Controller API
  * return @class UserAccountAPI
  */
  getUserAccountAPI(): UserAccountAPI {
    if (!this._UserAccountAPI) {
      this._UserAccountAPI = new UserAccountAPI(this.$defaultDomain)
    }
    return this._UserAccountAPI
  }
}


/**
 * 管理系统接口描述
 * @class API
 */
export class API {
  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor(domain?: string) {
    this.$defaultDomain = domain || 'http://localhost:8080'
  }
}


```

## 使用

```javascript
import { API } from './http/api/manageApi'
// in main.ts
let api = new API("/api/")
api.getUserAccountAPI().changeUserState({
  isDisable: 1
  openId: 'open id'
})
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

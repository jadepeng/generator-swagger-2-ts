import { API } from './api'

// in main.ts
let api = new API('http://aimind-backend-dev.iflyresearch.com')
api.withAuthorization("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJqcXBlbmciLCJzY29wZSI6WyJvcGVuaWQiXSwiZXhwIjoxNjA0NjI5NTYxLCJpYXQiOjE2MDQ1NDMxNjEsImF1dGhvcml0aWVzIjpbIlJPTEVfQUlNSU5EX0FETUlOSVNUUkFUT1IiXSwianRpIjoiZDIxYjM1MmUtYzY0MC00ODQ1LWI1ZGItZGVhNTdjMDNiODY4IiwiY2xpZW50X2lkIjoid2ViX2FwcCJ9.Ggw5zSJtZ19zkzc-ckJn7IP-AhtHBrjwlYGyEUV0b56KjRg9pzEFGltIcVGnqwqNUbH7Bd42Yj8dJqEabguabQySaQ-RFW17prnDxXUTHYjCjWYc5TmPB2i23vz6wS65YgXscOKgcqnZidxeFKMCBFjABaEsJS5v4hyHpMMWxY43pvonzMl8Z0WksaGhre93tMshUX4I5YJh2Fd8VYMJwN-f1COAEgLM4eC0g-so36OaGab22iWMllzqTypIJ2OsdarupQxBf5Vks0WyZAnnheSBeDUDDE5fK4X61dVXg8eamhCAzOxi0jFVMbnLnPSz3ZOilNY1ZYpUT20FxfWFXA")
api.withInterceptors(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录
                case 401:
                    console.error("身份验证失败，请关闭重新进入。")
                    break
                // 403 token过期
                case 403:
                    console.error("登录过期，请关闭重新进入。")
                    break
                // 404请求不存在
                case 404:
                    console.error("您访问的网页不存在。")
                    break
                // 其他错误，直接抛出错误提示
                default:
                    console.error(error.response.data.message)
            }
            return Promise.reject(error.response)
        }
    })

api.get数据集API().getAllDataSetsAsync({ name: "", $queryParameters: { "test": 1 } }).then(resp => {
    console.log(resp)
})
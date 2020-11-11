"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("./api");
// in main.ts
var api = new api_1.API('http://aimind-backend-dev.iflyresearch.com', "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJqcXBlbmciLCJzY29wZSI6WyJvcGVuaWQiXSwiZXhwIjoxNjA0NjI5NTYxLCJpYXQiOjE2MDQ1NDMxNjEsImF1dGhvcml0aWVzIjpbIlJPTEVfQUlNSU5EX0FETUlOSVNUUkFUT1IiXSwianRpIjoiZDIxYjM1MmUtYzY0MC00ODQ1LWI1ZGItZGVhNTdjMDNiODY4IiwiY2xpZW50X2lkIjoid2ViX2FwcCJ9.Ggw5zSJtZ19zkzc-ckJn7IP-AhtHBrjwlYGyEUV0b56KjRg9pzEFGltIcVGnqwqNUbH7Bd42Yj8dJqEabguabQySaQ-RFW17prnDxXUTHYjCjWYc5TmPB2i23vz6wS65YgXscOKgcqnZidxeFKMCBFjABaEsJS5v4hyHpMMWxY43pvonzMl8Z0WksaGhre93tMshUX4I5YJh2Fd8VYMJwN-f1COAEgLM4eC0g-so36OaGab22iWMllzqTypIJ2OsdarupQxBf5Vks0WyZAnnheSBeDUDDE5fK4X61dVXg8eamhCAzOxi0jFVMbnLnPSz3ZOilNY1ZYpUT20FxfWFXA");
api.get数据集API().getAllDataSetsAsync({ name: "" }).then(function (resp) {
    console.log(resp);
});
//# sourceMappingURL=testapi.js.map
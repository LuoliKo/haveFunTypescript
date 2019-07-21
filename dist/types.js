"use strict";
var flag = false;
console.log(flag);
var obj = {
    name: 'typescript'
};
console.log(obj);
var objStr = JSON.stringify(obj);
console.log(objStr);
var arr = ['1', '2', '3'];
console.log(arr);
var arrOther = ['1', '2', '3'];
console.log(arrOther);
var tup = ['1', 2];
console.log(tup);
var tupOther = ['1', 2, obj];
console.log(tupOther);
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["ERR_OK"] = 0] = "ERR_OK";
    ErrorCode[ErrorCode["ERR_AUTH_EXPIRED"] = 401] = "ERR_AUTH_EXPIRED";
})(ErrorCode || (ErrorCode = {}));
console.log(ErrorCode.ERR_OK);
console.log(typeof ErrorCode.ERR_AUTH_EXPIRED);
var e = ErrorCode.ERR_OK;
console.log(typeof e);
var eOther = ErrorCode.ERR_OK;
console.log(typeof eOther);
console.log(ErrorCode[401]);
console.log(typeof ErrorCode[401]);
console.log(ErrorCode.ERR_AUTH_EXPIRED);
var eu;
(function (eu) {
    eu["COLOR_RED"] = "red";
    eu["COLOR_GREEN"] = "green";
})(eu || (eu = {}));
console.log(eu.COLOR_GREEN);
console.log(ErrorCode[0]);
var anyVar = 4;
// const unusable:void = 1 // error
var unusable_undefined = undefined;
// const unusable_null:void = null // error
var u = undefined;
var n = null;
// 默认undefined和null是所有类型的子类型（官方文档是这么写的，不过void类型的变量不能复制为null）
// const varNum:number = undefined // error
// const varNum:number = null // error
var varNum = undefined; // right
var varAny = 'This is a string';
var varNumber = varAny.length;
var varNumberOther = varAny.length;
//# sourceMappingURL=types.js.map
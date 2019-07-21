"use strict";
var a = 10;
function func() {
    console.log('This is a function.');
}
var funcOther = function () {
    console.log('This is another function');
};
{
    if (true) {
        var x = 1;
    }
    console.log(x);
}
// let块作用域的知识
{
    if (true) {
        var y = 1; // 作用域只在花括号内，外部无法访问
    }
    // console.log(y) // 找不到变量y
}
{
    var y = 1;
    if (true) {
        var y_1 = 2;
    }
    console.log(y); // 1
}
var loopVarFunc = function () {
    for (var index = 0; index < 10; index++) {
        setTimeout(function () {
            console.log(index);
        }, 100);
    }
    // console.log(index)
};
var loopLetFunc = function () {
    var _loop_1 = function (index) {
        setTimeout(function () {
            console.log(index);
        }, 100);
    };
    for (var index = 0; index < 10; index++) {
        _loop_1(index);
    }
    // console.log(index) // 报错
};
loopVarFunc();
loopLetFunc();
{
    var var1 = 1;
    var var1 = 2;
}
{
    console.log(var1);
    var var1 = 3;
    var var2 = 1;
    // var var2:number = 1 // 报错
}
{
    // console.log(var2) // 报错
}
// const知识
var numConst = 1;
// numConst = 2 // 报错
var person = {
    name: 'Walden',
    age: 18
};
person.age = 20; // 人还是那个人，不过长大了两岁，const能够容忍
// person = { // 你丫的都不是同一个人，const就不能忍了
//     name: 'Mana Ashida',
//     age: 12
// }
// 数组和对象结构
// 对象属性重命名
var pName = person.name, pAge = person.age;
// 这里容易个定义属性类型混淆
var pNameOther = person.name, pAgeOther = person.age;
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 'name' : _a;
}
function fc(_a) {
    var a = _a.a, b = _a.b;
    // ...
}
function fdf(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.a, a = _c === void 0 ? 0 : _c, _d = _b.b, b = _d === void 0 ? 1 : _d;
}
function fdfOther(_a) {
    var _b = _a === void 0 ? { a: 1000, b: 1000 } : _a, a = _b.a, b = _b.b;
}
function fdfOtherPlus(_a) {
    var _b = _a === void 0 ? { a: 1000, b: 1000 } : _a, a = _b.a, b = _b.b;
}
//# sourceMappingURL=variables.js.map
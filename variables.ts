var a: number = 10
function func(): void {
    console.log('This is a function.')
}

const funcOther = (): void => {
    console.log('This is another function')
}

{
    if (true) {
        var x: number = 1
    }
    console.log(x)
}

// let块作用域的知识
{
    if (true) {
        let y: number = 1 // 作用域只在花括号内，外部无法访问
    }
    // console.log(y) // 找不到变量y
}

{
    let y: number = 1
    if (true) {
        let y: number = 2
    }
    console.log(y) // 1
}

const loopVarFunc = (): void => {
    for (var index = 0; index < 10; index++) {
        setTimeout(() => {
            console.log(index)
        }, 100)
    }
    // console.log(index)
}

const loopLetFunc = (): void => {
    for (let index = 0; index < 10; index++) {
        setTimeout((): void => {
            console.log(index)
        }, 100)
    }
    // console.log(index) // 报错
}

loopVarFunc()
loopLetFunc()

{
    var var1: number = 1
    var var1: number = 2
}

{
    console.log(var1)
    var var1 = 3
    let var2: number = 1
    // var var2:number = 1 // 报错
}

{
    // console.log(var2) // 报错
}

// const知识
const numConst: number = 1
// numConst = 2 // 报错
const person = {
    name: 'Walden',
    age: 18
}

person.age = 20 // 人还是那个人，不过长大了两岁，const能够容忍
// person = { // 你丫的都不是同一个人，const就不能忍了
//     name: 'Mana Ashida',
//     age: 12
// }

// 数组和对象结构

// 对象属性重命名
const { name: pName, age: pAge } = person
// 这里容易个定义属性类型混淆
const { name: pNameOther, age: pAgeOther }: { name: string, age: number } = person

function keepWholeObject(wholeObject: { a: string, b?: string }) {
    const { a, b = 'name' } = wholeObject
}

type C = { a: string, b?: string }
function fc({ a, b }: C) {
    // ...
}

function fdf({ a = 0, b = 1 } = {}): void {

}

function fdfOther({ a, b }: { a: number, b: number } = { a: 1000, b: 1000 }) {

}

function fdfOtherPlus({ a, b } = { a: 1000, b: 1000 }) {

}


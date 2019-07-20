const flag: boolean = false
console.log(flag)

const obj: Object = {
    name: 'typescript'
}
console.log(obj)

const objStr = JSON.stringify(obj)
console.log(objStr)

const arr: string[] = ['1', '2', '3']
console.log(arr)

const arrOther: Array<string> = ['1', '2', '3']
console.log(arrOther)

let tup: [string, number] = ['1', 2]
console.log(tup)
const tupOther: [string, number, Object] = ['1', 2, obj]
console.log(tupOther)

enum ErrorCode {
    ERR_OK = 0,
    ERR_AUTH_EXPIRED = 401
}
console.log(ErrorCode.ERR_OK)
console.log(typeof ErrorCode.ERR_AUTH_EXPIRED)

const e: number = ErrorCode.ERR_OK
console.log(typeof e)
const eOther: ErrorCode = ErrorCode.ERR_OK
console.log(typeof eOther)
console.log(ErrorCode[401])
console.log(typeof ErrorCode[401])
console.log(ErrorCode.ERR_AUTH_EXPIRED)

enum eu {
    COLOR_RED = 'red',
    COLOR_GREEN = 'green'
}

console.log(eu.COLOR_GREEN)
console.log(ErrorCode[0])

let anyVar: any = 4
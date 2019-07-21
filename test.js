const loopLetFunc = () => {
    for (let index = 0; index < 10; index++) {
        setTimeout(() => {
            console.log(index)
        }, 100)
    }
}

const loopVarFunc = () => {
    for (var index = 0; index < 10; index++) {
        setTimeout(() => {
            console.log(index)
        }, 100)
    }
}

loopLetFunc()
loopVarFunc()
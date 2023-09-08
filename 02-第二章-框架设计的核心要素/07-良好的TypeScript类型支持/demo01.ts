function foo<T extends any>(val: T): T {
    return val
}

const res = foo('str')

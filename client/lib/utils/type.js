const typeOf = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase()

const isArray = data => typeOf(data) === 'array'
const isString = data => typeOf(data) === 'string'
const isObject = data => typeOf(data) === 'object'
const isNumber = data => typeOf(data) === 'number'
const isFunction = data => typeOf(data) === 'function'
const isUndefined = data => typeOf(data) === 'undefined'
const isNull = data => typeOf(data) === 'null'
const isMath = data => typeOf(data) === 'math'
const isBigInt = data => typeOf(data) === 'bigint'
const isSymbol = data => typeOf(data) === 'symbol'
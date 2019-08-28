//con strictNullChecks set to true
let a: undefined= undefined; //ok
let b: undefined = null; //error
let c: number = undefined; //error
let d: void = undefined; //ok

//with strict Null Checks set to false
let a: undefined= undefined; //ok
let b: undefined = null; //ok
let c: number = undefined; //ok
let d: void = undefined; //ok

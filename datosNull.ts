//con strictNullChecks set to true
let a: void= undefined; //ok
let b: void= null; //error
let c: void = 3; //error
let d: void = "apple"; //error

//with strict Null Checks set to false
let a: void= undefined; //ok
let b: void = null; //ok
let c: void = 3; //error
let d: void = "apple"; //error

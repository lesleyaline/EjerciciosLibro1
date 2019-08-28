//with strictNullChecks set to true
let a: number =undefined; //Error
let b: number =null; //error
let c: number =3;
let d: number = 0b111001; //Binary
let e: number = 0o436; //octal
let f: number = 0xadf0d; //Hexadecimal
let g: number ="cat"; //error

//with structNullChecks set to false
let a: number =undefined; //ok 
let b: number =null; //ok
let c: number =3; //ok
let d: number = 0b111001; //Binary
let e: number = 0o436; //octal
let f: number = 0xadf0d; //hexadecimal
let g: number ="cat"; //error
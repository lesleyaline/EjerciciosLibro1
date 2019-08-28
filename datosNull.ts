//with strictNullChecks set to true
let a: string =undefined; //error
let b: string=null; //error
let c: string= "";
let d: string="y";
let e: string ="building";
let f: string =3; //error
let g: string ="3";

//with strictNullChecks set to false
let a: string =undefined; //ok
let b: string=null; //ok
let c: string= "";
let d: string="y";
let e: string ="building";
let f: string =3; //error
let g: string ="3";

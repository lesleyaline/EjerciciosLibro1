//with strictNullChecks set to true
var a = undefined; //Error
var b = null; //error
var c = 3;
var d = 57; //Binary
var e = 286; //octal
var f = 0xadf0d; //Hexadecimal
var g = "cat"; //error
//with structNullChecks set to false
var a = undefined; //ok 
var b = null; //ok
var c = 3; //ok
var d = 57; //Binary
var e = 286; //octal
var f = 0xadf0d; //hexadecimal
var g = "cat"; //error

//con strictNullChecks set to true
var a = undefined; //ok
var b = null; //error
var c = 3; //error
var d = "apple"; //error
//with strict Null Checks set to false
var a = undefined; //ok
var b = null; //ok
var c = 3; //error
var d = "apple"; //error

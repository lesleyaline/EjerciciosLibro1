var Person = /** @class */ (function () {
    function Person(theName) {
        this.name = theName;
    }
    Person.prototype.introduceSelf = function () {
        console.log("Hi, I am " + this.name + "!");
    };
    return Person;
}());
var personA = new Person("Sally");
//prints "Hi, I am Sally!"
personA.introduceSelf();
personA.name = "Mindy";
//Prints "Hi, I am Mindy!"
personA.introduceSelf();

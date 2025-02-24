// THIS IS CALLED FUNCTION CONSTRUCTOR THIS CREATE OBJECT USING FUNCTION WE WILL SEE CLASS CONSTRUCTOR INTRODUCED IN ES6 TOO

function Animal(name){
    this.name =name ;
}

// defining or adding a method to it's prototype

Animal.prototype.makeSound = function () {
    return `${this.name} is making sound` ;
}

const lion = new Animal("lion");
console.log(lion.makeSound());
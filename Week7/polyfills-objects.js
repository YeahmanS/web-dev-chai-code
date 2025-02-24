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

// We wanted to created a prototype which add 20 percent charge to battery
// when fuction is called if battery is < 20 but there's this issue 

function Robot(name, batteryLevel) {
    // Initialize name and batteryLevel properties
    this.name=name;
    this.batteryLevel=batteryLevel;
}

// Define charge method on Robot's prototype
Robot.prototype.charge = function (){
  let currentbattery = 0;
  if(this.batteryLevel < 80){
    currentbattery = this.batteryLevel + 80;
  } else {
    currentbattery = 100 ;
  }

  return currentbattery
}

// We should instead of return update out current batterylevel

Robot.prototype.charge = function (){
    if(this.batteryLevel < 80){
      this.batteryLevel +=20;
    } else {
      this.batteryLevel = 100 ;
    }
  }
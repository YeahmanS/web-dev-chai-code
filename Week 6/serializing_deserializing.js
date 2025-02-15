// OBJECT IN JS (works like dictionary in python but more powerful)
// key will always be stored as string value can be anything even another object

const car = {
    color : "yellow",
    brand : "Maruti",
    dimensions : {
        long : 182.1,
        wide: 73.7,
        high: 66.7,
        unit : "cm"
    },
    honk : function () {
        console.log("Honk Honk !!!")
    }
};

car.honk();
console.log(car.dimensions);
console.log(car.dimensions.unit);

// keys (also called properties) are stored as strings (or symbols). 
// Even if you define a key with a non-string value, JavaScript will automatically convert it into a string.

let obj = {
    1: "one",  // Key will be converted to a string "1"
    true: "yes" // Key will be converted to a string "true"
  };

console.log(obj['1']);  // "one"
console.log(obj['true']);  // "yes"
  
// We can access object properties both ways using dot notaion and square brackets

// THIS usually reffer to object itself it means 

const person = {
    name: "Yaman",
    age : 22,
    job : "unemployed",
    stats: {
        weight : 68,
        Height : 179
    },
    intro : function() {
        return `Hello My Name is ${this.name} I'm ${this.age} years old and currently ${this.job}. `
    }
}

console.log(person.intro())

// works like pickle in python usually used for non primitve objects
// as they grow in size indefinitely in heap 
// we usually use this in javascript to copy objects and converting file
// from one to another

// Primitive and Non Primitive 

// primitive
var a = 10;
var b=a;
a=5;
console.log(a);
console.log(b);

// non primitive
console.log("for non primitve \n")

const box ={
    width : 100,
    height : 120
};
const anotherbox = box ; 

console.log(box.width)
console.log(anotherbox.width)

box.width=120;

console.log(box.width)
console.log(anotherbox.width)

//serialisation and deseralisation

let obj1 = { name: "Alice" };  // obj1 references the object in the heap

function createLeak() {
  let obj2 = obj1;  // obj2 now references the same object as obj1
  // obj2 is still referencing obj1, causing the object to persist in memory
}

createLeak();

const newbox = {
    width : 100,
    height : 120,
    material : {
        outside : "Wood",
        inside : "Rubber"
    }
}

const copyofnewbox ={
    width : newbox.width,
    height : newbox.height,
    material : newbox.material 
}

console.log(copyofnewbox.material)
console.log(newbox.material)


const original = { name: "Alice", age: 25, address: { city: "Wonderland" } };

// Shallow copy using the spread operator
const copy = { ...original };

console.log(copy);
// Output: { name: 'Alice', age: 25, address: { city: 'Wonderland' } }

copy.name = "Bob";  // Modifying the shallow copy
copy.address.city = "New City";  // Modifying a nested object

console.log(original);
// Output: { name: 'Alice', age: 25, address: { city: 'New City' } }
console.log(copy);


const stone = {color:"blue",price:12000};
const justforcopy = JSON.stringify(stone);
console.log(typeof (justforcopy));
const copyofstone = JSON.parse(justforcopy);
console.log(typeof(copyofstone));
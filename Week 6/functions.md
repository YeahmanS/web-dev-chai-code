# Javascript Functions
Functions are one of the fundamental building block in Javascript, In JS function is similar to a procedure or steps of instruction to perform a task or calculation but for procedure to qualify as function it need to take some input and return some output where there is some relationship between input and output. To use function we must define its scope.

## Parameter vs Argument
We often use parameter and argument interchangeably but there is subtle difference. **Parameter** is a variable used while defining a function it act as an placeholder for value that will be passed to function while **Argument** is the actual value that is passed into fuction when it's called

- **Passed by Value:** For primitive types (numbers, strings, booleans, etc.), the function gets a copy of the value. Changes inside the function do not affect the original value.

  ``` javascript
  function changevalue(x){
    x=10;
  }

  var x=5;
  changevalue(x);
  console.log(x); // 5
  ```

- **Passed by Reference:** For objects (arrays, functions, etc.), the function gets a reference to the object. Changes made to the object inside the function are reflected outside the function.

  ````javascript
  function changename(obj){
    obj.fname="Saul"
  }

  const obj = {
    fname:"Yaman",
    age : 22,
    Dlicense: false
  }

  console.log(obj.fname); // Yaman
  changename(obj);
  console.log(obj.fname); // Saul
  ````
- **Passed by Sharing:** This is a more descriptive term for how objects are passed. It means that the reference to the object is passed by value, but if you change the reference (pointing to a new object inside the function), the original reference remains unchanged.

  ``` javascript
  function modifyObject(obj) {
      obj.name = "Alice";  // Modifies the object that both refer to
      obj = { name: "Charlie" };  // Creates a new object, but does not affect the original reference
  }

  let person = { name: "Bob" };
  modifyObject(person);
  console.log(person.name);  // Output: Alice (the original object is modified)
  ````

## First class functions
In JS functions are first class object, because they can be passed to other functions, returned from functions and can be assigned to variable and properties. What distinguishes them from other objects is that they can be called.

A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

#### Assigning a function to a variable

```javascript
const add = (first,second) => {
    return first+second
    };
```
#### Passing function as an argument 

```javascript
const message = function(){
    return "Hello "
};

function greeting(greetingMessage,name){
    return (greetingMessage() + name);
}// passing function as an argument 

console.log(greeting(message,"Yaman"));
// Hello Yaman
```
#### Returning a function 

````javascript
function sayHello() {
    return function message() {
        console.log("Hello !")
    }
}

sayHello()(); // Hello !

const returned = sayHello() ; 

console.log(typeof(returned)); // function

````
## Function Declartion

For every kind of function, there are multiple ways to define it:

 **Classes** are conceptually not functions (because they throw an error when called without new), but they also inherit from Function.prototype and have typeof MyClass === "function".

````javascript
 // Constructor
const multiply = new Function("x", "y", "return x * y");

// Declaration
function multiply(x, y) {
  return x * y;
} // No need for semicolon here

// Expression; the function is anonymous but assigned to a variable
const multiply = function (x, y) {
  return x * y;
};
// Expression; the function has its own name
const multiply = function funcName(x, y) {
  return x * y;
};

// Arrow function
const multiply = (x, y) => x * y;

// Method
const obj = {
  multiply(x, y) {
    return x * y;
  },
};
````

some key points to remember 

- Function constructor, function expression and function declaration creates full fleged function object, which can be constructed using `new` . However arrow function and method cannot be construction.

- Function declaration creates functions that are **hoisted**
.
- Arrow function and Function constructor always create anonymous functions, which means they can't easily call themselves recursively. One way to call an arrow function recursively is by assigning it to a variable.

- The Function() constructor cannot access any local variables — it only has access to the global scope and  constructor causes runtime compilation and is often slower than other syntaxes.


### New
The `new` operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
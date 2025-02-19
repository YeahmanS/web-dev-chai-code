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
## Defining Function

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

In JavaScript, a function can be defined based on a condition. For example, the following function definition defines myFunc only if num equals 0:

````javascript
let myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}
````


## Function calling 

Functions must be in scope when they are called, but the function declaration can be hoisted. The scope of a function declaration is the function in which it is declared (or the entire program, if it is declared at the top level).

There are often cases where a function needs to be called dynamically, or the number of arguments to a function vary, or in which the context of the function call needs to be set to a specific object determined at runtime.

It turns out that functions are themselves objects — and in turn, these objects have methods. (See the Function object.) The call() and apply() methods can be used to achieve this goal.


### Hoisting 

consider the following example 

````javascript
console.log(square(5)); //25

function square(n) {
    return n*n;
}
````
This code runs without any error, despite the square() function being called before it's declared. This is because the JavaScript interpreter hoists the entire function declaration to the top of the current scope, so the code above is equivalent to:

````javascript
function square(n){
    return n*n
}

console.log(square(5))// 25
````

### Recursion
A function that calls itself is called a recursive function. In some ways, recursion is analogous to a loop. Both execute the same code multiple times, and both require a condition (to avoid an infinite loop, or rather, infinite recursion in this case).

````javascript
const factorial = function fac(n){
    if (n < 2){
        return 1
    }else {
        return n * fac(n-1)
    }
}

console.log(factorial(5));
````

However, some algorithms cannot be simple iterative loops. For example, getting all the nodes of a tree structure (such as the DOM) is easier via recursion:

It is possible to convert any recursive algorithm to a non-recursive one, but the logic is often much more complex, and doing so requires the use of a stack.

### Immediately Invoked Function Expressions (IIFE)

IIFE is a code pattern that directly calls a function defined as an expression. It looks like this:

````javascript
(function () {
  // Do something
})();

const value = (function () {
  // Do something
  return someValue;
})();
````
Instead of saving the function in a variable, the function is immediately invoked.

## Function scopes and closures

Functions form a scope for variables—this means variables defined inside a function cannot be accessed from anywhere outside the function. The function scope inherits from all the upper scopes. For example, a function defined in the global scope can access all variables defined in the global scope. A function defined inside another function can also access all variables defined in its parent function, and any other variables to which the parent function has access. On the other hand, the parent function (and any other parent scope) does not have access to the variables and functions defined inside the inner function. 

````javascript
// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"

````
### Closure 

A closure is a function that remembers and can access variables from its **lexical scope**, even after that scope has finished executing. Essentially, closures allow functions to "remember" the environment in which they were created.

In other words, a closure is a function that retains access to the variables from the outer function in which it was defined, even after the outer function has returned and finished executing.

Key Points:
- Closures enable a function to remember and access variables from its surrounding scope even when the function is called outside that scope.
- Closures can be useful for things like data encapsulation, callback functions, and creating functions with private state.

Use Cases of Closures:

- **Data Encapsulation:** Closures can help protect variables from being accessed or modified directly from outside the function.
- **Private Variables:** Closures allow you to create functions that maintain their own state (like the counter example).
- **Callback Functions:** Functions passed as arguments to other functions that can still access variables from their lexical scope.

````javascript
function outer() {
    let count = 0;  // `count` is in the lexical scope of `outer`
    
    return function inner() {
        count++;  // `inner` is a closure, it remembers `count` from `outer`
        console.log(count);
    };
}

const counter = outer();  // `outer` returns `inner`, which is a closure

counter();  // Output: 1
counter();  // Output: 2
counter();  // Output: 3
````

**Lexical scoping** refers to the way variable names are resolved in programming languages based on their location in the source code (or the structure of the code). The basic idea is that variables are bound to their values based on where they are declared, not where they are called.

video for practical example -https://www.youtube.com/watch?v=VaH09NXQZ58 

### Name conflicts

When two arguments or variables in the scopes of a closure have the same name, there is a name conflict. More nested scopes take precedence. So, the innermost scope takes the highest precedence, while the outermost scope takes the lowest. This is the scope chain. The first on the chain is the innermost scope, and the last is the outermost scope. Consider the following:

````javascript
function outside() {
  const x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

console.log(outside()(10)); // 20 (instead of 10)
````
## Using the arguments object

The arguments of a function are maintained in an array-like object. Within a function, you can address the arguments passed to it as follows:
````
arguments[i];
````
where `i` is the ordinal number of the argument, starting at `0`. So, the first argument passed to a function would be `arguments[0]`. The total number of arguments is indicated by `arguments.length`.

For example
````javascript
function myConcat(separator) {
  let result = ""; // initialize list
  // iterate through arguments
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
````
You can pass any number of arguments to this function, and it concatenates each argument into a string "list":

````
console.log(myConcat(", ", "red", "orange", "blue"));
// "red, orange, blue, "

console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// "elephant; giraffe; lion; cheetah; "

console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
// "sage. basil. oregano. pepper. parsley. "

````
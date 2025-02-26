// declaring function as an object

const foo = () => {
    console.log("Foo !!!")
};

foo();

// function declaration both work same way 

//  hoisting in js  https://www.youtube.com/watch?v=cMt9U6kCWsM

function add(first,second){
    console.log(first+second);
}

var add = function (num1,num2){
    console.log(first+second);
}  // wont' read in hoisting

const addition = (first,second) => { 
    return first+second
};

console.log(addition(1,3));

const message = function(){
    return "Hellow"
};

function greeting(greetingMessage,name){
    return (greetingMessage() + " " +name);
}
console.log(greeting(message,"yaman"));

function sayHello() {
    return function message() {
        console.log("Hello !")
    }
}

sayHello()();

const returned = sayHello() ;

console.log(typeof(returned));

console.log("\n");
console.log("Passed by reference, value and sharing");


function changevalue(x){
    x=10;
}

var x=5;
changevalue(x);
console.log(x); // 5

console.log("\n Passed by reference");
function changename(obj){
    obj.fname="Saul"
}

const obj = {
    fname :"Yaman",
    age : 22,
    Dlicense: false
}

console.log(obj.fname); // Yaman
changename(obj);
console.log(obj.fname); // Saul

const cube = new Function("X","return X*X*X");

console.log(cube(3))


console.log(quadple(5));

function quadple(n){
    return n*n*n*n
};

const factorial = function fac(n){
    if (n < 2){
        return 1
    }else {
        return n * fac(n-1)
    }
}

console.log(factorial(5));

(function (){
    var n=10;
    while (n >0){
        console.log(`${n}`)
        n=n-1
    }
})();

function myConcat(separator) {
    let result = ""; // initialize list
    // iterate through arguments
    for (let i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
    }
    return result;
  }

  console.log(myConcat(", ", "red", "orange", "blue"));
  // "red, orange, blue, "
  
  console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
  // "elephant; giraffe; lion; cheetah; "
  
  console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
  // "sage. basil. oregano. pepper. parsley. "
  
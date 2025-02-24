# Objects in JavaScript

## constructor function
A constructor function is used to create and initialize objects. It's similar to a class in other programming languages, but before ES6, it was the primary way to define object blueprints in JavaScript.

```javascript
function Animal(name) {
    this.name = name;
}
```
- `Animal` is the constructor function.

- Inside the function, `this` refers to the newly created object.

- The name property is set on that object with the value passed when the constructor is called.

**How to use it:**

You would use the new keyword to create an instance of Animal:
```javascript
const dog = new Animal("rex");
console.log(dog.name); // Outputs: Rex
```

## Prototypes and How it's different from defining function inside constructor

In JavaScript, prototypes are used to add methods and properties to objects created by a constructor function. When you define a method inside a constructor function, the method is re-created every time an object is instantiated, which can be inefficient. Instead, it's generally better to define methods on the prototype of the constructor function, which makes those methods shared across all instances of the object.

**Prototype :**

When you create a function constructor in JavaScript, each object created by that constructor function gets a hidden property called `__proto__`. This property points to the prototype of the constructor function, where you can define methods and properties that are shared across all instances.

**Example :**
```javascript
function BankAccount(balance) {
    this.balance = balance;
    this.transactions = [];
}

// Define deposit method on BankAccount's prototype
BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
    this.transactions.push(`Deposited ${amount}`);
}

// Define withdraw method on BankAccount's prototype
BankAccount.prototype.withdraw = function(amount) {
    if (this.balance < amount) {
        this.transactions.push("Insufficient balance");
    } else {
        this.balance -= amount;
        this.transactions.push(`Withdrew ${amount}`);
    }
}

// Define getTransactionHistory method on BankAccount's prototype
BankAccount.prototype.getTransactionHistory = function() {
    return this.transactions;
}
```

In this example:

- deposit, withdraw, and getTransactionHistory are shared across all instances of BankAccount because they are defined on the prototype.

- Whenever you create a new BankAccount object, it will inherit these methods from the prototype.

**Creating Objects with Prototypes:**

Here's how you can use the BankAccount constructor and its prototype methods:

```javascript
const account1 = new BankAccount(1000);
account1.deposit(500);
account1.withdraw(200);
console.log(account1.getTransactionHistory()); // ["Deposited 500", "Withdrew 200"]

const account2 = new BankAccount(500);
account2.deposit(300);
console.log(account2.getTransactionHistory()); // ["Deposited 300"]
```

### Why Use Prototypes?
- **Efficiency:** If you define methods inside the constructor function (like this: `this.deposit = function() { ... }`), a new function is created every time you create a new object. This is inefficient, especially if you have many instances.
 
  -Inefficient method definition inside constructor:
    ```javascript
    function BankAccount(balance) {
        this.balance = balance;
        this.transactions = [];
        this.deposit = function(amount) {  // Method inside the constructor
            this.balance += amount;
            this.transactions.push(`Deposited ${amount}`);
        }
        }
    ```
    In this case, each instance will have its own copy of the `deposit` function, which can use a lot of memory if you create many instances.

- **Shared Methods:** When you define methods on the prototype, all instances of BankAccount share the same methods, meaning you don’t have to create a new function every time. This makes your code more memory-efficient.


### Function Inside Constructor vs Prototypes:
- **1. Method Inside Constructor:**
    - Each object gets its own copy of the method.
    - Less memory-efficient, as the method is duplicated in every object.
- **2. Method on Prototype:**

    - All objects created by the constructor share the same method.
    - More memory-efficient because only one copy of the method exists, even if there are many objects.

**Example of inefficeint constructor method :**
```javascript
function BankAccount(balance) {
    this.balance = balance;
    this.transactions = [];
    // Defining method inside constructor
    this.deposit = function(amount) {
        this.balance += amount;
        this.transactions.push(`Deposited ${amount}`);
    };
}

const account1 = new BankAccount(1000);
const account2 = new BankAccount(500);

console.log(account1.deposit === account2.deposit);  // Outputs: false (they have different copies of deposit)
```

**Example of Efficient Prototype Method:**

```javascript
function BankAccount(balance) {
    this.balance = balance;
    this.transactions = [];
}

// Defining method on prototype
BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
    this.transactions.push(`Deposited ${amount}`);
};

const account1 = new BankAccount(1000);
const account2 = new BankAccount(500);

console.log(account1.deposit === account2.deposit);  // Outputs: true (both share the same deposit method)

```
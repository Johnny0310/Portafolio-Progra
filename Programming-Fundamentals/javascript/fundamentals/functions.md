# Functions in JavaScript

Functions allow code to be reused and organized into smaller blocks.

JavaScript functions can receive data, process logic, and return values.

---

# Function Syntax

```javascript
function functionName(parameters) {
    // code
}
```

Example:

```javascript
function greet() {
    console.log("Hello");
}
```

---

# Calling a Function

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

---

# Functions with Parameters

Parameters allow functions to receive data.

```javascript
function greet(name) {
    console.log(`Hello ${name}`);
}
```

Calling the function:

```javascript
greet("Carlos");
```

---

# Functions with Return Values

Functions can return values using `return`.

```javascript
function add(a, b) {
    return a + b;
}
```

Example:

```javascript
let result = add(5, 3);

console.log(result);
```

---

# Arrow Functions

Modern JavaScript commonly uses arrow functions.

```javascript
const multiply = (a, b) => {
    return a * b;
};
```

Short version:

```javascript
const square = number => number * number;
```

---

# Default Parameters

```javascript
function welcome(name = "Guest") {
    console.log(`Welcome ${name}`);
}
```

---

# Practical Example

```javascript
function calculateDiscount(price, discount) {
    return price - (price * discount);
}

let finalPrice = calculateDiscount(100, 0.20);

console.log(`Final price: ${finalPrice}`);
```

---

# Function Scope

Variables created inside a function only exist inside that function.

```javascript
function test() {
    let message = "Hello";
    console.log(message);
}
```

---

# Key Takeaways

- Functions organize and reuse code.
- Parameters allow data input.
- `return` sends values back.
- Arrow functions are common in modern JavaScript.
- Functions improve readability and maintainability.
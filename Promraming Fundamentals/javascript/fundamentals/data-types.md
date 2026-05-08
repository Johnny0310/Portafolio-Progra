# Data Types in JavaScript

Data types define what kind of value a variable can store.

JavaScript is a dynamically typed language, meaning variables can change data types during execution.

---

# Primitive Data Types

JavaScript has several primitive data types.

| Type | Description | Example |
|---|---|---|
| Number | Numeric values | `let age = 25;` |
| String | Text | `let name = "Carlos";` |
| Boolean | True or false | `let online = true;` |
| Undefined | Variable without value | `let value;` |
| Null | Intentional empty value | `let data = null;` |
| BigInt | Large integers | `let big = 123n;` |
| Symbol | Unique identifier | `let id = Symbol();` |

---

# Reference Data Types

Reference types store more complex data structures.

## Array

```javascript
let numbers = [1, 2, 3];
```

## Object

```javascript
let user = {
    name: "Carlos",
    age: 22
};
```

---

# Number Example

```javascript
let price = 19.99;

console.log(price);
```

---

# String Example

```javascript
let city = "San Jose";

console.log(city);
```

---

# Boolean Example

```javascript
let loggedIn = true;

console.log(loggedIn);
```

---

# Undefined Example

```javascript
let value;

console.log(value);
```

---

# Null Example

```javascript
let selectedUser = null;

console.log(selectedUser);
```

---

# Checking Data Types

Use `typeof` to check a variable type.

```javascript
let age = 25;

console.log(typeof age);
```

---

# Type Conversion

## String to Number

```javascript
let number = Number("100");
```

## Number to String

```javascript
let text = String(500);
```

---

# Practical Example

```javascript
let product = "Keyboard";
let quantity = 2;
let price = 49.99;
let available = true;

console.log(product);
console.log(quantity);
console.log(price);
console.log(available);
```

---

# Key Takeaways

- JavaScript supports multiple data types.
- Primitive types store simple values.
- Arrays and objects store complex data.
- `typeof` checks variable types.
- JavaScript variables can change types dynamically.
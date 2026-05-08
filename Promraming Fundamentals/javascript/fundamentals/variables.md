# Variables in JavaScript

Variables are used to store data in memory.

JavaScript allows variables to store different types of data dynamically.

---

# Variable Declaration

JavaScript mainly uses:

- `let`
- `const`
- `var`

---

# let

Used for variables that can change.

```javascript
let age = 25;
```

---

# const

Used for values that should not change.

```javascript
const PI = 3.14159;
```

---

# var

Older way to declare variables.

```javascript
var name = "Carlos";
```

> Modern JavaScript usually prefers `let` and `const`.

---

# Common Data Types

| Type | Description | Example |
|---|---|---|
| Number | Numeric values | `let age = 25;` |
| String | Text | `let city = "Tokyo";` |
| Boolean | True or false | `let online = true;` |
| Array | Collection of values | `let numbers = [1,2,3];` |
| Object | Key-value data | `let user = {name:"Carlos"};` |
| Null | Empty value | `let data = null;` |
| Undefined | Variable without value | `let value;` |

---

# Examples

## Number

```javascript
let score = 100;

console.log(score);
```

## String

```javascript
let country = "Costa Rica";

console.log(country);
```

## Boolean

```javascript
let isAdmin = false;

console.log(isAdmin);
```

---

# Updating Variables

```javascript
let lives = 3;

lives = 2;

console.log(lives);
```

---

# Practical Example

```javascript
const name = "Carlos";
let age = 22;
let height = 1.75;
let student = true;

console.log(name);
console.log(age);
console.log(height);
console.log(student);
```

---

# Key Takeaways

- Variables store information.
- `let` allows value changes.
- `const` creates constant values.
- JavaScript is dynamically typed.
- Clear variable names improve readability.
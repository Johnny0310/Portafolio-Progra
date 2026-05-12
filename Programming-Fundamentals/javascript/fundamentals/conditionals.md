# Conditionals in JavaScript

Conditionals allow a program to make decisions based on different conditions.

JavaScript mainly uses:

- `if`
- `else`
- `else if`
- `switch`

---

# if Statement

Executes code only if a condition is true.

```javascript
let age = 18;

if (age >= 18) {
    console.log("Adult");
}
```

---

# if-else Statement

Executes one block if the condition is true and another if false.

```javascript
let age = 16;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

---

# else if Statement

Used to check multiple conditions.

```javascript
let score = 85;

if (score >= 90) {
    console.log("Excellent");
} else if (score >= 70) {
    console.log("Good");
} else {
    console.log("Needs Improvement");
}
```

---

# Comparison Operators

| Operator | Meaning |
|---|---|
| `==` | Equal value |
| `===` | Equal value and type |
| `!=` | Not equal |
| `!==` | Not equal value or type |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater or equal |
| `<=` | Less or equal |

---

# Logical Operators

| Operator | Meaning |
|---|---|
| `&&` | AND |
| `||` | OR |
| `!` | NOT |

Example:

```javascript
let age = 25;
let hasTicket = true;

if (age >= 18 && hasTicket) {
    console.log("Access granted");
}
```

---

# switch Statement

Useful when checking many fixed values.

```javascript
let day = 3;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}
```

---

# Ternary Operator

Short version of an `if-else`.

```javascript
let age = 20;

let message = age >= 18 ? "Adult" : "Minor";

console.log(message);
```

---

# Practical Example

```javascript
let balance = 150;
let withdrawal = 200;

if (withdrawal <= balance) {

    balance -= withdrawal;
    console.log("Transaction approved");

} else {

    console.log("Insufficient funds");
}

console.log(`Current balance: ${balance}`);
```

---

# Key Takeaways

- Conditionals control program flow.
- `if` checks conditions.
- `else` handles alternative cases.
- `switch` simplifies multiple comparisons.
- `===` is commonly preferred in JavaScript.
- Logical operators combine conditions.
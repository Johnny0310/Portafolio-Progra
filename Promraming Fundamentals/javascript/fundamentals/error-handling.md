# Error Handling in JavaScript

Error handling allows programs to manage unexpected situations without crashing.

JavaScript mainly uses:

- `try`
- `catch`
- `finally`
- `throw`

---

# try...catch

Code that may cause errors is placed inside `try`.

If an error occurs, `catch` handles it.

```javascript
try {

    let result = 10 / 0;

    console.log(result);

} catch (error) {

    console.log("An error occurred");
}
```

---

# Error Object

The error object contains information about the error.

```javascript
try {

    let user = null;

    console.log(user.name);

} catch (error) {

    console.log(error.message);
}
```

---

# finally Block

`finally` always executes, even if an error occurs.

```javascript
try {

    console.log("Opening connection");

} catch (error) {

    console.log("Error");

} finally {

    console.log("Closing connection");
}
```

---

# throw Statement

Used to manually create errors.

```javascript
function validateAge(age) {

    if (age < 18) {
        throw new Error("Age must be 18 or older");
    }
}
```

---

# Input Validation Example

```javascript
try {

    let age = -5;

    if (age < 0) {
        throw new Error("Invalid age");
    }

    console.log(age);

} catch (error) {

    console.log(error.message);
}
```

---

# Common JavaScript Errors

| Error | Description |
|---|---|
| ReferenceError | Variable does not exist |
| TypeError | Invalid operation on a value |
| SyntaxError | Invalid JavaScript syntax |
| RangeError | Value outside allowed range |
| Error | Generic custom error |

---

# Async Error Handling

Errors can also happen in asynchronous code.

```javascript
async function getData() {

    try {

        let response = await fetch("https://api.example.com/data");

        console.log(response);

    } catch (error) {

        console.log(error.message);
    }
}
```

---

# Key Takeaways

- Error handling prevents applications from crashing unexpectedly.
- `try` contains risky code.
- `catch` handles errors.
- `finally` always executes.
- `throw` creates custom errors.
- Proper error handling improves application reliability.
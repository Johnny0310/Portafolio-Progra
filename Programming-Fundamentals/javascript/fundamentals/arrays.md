# Arrays in JavaScript

Arrays are used to store multiple values in a single variable.

JavaScript arrays can store different types of data.

---

# Array Declaration

```javascript
const numbers = [10, 20, 30];
```

---

# Accessing Array Elements

Array indexes start at `0`.

```javascript
const numbers = [10, 20, 30];

console.log(numbers[0]);
```

Output:

```txt
10
```

---

# Modifying Elements

```javascript
const names = ["Carlos", "Ana", "Luis"];

names[1] = "Maria";

console.log(names[1]);
```

---

# Array Length

Use `.length` to get the size of an array.

```javascript
const values = [1, 2, 3, 4];

console.log(values.length);
```

---

# Adding Elements

## push()

Adds elements to the end of the array.

```javascript
const colors = ["Red", "Blue"];

colors.push("Green");

console.log(colors);
```

---

# Removing Elements

## pop()

Removes the last element.

```javascript
const numbers = [1, 2, 3];

numbers.pop();

console.log(numbers);
```

---

# Looping Through Arrays

## Using a for Loop

```javascript
const numbers = [5, 10, 15];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

---

# for...of Loop

```javascript
const colors = ["Red", "Blue", "Green"];

for (const color of colors) {
    console.log(color);
}
```

---

# Array Methods

## map()

Creates a new array.

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(number => number * 2);

console.log(doubled);
```

---

# filter()

Filters array elements.

```javascript
const ages = [15, 22, 18, 30];

const adults = ages.filter(age => age >= 18);

console.log(adults);
```

---

# Practical Example

```javascript
const prices = [19.99, 49.99, 9.99];

let total = 0;

for (const price of prices) {
    total += price;
}

console.log(`Total: ${total}`);
```

---

# Key Takeaways

- Arrays store multiple values.
- Array indexes start at `0`.
- `.length` gives the array size.
- Arrays support powerful built-in methods.
- Loops are commonly used with arrays.
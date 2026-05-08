# Loops in JavaScript

Loops allow a program to repeat code multiple times.

JavaScript mainly uses:

- `for`
- `while`
- `do...while`
- `for...of`

---

# for Loop

Used when the number of repetitions is known.

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Output:

```txt
1
2
3
4
5
```

---

# while Loop

Repeats while a condition is true.

```javascript
let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}
```

---

# do...while Loop

Executes the code at least once before checking the condition.

```javascript
let number = 1;

do {
    console.log(number);
    number++;

} while (number <= 5);
```

---

# for...of Loop

Used to iterate through arrays and collections.

```javascript
const names = ["Carlos", "Ana", "Luis"];

for (const name of names) {
    console.log(name);
}
```

---

# break Statement

Stops the loop immediately.

```javascript
for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}
```

---

# continue Statement

Skips the current iteration.

```javascript
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

---

# Looping Through Arrays

```javascript
const numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

---

# Practical Example

```javascript
let total = 0;

for (let i = 1; i <= 5; i++) {
    total += i;
}

console.log(`Final total: ${total}`);
```

---

# Key Takeaways

- Loops repeat code efficiently.
- `for` is useful for known repetitions.
- `while` depends on conditions.
- `do...while` always runs at least once.
- `for...of` simplifies array iteration.
- `break` stops loops.
- `continue` skips iterations.
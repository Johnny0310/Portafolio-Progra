# Loops in Java

Loops allow a program to repeat code multiple times.

Java mainly uses:

- `for`
- `while`
- `do-while`

---

# for Loop

Used when the number of repetitions is known.

```java
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
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

```java
int count = 1;

while (count <= 5) {
    System.out.println(count);
    count++;
}
```

---

# do-while Loop

Executes the code at least once before checking the condition.

```java
int number = 1;

do {
    System.out.println(number);
    number++;
} while (number <= 5);
```

---

# break Statement

Stops the loop immediately.

```java
for (int i = 1; i <= 10; i++) {

    if (i == 5) {
        break;
    }

    System.out.println(i);
}
```

---

# continue Statement

Skips the current iteration.

```java
for (int i = 1; i <= 5; i++) {

    if (i == 3) {
        continue;
    }

    System.out.println(i);
}
```

---

# Looping Through Arrays

```java
int[] numbers = {10, 20, 30, 40};

for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}
```

---

# Enhanced for Loop

Simpler way to iterate through collections.

```java
String[] names = {"Carlos", "Ana", "Luis"};

for (String name : names) {
    System.out.println(name);
}
```

---

# Practical Example

```java
public class Main {
    public static void main(String[] args) {

        int total = 0;

        for (int i = 1; i <= 5; i++) {
            total += i;
        }

        System.out.println("Final total: " + total);
    }
}
```

---

# Key Takeaways

- Loops repeat code efficiently.
- `for` is useful for known repetitions.
- `while` depends on conditions.
- `do-while` always runs at least once.
- `break` stops loops.
- `continue` skips iterations.
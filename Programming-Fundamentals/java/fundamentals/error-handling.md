# Error Handling in Java

Error handling allows programs to manage unexpected situations without crashing.

Java mainly uses:

- `try`
- `catch`
- `finally`
- `throw`

---

# try-catch

Code that may cause errors is placed inside `try`.

If an error occurs, `catch` handles it.

```java
try {
    int result = 10 / 0;

} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero");
}
```

---

# Exception Object

The exception object contains information about the error.

```java
try {
    int[] numbers = {1, 2, 3};

    System.out.println(numbers[5]);

} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println(e.getMessage());
}
```

---

# finally Block

`finally` always executes, even if an error occurs.

```java
try {
    System.out.println("Opening file");

} catch (Exception e) {
    System.out.println("Error");

} finally {
    System.out.println("Closing file");
}
```

---

# Multiple catch Blocks

Different errors can be handled separately.

```java
try {
    String text = null;

    System.out.println(text.length());

} catch (NullPointerException e) {
    System.out.println("Null value detected");

} catch (Exception e) {
    System.out.println("General error");
}
```

---

# throw Keyword

Used to manually create exceptions.

```java
public static void validateAge(int age) {

    if (age < 18) {
        throw new IllegalArgumentException("Age must be 18 or older");
    }
}
```

---

# Input Validation Example

```java
public class Main {

    public static void main(String[] args) {

        int age = -5;

        try {

            if (age < 0) {
                throw new IllegalArgumentException("Invalid age");
            }

            System.out.println("Age: " + age);

        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }
    }
}
```

---

# Common Exceptions

| Exception | Description |
|---|---|
| ArithmeticException | Math errors |
| NullPointerException | Accessing null objects |
| ArrayIndexOutOfBoundsException | Invalid array index |
| NumberFormatException | Invalid number conversion |
| IllegalArgumentException | Invalid method argument |

---

# Key Takeaways

- Exceptions prevent programs from crashing unexpectedly.
- `try` contains risky code.
- `catch` handles errors.
- `finally` always executes.
- Proper error handling improves application reliability.
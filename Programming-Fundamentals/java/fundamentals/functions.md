# Functions in Java

Functions allow code to be reused and organized into smaller blocks.

In Java, functions are called methods.

---

# Method Syntax

```java
returnType methodName(parameters) {
    // code
}
```

Example:

```java
public static void greet() {
    System.out.println("Hello");
}
```

---

# Calling a Method

```java
public class Main {

    public static void greet() {
        System.out.println("Hello");
    }

    public static void main(String[] args) {

        greet();
    }
}
```

---

# Methods with Parameters

Parameters allow methods to receive data.

```java
public static void greet(String name) {
    System.out.println("Hello " + name);
}
```

Calling the method:

```java
greet("Carlos");
```

---

# Methods with Return Values

Methods can return values using `return`.

```java
public static int add(int a, int b) {
    return a + b;
}
```

Example:

```java
int result = add(5, 3);

System.out.println(result);
```

---

# void Methods

`void` means the method does not return a value.

```java
public static void printMessage() {
    System.out.println("Welcome");
}
```

---

# Multiple Parameters

```java
public static double calculateArea(double width, double height) {
    return width * height;
}
```

---

# Method Overloading

Java allows multiple methods with the same name if parameters are different.

```java
public static int multiply(int a, int b) {
    return a * b;
}

public static double multiply(double a, double b) {
    return a * b;
}
```

---

# Practical Example

```java
public class Main {

    public static double calculateDiscount(double price, double discount) {
        return price - (price * discount);
    }

    public static void main(String[] args) {

        double finalPrice = calculateDiscount(100, 0.20);

        System.out.println("Final price: " + finalPrice);
    }
}
```

---

# Key Takeaways

- Methods organize and reuse code.
- Parameters allow data input.
- `return` sends values back.
- `void` methods do not return data.
- Good method names improve readability.
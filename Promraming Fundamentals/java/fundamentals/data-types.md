# Data Types in Java

Data types define what kind of value a variable can store.

Java has two main categories of data types:

- Primitive types
- Reference types

---

# Primitive Data Types

Primitive types store simple values.

| Type | Size | Example |
|---|---|---|
| byte | 8-bit integer | `byte age = 20;` |
| short | 16-bit integer | `short year = 2025;` |
| int | 32-bit integer | `int score = 100;` |
| long | 64-bit integer | `long population = 8000000L;` |
| float | Decimal number | `float price = 19.99f;` |
| double | More precise decimal | `double pi = 3.14159;` |
| char | Single character | `char grade = 'A';` |
| boolean | True or false | `boolean online = true;` |

---

# Reference Types

Reference types store memory addresses of objects.

Common examples:

```java
String name = "Carlos";
```

```java
Scanner input = new Scanner(System.in);
```

---

# Integer Example

```java
int points = 500;

System.out.println(points);
```

---

# Decimal Example

```java
double temperature = 24.7;

System.out.println(temperature);
```

---

# Character Example

```java
char letter = 'J';

System.out.println(letter);
```

---

# Boolean Example

```java
boolean loggedIn = true;

System.out.println(loggedIn);
```

---

# String Example

```java
String country = "Costa Rica";

System.out.println(country);
```

---

# Type Casting

Sometimes values must be converted between data types.

## Implicit Casting

```java
int number = 10;
double result = number;
```

## Explicit Casting

```java
double price = 19.99;
int roundedPrice = (int) price;
```

---

# Practical Example

```java
public class Main {
    public static void main(String[] args) {

        String product = "Keyboard";
        int quantity = 2;
        double price = 49.99;
        boolean available = true;

        System.out.println(product);
        System.out.println(quantity);
        System.out.println(price);
        System.out.println(available);
    }
}
```

---

# Key Takeaways

- Data types define the kind of data a variable stores.
- Primitive types store simple values.
- Reference types store objects.
- Choosing the correct type improves performance and readability.
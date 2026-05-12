# Variables in Java

Variables are used to store data in memory.

Java is a strongly typed language, which means every variable must have a defined data type.

---

# Syntax

```java
dataType variableName = value;
```

Example:

```java
int age = 25;
```

---

# Common Data Types

| Type | Description | Example |
|---|---|---|
| int | Integer numbers | `int age = 25;` |
| double | Decimal numbers | `double price = 19.99;` |
| char | Single character | `char grade = 'A';` |
| boolean | True or false | `boolean isOnline = true;` |
| String | Text | `String name = "Carlos";` |

---

# Examples

## Integer

```java
int score = 100;
System.out.println(score);
```

## Decimal

```java
double temperature = 36.5;
System.out.println(temperature);
```

## Text

```java
String city = "San Jose";
System.out.println(city);
```

---

# Updating Variables

Variables can change their value during program execution.

```java
int lives = 3;

lives = 2;

System.out.println(lives);
```

---

# Constants

Use `final` when a variable should not change.

```java
final double PI = 3.14159;
```

---

# Practical Example

```java
public class Main {
    public static void main(String[] args) {

        String name = "Carlos";
        int age = 22;
        double height = 1.75;
        boolean student = true;

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Height: " + height);
        System.out.println("Student: " + student);
    }
}
```

---

# Key Takeaways

- Variables store information.
- Every variable needs a data type.
- Variables can change unless declared with `final`.
- Clear variable names improve code readability.
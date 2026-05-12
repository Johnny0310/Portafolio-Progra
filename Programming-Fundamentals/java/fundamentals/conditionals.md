# Conditionals in Java

Conditionals allow a program to make decisions based on different conditions.

Java mainly uses:

- `if`
- `else`
- `else if`
- `switch`

---

# if Statement

Executes code only if a condition is true.

```java
int age = 18;

if (age >= 18) {
    System.out.println("Adult");
}
```

---

# if-else Statement

Executes one block if the condition is true and another if false.

```java
int age = 16;

if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}
```

---

# else if Statement

Used to check multiple conditions.

```java
int score = 85;

if (score >= 90) {
    System.out.println("Excellent");
} else if (score >= 70) {
    System.out.println("Good");
} else {
    System.out.println("Needs Improvement");
}
```

---

# Comparison Operators

| Operator | Meaning |
|---|---|
| `==` | Equal to |
| `!=` | Not equal to |
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

```java
int age = 25;
boolean hasTicket = true;

if (age >= 18 && hasTicket) {
    System.out.println("Access granted");
}
```

---

# switch Statement

Useful when checking many fixed values.

```java
int day = 3;

switch (day) {
    case 1:
        System.out.println("Monday");
        break;

    case 2:
        System.out.println("Tuesday");
        break;

    case 3:
        System.out.println("Wednesday");
        break;

    default:
        System.out.println("Invalid day");
}
```

---

# Practical Example

```java
public class Main {
    public static void main(String[] args) {

        double balance = 150.0;
        double withdrawal = 200.0;

        if (withdrawal <= balance) {
            balance -= withdrawal;
            System.out.println("Transaction approved");
        } else {
            System.out.println("Insufficient funds");
        }

        System.out.println("Current balance: " + balance);
    }
}
```

---

# Key Takeaways

- Conditionals control program flow.
- `if` checks conditions.
- `else` handles alternative cases.
- `switch` simplifies multiple fixed comparisons.
- Logical operators combine conditions.
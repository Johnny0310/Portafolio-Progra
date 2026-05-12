# Conditionals in C#

Conditionals allow a program to make decisions based on different conditions.

C# mainly uses:

- `if`
- `else`
- `else if`
- `switch`

---

# if Statement

Executes code only if a condition is true.

```csharp
int age = 18;

if (age >= 18)
{
    Console.WriteLine("Adult");
}
```

---

# if-else Statement

Executes one block if the condition is true and another if false.

```csharp
int age = 16;

if (age >= 18)
{
    Console.WriteLine("Adult");
}
else
{
    Console.WriteLine("Minor");
}
```

---

# else if Statement

Used to check multiple conditions.

```csharp
int score = 85;

if (score >= 90)
{
    Console.WriteLine("Excellent");
}
else if (score >= 70)
{
    Console.WriteLine("Good");
}
else
{
    Console.WriteLine("Needs Improvement");
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

```csharp
int age = 25;
bool hasTicket = true;

if (age >= 18 && hasTicket)
{
    Console.WriteLine("Access granted");
}
```

---

# switch Statement

Useful when checking many fixed values.

```csharp
int day = 3;

switch (day)
{
    case 1:
        Console.WriteLine("Monday");
        break;

    case 2:
        Console.WriteLine("Tuesday");
        break;

    case 3:
        Console.WriteLine("Wednesday");
        break;

    default:
        Console.WriteLine("Invalid day");
        break;
}
```

---

# Practical Example

```csharp
double balance = 150.0;
double withdrawal = 200.0;

if (withdrawal <= balance)
{
    balance -= withdrawal;
    Console.WriteLine("Transaction approved");
}
else
{
    Console.WriteLine("Insufficient funds");
}

Console.WriteLine($"Current balance: {balance}");
```

---

# Key Takeaways

- Conditionals control program flow.
- `if` checks conditions.
- `else` handles alternative cases.
- `switch` simplifies multiple fixed comparisons.
- Logical operators combine conditions.
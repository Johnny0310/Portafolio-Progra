# Variables in C#

Variables are used to store data in memory.

C# is a strongly typed language, meaning every variable must have a defined data type.

---

# Syntax

```csharp
dataType variableName = value;
```

Example:

```csharp
int age = 25;
```

---

# Common Data Types

| Type | Description | Example |
|---|---|---|
| int | Integer numbers | `int age = 25;` |
| double | Decimal numbers | `double price = 19.99;` |
| char | Single character | `char grade = 'A';` |
| bool | True or false | `bool isOnline = true;` |
| string | Text | `string name = "Carlos";` |

---

# Examples

## Integer

```csharp
int score = 100;
Console.WriteLine(score);
```

## Decimal

```csharp
double temperature = 36.5;
Console.WriteLine(temperature);
```

## Text

```csharp
string city = "San Jose";
Console.WriteLine(city);
```

---

# Updating Variables

Variables can change their value during program execution.

```csharp
int lives = 3;

lives = 2;

Console.WriteLine(lives);
```

---

# Constants

Use `const` when a variable should not change.

```csharp
const double PI = 3.14159;
```

---

# Practical Example

```csharp
string name = "Carlos";
int age = 22;
double height = 1.75;
bool student = true;

Console.WriteLine($"Name: {name}");
Console.WriteLine($"Age: {age}");
Console.WriteLine($"Height: {height}");
Console.WriteLine($"Student: {student}");
```

---

# Key Takeaways

- Variables store information.
- Every variable needs a data type.
- Variables can change unless declared with `const`.
- Clear variable names improve readability.
# Data Types in C#

Data types define what kind of value a variable can store.

C# has two main categories of data types:

- Value types
- Reference types

---

# Value Types

Value types directly store data.

| Type | Description | Example |
|---|---|---|
| int | Integer numbers | `int age = 25;` |
| long | Large integers | `long population = 8000000;` |
| float | Decimal number | `float price = 19.99f;` |
| double | More precise decimal | `double pi = 3.14159;` |
| decimal | High precision decimal | `decimal money = 99.99m;` |
| char | Single character | `char grade = 'A';` |
| bool | True or false | `bool online = true;` |

---

# Reference Types

Reference types store references to objects in memory.

Common examples:

```csharp
string name = "Carlos";
```

```csharp
int[] numbers = {1, 2, 3};
```

---

# Integer Example

```csharp
int points = 500;

Console.WriteLine(points);
```

---

# Decimal Example

```csharp
double temperature = 24.7;

Console.WriteLine(temperature);
```

---

# Character Example

```csharp
char letter = 'C';

Console.WriteLine(letter);
```

---

# Boolean Example

```csharp
bool loggedIn = true;

Console.WriteLine(loggedIn);
```

---

# String Example

```csharp
string country = "Costa Rica";

Console.WriteLine(country);
```

---

# Type Casting

Sometimes values must be converted between data types.

## Implicit Casting

```csharp
int number = 10;
double result = number;
```

## Explicit Casting

```csharp
double price = 19.99;
int roundedPrice = (int) price;
```

---

# Practical Example

```csharp
string product = "Keyboard";
int quantity = 2;
decimal price = 49.99m;
bool available = true;

Console.WriteLine(product);
Console.WriteLine(quantity);
Console.WriteLine(price);
Console.WriteLine(available);
```

---

# Key Takeaways

- Data types define the kind of data a variable stores.
- Value types store data directly.
- Reference types store object references.
- Choosing the correct type improves readability and performance.
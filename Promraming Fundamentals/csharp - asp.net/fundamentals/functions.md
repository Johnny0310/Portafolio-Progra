# Functions in C#

Functions allow code to be reused and organized into smaller blocks.

In C#, functions are called methods.

---

# Method Syntax

```csharp
returnType MethodName(parameters)
{
    // code
}
```

Example:

```csharp
static void Greet()
{
    Console.WriteLine("Hello");
}
```

---

# Calling a Method

```csharp
class Program
{
    static void Greet()
    {
        Console.WriteLine("Hello");
    }

    static void Main(string[] args)
    {
        Greet();
    }
}
```

---

# Methods with Parameters

Parameters allow methods to receive data.

```csharp
static void Greet(string name)
{
    Console.WriteLine($"Hello {name}");
}
```

Calling the method:

```csharp
Greet("Carlos");
```

---

# Methods with Return Values

Methods can return values using `return`.

```csharp
static int Add(int a, int b)
{
    return a + b;
}
```

Example:

```csharp
int result = Add(5, 3);

Console.WriteLine(result);
```

---

# void Methods

`void` means the method does not return a value.

```csharp
static void PrintMessage()
{
    Console.WriteLine("Welcome");
}
```

---

# Multiple Parameters

```csharp
static double CalculateArea(double width, double height)
{
    return width * height;
}
```

---

# Method Overloading

C# allows multiple methods with the same name if parameters are different.

```csharp
static int Multiply(int a, int b)
{
    return a * b;
}

static double Multiply(double a, double b)
{
    return a * b;
}
```

---

# Practical Example

```csharp
class Program
{
    static decimal CalculateDiscount(decimal price, decimal discount)
    {
        return price - (price * discount);
    }

    static void Main(string[] args)
    {
        decimal finalPrice = CalculateDiscount(100m, 0.20m);

        Console.WriteLine($"Final price: {finalPrice}");
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
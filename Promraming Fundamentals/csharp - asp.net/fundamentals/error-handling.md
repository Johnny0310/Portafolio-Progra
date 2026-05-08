# Error Handling in C#

Error handling allows programs to manage unexpected situations without crashing.

C# mainly uses:

- `try`
- `catch`
- `finally`
- `throw`

---

# try-catch

Code that may cause errors is placed inside `try`.

If an error occurs, `catch` handles it.

```csharp
try
{
    int result = 10 / 0;
}
catch (DivideByZeroException e)
{
    Console.WriteLine("Cannot divide by zero");
}
```

---

# Exception Object

The exception object contains information about the error.

```csharp
try
{
    int[] numbers = {1, 2, 3};

    Console.WriteLine(numbers[5]);
}
catch (IndexOutOfRangeException e)
{
    Console.WriteLine(e.Message);
}
```

---

# finally Block

`finally` always executes, even if an error occurs.

```csharp
try
{
    Console.WriteLine("Opening file");
}
catch (Exception e)
{
    Console.WriteLine("Error");
}
finally
{
    Console.WriteLine("Closing file");
}
```

---

# Multiple catch Blocks

Different errors can be handled separately.

```csharp
try
{
    string text = null;

    Console.WriteLine(text.Length);
}
catch (NullReferenceException e)
{
    Console.WriteLine("Null value detected");
}
catch (Exception e)
{
    Console.WriteLine("General error");
}
```

---

# throw Keyword

Used to manually create exceptions.

```csharp
static void ValidateAge(int age)
{
    if (age < 18)
    {
        throw new ArgumentException("Age must be 18 or older");
    }
}
```

---

# Input Validation Example

```csharp
try
{
    int age = -5;

    if (age < 0)
    {
        throw new ArgumentException("Invalid age");
    }

    Console.WriteLine(age);
}
catch (ArgumentException e)
{
    Console.WriteLine(e.Message);
}
```

---

# Common Exceptions

| Exception | Description |
|---|---|
| DivideByZeroException | Math errors |
| NullReferenceException | Accessing null objects |
| IndexOutOfRangeException | Invalid array index |
| FormatException | Invalid data conversion |
| ArgumentException | Invalid method argument |

---

# Key Takeaways

- Exceptions prevent programs from crashing unexpectedly.
- `try` contains risky code.
- `catch` handles errors.
- `finally` always executes.
- Proper error handling improves application reliability.
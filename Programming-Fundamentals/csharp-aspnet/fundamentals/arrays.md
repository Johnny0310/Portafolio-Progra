# Arrays in C#

Arrays are used to store multiple values of the same data type in a single variable.

---

# Array Declaration

```csharp
dataType[] arrayName;
```

Example:

```csharp
int[] numbers;
```

---

# Array Initialization

```csharp
int[] numbers = {10, 20, 30, 40};
```

---

# Accessing Array Elements

Array indexes start at `0`.

```csharp
int[] numbers = {10, 20, 30};

Console.WriteLine(numbers[0]);
```

Output:

```txt
10
```

---

# Modifying Elements

```csharp
string[] names = {"Carlos", "Ana", "Luis"};

names[1] = "Maria";

Console.WriteLine(names[1]);
```

---

# Array Length

Use `.Length` to get the size of an array.

```csharp
int[] values = {1, 2, 3, 4};

Console.WriteLine(values.Length);
```

---

# Looping Through Arrays

## Using a for Loop

```csharp
int[] numbers = {5, 10, 15};

for (int i = 0; i < numbers.Length; i++)
{
    Console.WriteLine(numbers[i]);
}
```

---

# foreach Loop

```csharp
string[] colors = {"Red", "Blue", "Green"};

foreach (string color in colors)
{
    Console.WriteLine(color);
}
```

---

# Multidimensional Arrays

Arrays can contain other arrays.

```csharp
int[,] matrix =
{
    {1, 2},
    {3, 4}
};

Console.WriteLine(matrix[1, 0]);
```

Output:

```txt
3
```

---

# Practical Example

```csharp
double[] prices = {19.99, 49.99, 9.99};

double total = 0;

foreach (double price in prices)
{
    total += price;
}

Console.WriteLine($"Total: {total}");
```

---

# Key Takeaways

- Arrays store multiple values.
- Array indexes start at `0`.
- `.Length` gives the array size.
- Loops are commonly used with arrays.
- Multidimensional arrays create table-like structures.
# Loops in C#

Loops allow a program to repeat code multiple times.

C# mainly uses:

- `for`
- `while`
- `do-while`
- `foreach`

---

# for Loop

Used when the number of repetitions is known.

```csharp
for (int i = 1; i <= 5; i++)
{
    Console.WriteLine(i);
}
```

Output:

```txt
1
2
3
4
5
```

---

# while Loop

Repeats while a condition is true.

```csharp
int count = 1;

while (count <= 5)
{
    Console.WriteLine(count);
    count++;
}
```

---

# do-while Loop

Executes the code at least once before checking the condition.

```csharp
int number = 1;

do
{
    Console.WriteLine(number);
    number++;

} while (number <= 5);
```

---

# foreach Loop

Used to iterate through collections and arrays.

```csharp
string[] names = {"Carlos", "Ana", "Luis"};

foreach (string name in names)
{
    Console.WriteLine(name);
}
```

---

# break Statement

Stops the loop immediately.

```csharp
for (int i = 1; i <= 10; i++)
{
    if (i == 5)
    {
        break;
    }

    Console.WriteLine(i);
}
```

---

# continue Statement

Skips the current iteration.

```csharp
for (int i = 1; i <= 5; i++)
{
    if (i == 3)
    {
        continue;
    }

    Console.WriteLine(i);
}
```

---

# Looping Through Arrays

```csharp
int[] numbers = {10, 20, 30, 40};

for (int i = 0; i < numbers.Length; i++)
{
    Console.WriteLine(numbers[i]);
}
```

---

# Practical Example

```csharp
int total = 0;

for (int i = 1; i <= 5; i++)
{
    total += i;
}

Console.WriteLine($"Final total: {total}");
```

---

# Key Takeaways

- Loops repeat code efficiently.
- `for` is useful for known repetitions.
- `while` depends on conditions.
- `do-while` always runs at least once.
- `foreach` simplifies collection iteration.
- `break` stops loops.
- `continue` skips iterations.
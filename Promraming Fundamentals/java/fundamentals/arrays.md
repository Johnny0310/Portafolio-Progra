# Arrays in Java

Arrays are used to store multiple values of the same data type in a single variable.

---

# Array Declaration

```java
dataType[] arrayName;
```

Example:

```java
int[] numbers;
```

---

# Array Initialization

```java
int[] numbers = {10, 20, 30, 40};
```

---

# Accessing Array Elements

Array indexes start at `0`.

```java
int[] numbers = {10, 20, 30};

System.out.println(numbers[0]);
```

Output:

```txt
10
```

---

# Modifying Elements

```java
String[] names = {"Carlos", "Ana", "Luis"};

names[1] = "Maria";

System.out.println(names[1]);
```

---

# Array Length

Use `.length` to get the size of an array.

```java
int[] values = {1, 2, 3, 4};

System.out.println(values.length);
```

---

# Looping Through Arrays

## Using a for Loop

```java
int[] numbers = {5, 10, 15};

for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}
```

---

# Enhanced for Loop

```java
String[] colors = {"Red", "Blue", "Green"};

for (String color : colors) {
    System.out.println(color);
}
```

---

# Multidimensional Arrays

Arrays can contain other arrays.

```java
int[][] matrix = {
    {1, 2},
    {3, 4}
};

System.out.println(matrix[1][0]);
```

Output:

```txt
3
```

---

# Practical Example

```java
public class Main {
    public static void main(String[] args) {

        double[] prices = {19.99, 49.99, 9.99};

        double total = 0;

        for (double price : prices) {
            total += price;
        }

        System.out.println("Total: " + total);
    }
}
```

---

# Key Takeaways

- Arrays store multiple values.
- Array indexes start at `0`.
- `.length` gives the array size.
- Loops are commonly used with arrays.
- Multidimensional arrays create table-like structures.
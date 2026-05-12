# Props in React

Props are used to pass data from one component to another.

Props make components reusable and dynamic.

---

# Passing Props

```jsx
function Welcome(props) {
    return <h1>Hello {props.name}</h1>;
}

function App() {
    return <Welcome name="Carlos" />;
}
```

---

# Destructuring Props

A cleaner way to access props.

```jsx
function Welcome({ name }) {
    return <h1>Hello {name}</h1>;
}
```

---

# Multiple Props

```jsx
function Product({ name, price }) {

    return (
        <div>
            <h2>{name}</h2>
            <p>${price}</p>
        </div>
    );
}
```

Using the component:

```jsx
<Product name="Keyboard" price={49.99} />
```

---

# Props Are Read-Only

Props should not be modified inside components.

```jsx
function User({ name }) {
    return <p>{name}</p>;
}
```

---

# Passing Arrays

```jsx
function List({ items }) {

    return (
        <ul>
            {items.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}
```

---

# Passing Functions

Props can also pass functions.

```jsx
function Button({ handleClick }) {
    return <button onClick={handleClick}>Click</button>;
}
```

---

# Practical Example

```jsx
function StudentCard({ name, course }) {

    return (
        <div>
            <h2>{name}</h2>
            <p>{course}</p>
        </div>
    );
}

function App() {

    return (
        <div>
            <StudentCard
                name="Carlos"
                course="React"
            />

            <StudentCard
                name="Ana"
                course="JavaScript"
            />
        </div>
    );
}
```

---

# Key Takeaways

- Props pass data between components.
- Props make components reusable.
- Props are read-only.
- Functions and arrays can also be passed as props.
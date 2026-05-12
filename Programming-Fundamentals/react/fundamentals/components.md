# Components in React

Components are reusable pieces of UI.

React applications are built using components.

---

# Functional Component

Modern React mainly uses functional components.

```jsx
function Welcome() {
    return <h1>Hello React</h1>;
}
```

---

# Using Components

```jsx
function Welcome() {
    return <h1>Hello React</h1>;
}

function App() {
    return (
        <div>
            <Welcome />
        </div>
    );
}
```

---

# Component Naming

Component names must start with an uppercase letter.

```jsx
function Header() {
    return <h1>Header</h1>;
}
```

---

# Returning JSX

Components return JSX.

```jsx
function Message() {
    return (
        <div>
            <p>React Component</p>
        </div>
    );
}
```

---

# Reusable Components

Components can be reused multiple times.

```jsx
function Button() {
    return <button>Click Me</button>;
}
```

---

# Practical Example

```jsx
function ProductCard() {

    return (
        <div>
            <h2>Keyboard</h2>
            <p>$49.99</p>
        </div>
    );
}

function App() {

    return (
        <div>
            <ProductCard />
            <ProductCard />
        </div>
    );
}
```

---

# Key Takeaways

- Components are reusable UI blocks.
- React applications are built with components.
- Components return JSX.
- Functional components are the modern standard.
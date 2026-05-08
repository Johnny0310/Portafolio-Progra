# Events in React

Events allow React components to respond to user interactions.

Common events include:

- Clicks
- Input changes
- Form submissions
- Keyboard events

---

# onClick Event

```jsx
function Button() {

    function handleClick() {
        alert("Button clicked");
    }

    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    );
}
```

---

# Arrow Function Events

```jsx
<button onClick={() => console.log("Clicked")}>
    Click
</button>
```

---

# onChange Event

Used to detect input changes.

```jsx
function InputExample() {

    function handleChange(event) {
        console.log(event.target.value);
    }

    return (
        <input
            type="text"
            onChange={handleChange}
        />
    );
}
```

---

# Form Submission

```jsx
function LoginForm() {

    function handleSubmit(event) {

        event.preventDefault();

        console.log("Form submitted");
    }

    return (
        <form onSubmit={handleSubmit}>

            <button type="submit">
                Login
            </button>

        </form>
    );
}
```

---

# Keyboard Events

```jsx
function KeyboardExample() {

    function handleKeyDown(event) {
        console.log(event.key);
    }

    return (
        <input
            type="text"
            onKeyDown={handleKeyDown}
        />
    );
}
```

---

# Mouse Events

```jsx
<div
    onMouseEnter={() => console.log("Mouse entered")}
>
    Hover me
</div>
```

---

# Practical Example

```jsx
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    return (
        <div>

            <h1>{count}</h1>

            <button onClick={increase}>
                Increase
            </button>

        </div>
    );
}
```

---

# Key Takeaways

- Events handle user interactions.
- React uses camelCase event names.
- `onClick` handles button clicks.
- `onChange` tracks input changes.
- `event.preventDefault()` prevents default browser behavior.
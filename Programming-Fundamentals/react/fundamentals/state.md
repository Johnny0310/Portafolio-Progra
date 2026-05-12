# State in React

State allows components to store and manage dynamic data.

When state changes, the component automatically re-renders.

---

# useState Hook

React commonly uses the `useState` hook to manage state.

```jsx
import { useState } from "react";
```

---

# Creating State

```jsx
const [count, setCount] = useState(0);
```

| Part | Description |
|---|---|
| count | Current state value |
| setCount | Function to update state |
| 0 | Initial value |

---

# Updating State

```jsx
setCount(count + 1);
```

---

# Counter Example

```jsx
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div>

            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>

        </div>
    );
}
```

---

# Multiple State Variables

```jsx
const [name, setName] = useState("");
const [age, setAge] = useState(0);
```

---

# State with Objects

```jsx
const [user, setUser] = useState({
    name: "Carlos",
    age: 22
});
```

Updating object state:

```jsx
setUser({
    ...user,
    age: 23
});
```

---

# State with Arrays

```jsx
const [numbers, setNumbers] = useState([1, 2, 3]);
```

Adding values:

```jsx
setNumbers([...numbers, 4]);
```

---

# Practical Example

```jsx
import { useState } from "react";

function LoginStatus() {

    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div>

            <h2>
                {loggedIn ? "Welcome" : "Please Login"}
            </h2>

            <button onClick={() => setLoggedIn(!loggedIn)}>
                Toggle
            </button>

        </div>
    );
}
```

---

# Key Takeaways

- State stores dynamic data.
- `useState` manages component state.
- Updating state re-renders components.
- State can store numbers, strings, arrays, and objects.
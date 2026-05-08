# Hooks in React

Hooks allow functional components to use React features such as state and lifecycle behavior.

Hooks simplify component logic and improve code organization.

---

# Common React Hooks

| Hook | Purpose |
|---|---|
| useState | Manage component state |
| useEffect | Handle side effects |
| useRef | Reference DOM elements |
| useContext | Access shared data |
| useMemo | Optimize calculations |

---

# useState

Used to manage dynamic data.

```jsx
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            {count}
        </button>
    );
}
```

---

# useEffect

Used for side effects such as API calls or timers.

```jsx
import { useEffect } from "react";

function App() {

    useEffect(() => {
        console.log("Component loaded");
    }, []);

    return <h1>React App</h1>;
}
```

---

# useRef

Used to reference DOM elements.

```jsx
import { useRef } from "react";

function InputFocus() {

    const inputRef = useRef();

    function focusInput() {
        inputRef.current.focus();
    }

    return (
        <div>

            <input ref={inputRef} />

            <button onClick={focusInput}>
                Focus Input
            </button>

        </div>
    );
}
```

---

# useContext

Used to share data between components.

```jsx
import { createContext, useContext } from "react";

const ThemeContext = createContext();

function Header() {

    const theme = useContext(ThemeContext);

    return <h1>{theme}</h1>;
}
```

---

# useMemo

Used to optimize expensive calculations.

```jsx
import { useMemo } from "react";

const result = useMemo(() => {
    return expensiveCalculation(data);
}, [data]);
```

---

# Rules of Hooks

Hooks must:

- Be called at the top level
- Only be used inside React components
- Not be called inside loops or conditions

---

# Practical Example

```jsx
import { useState, useEffect } from "react";

function Timer() {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);

    }, []);

    return <h1>{seconds}</h1>;
}
```

---

# Key Takeaways

- Hooks add powerful features to functional components.
- `useState` manages state.
- `useEffect` handles side effects.
- Hooks improve code organization and reusability.
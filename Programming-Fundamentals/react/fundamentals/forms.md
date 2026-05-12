# Forms in React

Forms allow users to enter and submit data.

React commonly uses controlled components to manage form inputs.

---

# Controlled Inputs

A controlled input is connected to component state.

```jsx
import { useState } from "react";

function Form() {

    const [name, setName] = useState("");

    return (
        <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
        />
    );
}
```

---

# Handling Form Submission

```jsx
function LoginForm() {

    function handleSubmit(event) {

        event.preventDefault();

        console.log("Form submitted");
    }

    return (
        <form onSubmit={handleSubmit}>

            <button type="submit">
                Submit
            </button>

        </form>
    );
}
```

---

# Multiple Inputs

```jsx
import { useState } from "react";

function UserForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    function handleChange(event) {

        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div>

            <input
                type="text"
                name="name"
                onChange={handleChange}
            />

            <input
                type="email"
                name="email"
                onChange={handleChange}
            />

        </div>
    );
}
```

---

# Checkbox Example

```jsx
const [accepted, setAccepted] = useState(false);

<input
    type="checkbox"
    checked={accepted}
    onChange={() => setAccepted(!accepted)}
/>
```

---

# Select Example

```jsx
const [country, setCountry] = useState("");

<select onChange={(e) => setCountry(e.target.value)}>

    <option value="USA">USA</option>
    <option value="Japan">Japan</option>

</select>
```

---

# Input Validation

```jsx
function handleSubmit(event) {

    event.preventDefault();

    if (name.trim() === "") {
        alert("Name is required");
        return;
    }

    console.log(name);
}
```

---

# Practical Example

```jsx
import { useState } from "react";

function ContactForm() {

    const [email, setEmail] = useState("");

    function handleSubmit(event) {

        event.preventDefault();

        alert(`Email submitted: ${email}`);
    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit">
                Send
            </button>

        </form>
    );
}
```

---

# Key Takeaways

- Forms collect user input.
- Controlled inputs use React state.
- `onChange` updates form values.
- `event.preventDefault()` prevents page refresh.
- Validation improves form reliability.
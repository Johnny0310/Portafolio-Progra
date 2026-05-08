# API Calls in React

React applications commonly communicate with APIs to retrieve and send data.

API calls are usually handled using:

- `fetch`
- `axios`
- `useEffect`

---

# Fetching Data with fetch

```jsx
fetch("https://api.example.com/products")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
```

---

# Using async/await

Modern React commonly uses `async/await`.

```jsx
async function getProducts() {

    try {

        const response = await fetch(
            "https://api.example.com/products"
        );

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);
    }
}
```

---

# useEffect for API Calls

API requests are often executed when the component loads.

```jsx
import { useEffect } from "react";

useEffect(() => {

    console.log("Component loaded");

}, []);
```

---

# Complete API Example

```jsx
import { useEffect, useState } from "react";

function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        async function getProducts() {

            try {

                const response = await fetch(
                    "https://api.example.com/products"
                );

                const data = await response.json();

                setProducts(data);

            } catch (error) {

                console.log(error);
            }
        }

        getProducts();

    }, []);

    return (
        <div>

            {products.map(product => (
                <h2 key={product.id}>
                    {product.name}
                </h2>
            ))}

        </div>
    );
}
```

---

# Sending Data with POST

```jsx
async function createProduct() {

    const product = {
        name: "Keyboard",
        price: 49.99
    };

    await fetch("https://api.example.com/products", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(product)
    });
}
```

---

# Loading State Example

```jsx
const [loading, setLoading] = useState(true);
```

---

# Error Handling Example

```jsx
const [error, setError] = useState(null);
```

---

# Practical Example

```jsx
import { useEffect, useState } from "react";

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        async function getUsers() {

            try {

                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                const data = await response.json();

                setUsers(data);

            } catch (error) {

                console.log(error);
            }
        }

        getUsers();

    }, []);

    return (
        <div>

            {users.map(user => (
                <p key={user.id}>
                    {user.name}
                </p>
            ))}

        </div>
    );
}
```

---

# Key Takeaways

- React applications frequently consume APIs.
- `fetch` retrieves and sends data.
- `useEffect` handles API calls on component load.
- `async/await` improves readability.
- Proper loading and error handling improve user experience.
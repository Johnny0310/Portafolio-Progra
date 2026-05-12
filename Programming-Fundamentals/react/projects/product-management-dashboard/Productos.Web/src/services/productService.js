// const API_URL = "/api/Producto";
const API_URL = import.meta.env.VITE_API_URL;

export async function getProducts() {

    const response = await fetch(`${API_URL}/Producto`);

    if (!response.ok) {
        throw new Error("Error fetching products");
    }

    if (response.status === 204) {
        return [];
    }

    return await response.json();
}

export async function getProduct(id) {

    const response = await fetch(`${API_URL}/Producto/${id}`);

    if (!response.ok) {
        throw new Error("Error fetching product");
    }
    
    return await response.json();
}

export async function createProduct(product) {

    const response = await fetch(`${API_URL}/Producto`, {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(product)
    });

    if (!response.ok) {
        
        const errorData = await response.json();

        const messages = Object.values(errorData.errors)
            .flat()
            .join('\n');

        throw new Error(messages);
    }
}

export async function updateProduct(id, product) {

    const response = await fetch(`${API_URL}/Producto/${id}`, {
        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(product)
    });

    if (!response.ok) {
        throw new Error("Error updating product");
    }
}

export async function deleteProduct(id) {

    const response = await fetch(`${API_URL}/Producto/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Error deleting product");
    }
}
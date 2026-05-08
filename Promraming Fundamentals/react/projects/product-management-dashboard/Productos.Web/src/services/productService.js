const API_URL = "/api/Producto";

export async function getProducts() {

    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Error fetching products");
    }

    if (response.status === 204) {
        return [];
    }

    return await response.json();
}

export async function getProduct(id) {

    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
        throw new Error("Error fetching product");
    }

    return await response.json();
}

export async function createProduct(product) {

    const response = await fetch(API_URL, {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(product)
    });

    if (!response.ok) {
        throw new Error("Error creating product");
    }
}

export async function updateProduct(id, product) {

    const response = await fetch(`${API_URL}/${id}`, {
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

    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Error deleting product");
    }
}
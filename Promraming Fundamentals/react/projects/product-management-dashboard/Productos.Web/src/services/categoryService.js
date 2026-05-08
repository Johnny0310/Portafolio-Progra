const API_URL = "/api/Categoria";

export async function getCategories() {

    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Error fetching categories");
    }

    if (response.status === 204) {
        return [];
    }

    return await response.json();
}

export async function getCategory(id) {

    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
        throw new Error("Error fetching category");
    }

    if (response.status === 204) {
        return null;
    }

    return await response.json();
}

export async function createCategory(category) {

    const response = await fetch(API_URL, {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(category)
    });

    if (!response.ok) {
        throw new Error("Error creating category");
    }
}

export async function updateCategory(id, category) {

    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(category)
    });

    if (!response.ok) {
        throw new Error("Error updating category");
    }
}

export async function deleteCategory(id) {

    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Error deleting category");
    }
}
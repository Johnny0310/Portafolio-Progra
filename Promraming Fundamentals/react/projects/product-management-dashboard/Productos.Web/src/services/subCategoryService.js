const API_URL = "/api/SubCategoria";

export async function getSubCategories() {

    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Error fetching subcategories");
    }

    if (response.status === 204) {
        return [];
    }

    return await response.json();
}

export async function getSubCategory(id) {

    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
        throw new Error("Error fetching subcategory");
    }

    return await response.json();
}

export async function createSubCategory(subCategory) {

    const response = await fetch(API_URL, {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(subCategory)
    });

    if (!response.ok) {
        throw new Error("Error creating subcategory");
    }
}

export async function updateSubCategory(id, subCategory) {

    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(subCategory)
    });

    if (!response.ok) {
        throw new Error("Error updating subcategory");
    }
}

export async function deleteSubCategory(id) {

    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Error deleting subcategory");
    }
}
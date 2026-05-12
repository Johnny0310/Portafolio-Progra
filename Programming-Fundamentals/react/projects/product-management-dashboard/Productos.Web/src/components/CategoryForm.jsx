import { useState } from "react";

import {
    CategoryRequestModel
} from "../models/CategoryModel";

function CategoryForm({ onSubmit, initialData = null }) {

    const [category, setCategory] = useState(
        initialData || CategoryRequestModel
    );

    function handleChange(event) {

        setCategory({
            ...category,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event) {

        event.preventDefault();

        onSubmit(category);
    }

    return (

        <form
            onSubmit={handleSubmit}
            className="space-y-4"
        >

            <div>

                <label className="block mb-2 font-semibold">
                    Nombre
                </label>

                <input
                    type="text"
                    name="nombre"
                    value={category.nombre}
                    onChange={handleChange}
                    className="
                    w-full
                    border
                    rounded-lg
                    p-3
                    "
                />

            </div>

            <button
                type="submit"
                className="
                bg-blue-600
                text-white
                px-4
                py-3
                rounded-lg
                w-full
                "
            >
                Save Category
            </button>

        </form>
    );
}

export default CategoryForm;
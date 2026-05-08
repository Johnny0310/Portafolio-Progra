import { useState } from "react";

import {
    SubCategoryRequestModel
} from "../models/SubCategoryModel";

function SubCategoryForm({
    onSubmit,
    categories,
    initialData = null
}) {

    const [subCategory, setSubCategory] = useState(
        initialData || SubCategoryRequestModel
    );

    function handleChange(event) {

        setSubCategory({
            ...subCategory,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event) {

        event.preventDefault();

        onSubmit(subCategory);
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
                    value={subCategory.nombre}
                    onChange={handleChange}
                    className="
                    w-full
                    border
                    rounded-lg
                    p-3
                    "
                />

            </div>

            <div>

                <label className="block mb-2 font-semibold">
                    Categoria
                </label>

                <select
                    name="idCategoria"
                    value={subCategory.idCategoria}
                    onChange={handleChange}
                    className="
                    w-full
                    border
                    rounded-lg
                    p-3
                    "
                >

                    <option value="">
                        Select Category
                    </option>

                    {
                        categories.map(category => (

                            <option
                                key={category.id}
                                value={category.id}
                            >
                                {category.nombre}
                            </option>
                        ))
                    }

                </select>

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
                Save SubCategory
            </button>

        </form>
    );
}

export default SubCategoryForm;
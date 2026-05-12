import { useState } from "react";

import {
    ProductRequestModel
} from "../models/ProductModel";

function ProductForm({
    onSubmit,
    subCategories,
    initialData = null
}) {

    const [product, setProduct] = useState(
        initialData || ProductRequestModel
    );

    function handleChange(event) {

        setProduct({
            ...product,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event) {

        event.preventDefault();

        onSubmit(product);
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
                    value={product.nombre}
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
                    Descripcion
                </label>

                <textarea
                    name="descripcion"
                    value={product.descripcion}
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
                    Precio
                </label>

                <input
                    type="number"
                    step="0.01"
                    name="precio"
                    value={product.precio}
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
                    Stock
                </label>

                <input
                    type="number"
                    name="stock"
                    value={product.stock}
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
                    Codigo de Barras
                </label>

                <input
                    type="text"
                    name="codigoBarras"
                    value={product.codigoBarras}
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
                    SubCategoria
                </label>

                <select
                    name="idSubCategoria"
                    value={product.idSubCategoria}
                    onChange={handleChange}
                    className="
                    w-full
                    border
                    rounded-lg
                    p-3
                    "
                >

                    <option value="">
                        Select SubCategory
                    </option>

                    {
                        subCategories.map(subCategory => (

                            <option
                                key={subCategory.id}
                                value={subCategory.id}
                            >
                                {subCategory.nombre}
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
                Save Product
            </button>

        </form>
    );
}

export default ProductForm;
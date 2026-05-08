import {
    FaBox,
    FaBarcode,
    FaDollarSign,
    FaLayerGroup,
    FaTag
} from "react-icons/fa";

function ProductCard({
    product,
    onEdit,
    onDelete
}) {

    return (

        <div
            className="
            bg-white
            rounded-2xl
            shadow-lg
            p-6
            border
            border-gray-200
            hover:shadow-2xl
            transition
            duration-300
            "
        >

            <div
                className="
                flex
                justify-between
                items-start
                mb-4
                "
            >

                <div>

                    <h2
                        className="
                        text-2xl
                        font-bold
                        text-gray-800
                        "
                    >
                        {product.nombre}
                    </h2>

                    <p
                        className="
                        text-gray-500
                        mt-1
                        "
                    >
                        {product.descripcion}
                    </p>

                </div>

                <div
                    className="
                    bg-blue-100
                    p-3
                    rounded-xl
                    "
                >
                    <FaBox
                        className="
                        text-blue-600
                        text-2xl
                        "
                    />
                </div>

            </div>

            <div className="space-y-3">

                <div
                    className="
                    flex
                    items-center
                    gap-3
                    "
                >
                    <FaDollarSign className="text-green-600" />

                    <span className="font-medium">
                        ${product.precio}
                    </span>
                </div>

                <div
                    className="
                    flex
                    items-center
                    gap-3
                    "
                >
                    <FaLayerGroup className="text-purple-600" />

                    <span>
                        Stock: {product.stock}
                    </span>
                </div>

                <div
                    className="
                    flex
                    items-center
                    gap-3
                    "
                >
                    <FaBarcode className="text-orange-600" />

                    <span>
                        {product.codigoBarras}
                    </span>
                </div>

                <div
                    className="
                    flex
                    items-center
                    gap-3
                    "
                >
                    <FaTag className="text-pink-600" />

                    <span>
                        {product.categoria}
                        {" / "}
                        {product.subCategoria}
                    </span>
                </div>

            </div>

            <div
                className="
                flex
                gap-3
                mt-6
                "
            >

                <button
                    onClick={() => onEdit(product)}
                    className="
                    flex-1
                    bg-yellow-500
                    hover:bg-yellow-600
                    text-white
                    py-3
                    rounded-xl
                    font-semibold
                    transition
                    "
                >
                    Edit
                </button>

                <button
                    onClick={() => onDelete(product)}
                    className="
                    flex-1
                    bg-red-600
                    hover:bg-red-700
                    text-white
                    py-3
                    rounded-xl
                    font-semibold
                    transition
                    "
                >
                    Delete
                </button>

            </div>

        </div>
    );
}

export default ProductCard;
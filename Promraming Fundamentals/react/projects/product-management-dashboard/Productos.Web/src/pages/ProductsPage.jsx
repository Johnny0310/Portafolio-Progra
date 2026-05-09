import { useEffect, useState } from "react";

import {
    FaBoxOpen
} from "react-icons/fa";

import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";
import ConfirmationModal from "../components/ConfirmationModal";
import Topbar from "../components/Topbar";

import {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
} from "../services/productService";

import {
    getSubCategories
} from "../services/subCategoryService";

import {
    ProductRequestModel
} from "../models/ProductModel";

function ProductsPage() {

    const [products, setProducts] = useState([]);

    const [subCategories, setSubCategories] = useState([]);

    const [selectedProduct, setSelectedProduct] =
        useState(ProductRequestModel);

    const [showCreateModal, setShowCreateModal] =
        useState(false);

    const [showDeleteModal, setShowDeleteModal] =
        useState(false);

    const [productToDelete, setProductToDelete] =
        useState(null);

    useEffect(() => {

        loadProducts();
        loadSubCategories();

    }, []);

    async function loadProducts() {

        try {

            const data = await getProducts();

            setProducts(data);

        } catch (error) {

            console.error(error);
        }
    }

    async function loadSubCategories() {

        try {

            const data = await getSubCategories();

            setSubCategories(data);

        } catch (error) {

            console.error(error);
        }
    }

    function handleCreateClick() {

        setSelectedProduct(ProductRequestModel);

        setShowCreateModal(true);
    }

    function handleEdit(product) {

        setSelectedProduct(product);

        setShowCreateModal(true);
    }

    function handleDeleteClick(product) {

        setProductToDelete(product);

        setShowDeleteModal(true);
    }

    async function handleSave(product) {

        try {
            console.log(
                "PRODUCT SENT TO API:",
                JSON.stringify(product, null, 2)
            );

            if (product.id) {

                await updateProduct(product.id, product);

            } else {

                await createProduct(product);
            }

            await loadProducts();

            setShowCreateModal(false);

        } catch (error) {

            alert(error.message);

            console.error(error);
        }
    }

    async function handleDelete() {

        try {

            await deleteProduct(productToDelete.id);

            await loadProducts();

            setShowDeleteModal(false);

        } catch (error) {

            console.error(error);
        }
    }

    return (

        <div
            className="
            min-h-screen
            bg-slate-950

            p-4
            md:p-10
            "
        >

            <Topbar />

            <div
                className="
                flex
                flex-col
                gap-5

                md:flex-row
                md:justify-between
                md:items-center

                mb-10
                mt-8
                "
            >

                <div>

                    <p
                        className="
                        text-slate-400
                        mt-2
                        "
                    >
                        Product Management Dashboard
                    </p>

                </div>

                <button
                    onClick={handleCreateClick}
                    className="
                    bg-blue-600
                    hover:bg-blue-700

                    text-white

                    px-6
                    py-4

                    rounded-2xl

                    font-semibold

                    transition

                    w-full
                    md:w-auto
                    "
                >
                    Create Product
                </button>

            </div>

            <div
                className="
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3
                gap-6
                "
            >

                {
                    products.length === 0 ? (

                        <div
                            className="
                            col-span-full

                            flex
                            flex-col
                            items-center
                            justify-center

                            text-center

                            mt-20
                            "
                        >

                            <div
                                className="
                                bg-slate-900
                                p-8
                                rounded-full
                                mb-6
                                "
                            >

                                <FaBoxOpen
                                    className="
                                    text-6xl
                                    text-slate-500
                                    "
                                />

                            </div>

                            <h2
                                className="
                                text-3xl
                                font-bold
                                text-white
                                "
                            >
                                No products found
                            </h2>

                            <p
                                className="
                                text-slate-400
                                mt-3
                                max-w-md
                                "
                            >
                                Start by creating your first product
                                in the dashboard.
                            </p>

                        </div>

                    ) : (

                        products.map(product => (

                            <ProductCard
                                key={product.id}
                                product={product}
                                onEdit={handleEdit}
                                onDelete={handleDeleteClick}
                            />
                        ))
                    )
                }

            </div>

            <ConfirmationModal
                isOpen={showDeleteModal}
                title="Delete Product"
                message="Are you sure you want to delete this product?"
                confirmText="Delete"
                onConfirm={handleDelete}
                onCancel={() => setShowDeleteModal(false)}
            />

            {
                showCreateModal && (

                    <div
                        className="
                        fixed
                        inset-0
                        bg-black/50

                        flex
                        items-center
                        justify-center

                        z-50

                        p-4
                        "
                    >

                        <div
                            className="
                            bg-white
                            rounded-2xl

                            p-6
                            md:p-8

                            w-full
                            max-w-2xl

                            max-h-[90vh]
                            overflow-y-auto
                            "
                        >

                            <div
                                className="
                                flex
                                justify-between
                                items-center
                                mb-6
                                "
                            >

                                <h2
                                    className="
                                    text-2xl
                                    md:text-3xl
                                    font-bold
                                    "
                                >
                                    {
                                        selectedProduct.id
                                        ? "Edit Product"
                                        : "Create Product"
                                    }
                                </h2>

                                <button
                                    onClick={() => setShowCreateModal(false)}
                                    className="
                                    bg-slate-200
                                    hover:bg-slate-300

                                    w-10
                                    h-10

                                    rounded-full

                                    text-xl
                                    font-bold

                                    transition
                                    "
                                >
                                    ✕
                                </button>

                            </div>

                            <ProductForm
                                initialData={selectedProduct}
                                subCategories={subCategories}
                                onSubmit={handleSave}
                            />

                            <button
                                onClick={() => setShowCreateModal(false)}
                                className="
                                w-full
                                mt-4

                                bg-slate-300
                                hover:bg-slate-400

                                py-3

                                rounded-xl

                                font-semibold

                                transition
                                "
                            >
                                Cancel
                            </button>

                        </div>

                    </div>
                )
            }

        </div>
    );
}

export default ProductsPage;
import { useEffect, useState } from "react";

import {
    FaTags
} from "react-icons/fa";

import CategoryForm from "../components/CategoryForm";
import ConfirmationModal from "../components/ConfirmationModal";
import Topbar from "../components/Topbar";

import {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
} from "../services/categoryService";

import {
    CategoryRequestModel
} from "../models/CategoryModel";

function CategoriesPage() {

    const [categories, setCategories] = useState([]);

    const [selectedCategory, setSelectedCategory] =
        useState(CategoryRequestModel);

    const [showFormModal, setShowFormModal] =
        useState(false);

    const [showDeleteModal, setShowDeleteModal] =
        useState(false);

    const [categoryToDelete, setCategoryToDelete] =
        useState(null);

    useEffect(() => {

        loadCategories();

    }, []);

    async function loadCategories() {

        try {

            const data = await getCategories();

            setCategories(data);

        } catch (error) {

            console.error(error);
        }
    }

    function handleCreateClick() {

        setSelectedCategory(CategoryRequestModel);

        setShowFormModal(true);
    }

    function handleEdit(category) {

        setSelectedCategory(category);

        setShowFormModal(true);
    }

    function handleDeleteClick(category) {

        setCategoryToDelete(category);

        setShowDeleteModal(true);
    }

    async function handleSave(category) {

        try {

            if (selectedCategory.id) {

                await updateCategory(
                    selectedCategory.id,
                    category
                );

            } else {

                await createCategory(category);
            }

            await loadCategories();

            setShowFormModal(false);

        } catch (error) {

            console.error(error);
        }
    }

    async function handleDelete() {

        try {

            await deleteCategory(categoryToDelete.id);

            await loadCategories();

            setShowDeleteModal(false);

        } catch (error) {
            alert(
                "Cannot delete this category because it has related subcategories."
            );
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
                        Category Management Dashboard
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
                    Create Category
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
                    categories.length === 0 ? (

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

                                <FaTags
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
                                No categories found
                            </h2>

                            <p
                                className="
                                text-slate-400
                                mt-3
                                max-w-md
                                "
                            >
                                Start by creating your first category.
                            </p>

                        </div>

                    ) : (

                        categories.map(category => (

                            <div
                                key={category.id}
                                className="
                                bg-white
                                rounded-2xl
                                p-6
                                shadow-xl
                                "
                            >

                                <h2
                                    className="
                                    text-2xl
                                    font-bold
                                    mb-6
                                    "
                                >
                                    {category.nombre}
                                </h2>

                                <div
                                    className="
                                    flex
                                    gap-3
                                    "
                                >

                                    <button
                                        onClick={() => handleEdit(category)}
                                        className="
                                        flex-1
                                        bg-yellow-500
                                        hover:bg-yellow-600
                                        text-white
                                        py-3
                                        rounded-xl
                                        "
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => handleDeleteClick(category)}
                                        className="
                                        flex-1
                                        bg-red-600
                                        hover:bg-red-700
                                        text-white
                                        py-3
                                        rounded-xl
                                        "
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>
                        ))
                    )
                }

            </div>

            <ConfirmationModal
                isOpen={showDeleteModal}
                title="Delete Category"
                message="Are you sure you want to delete this category?"
                confirmText="Delete"
                onConfirm={handleDelete}
                onCancel={() => setShowDeleteModal(false)}
            />

            {
                showFormModal && (

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
                            max-w-xl

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
                                        selectedCategory.id
                                        ? "Edit Category"
                                        : "Create Category"
                                    }
                                </h2>

                                <button
                                    onClick={() => setShowFormModal(false)}
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

                            <CategoryForm
                                initialData={selectedCategory}
                                onSubmit={handleSave}
                            />

                            <button
                                onClick={() => setShowFormModal(false)}
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

export default CategoriesPage;
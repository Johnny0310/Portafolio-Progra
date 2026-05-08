import { useEffect, useState } from "react";

import {
    FaLayerGroup
} from "react-icons/fa";

import SubCategoryForm from "../components/SubCategoryForm";
import ConfirmationModal from "../components/ConfirmationModal";
import Topbar from "../components/Topbar";

import {
    getSubCategories,
    createSubCategory,
    updateSubCategory,
    deleteSubCategory
} from "../services/subCategoryService";

import {
    getCategories
} from "../services/categoryService";

import {
    SubCategoryRequestModel
} from "../models/SubCategoryModel";

function SubCategoriesPage() {

    const [subCategories, setSubCategories] =
        useState([]);

    const [categories, setCategories] =
        useState([]);

    const [selectedSubCategory, setSelectedSubCategory] =
        useState(SubCategoryRequestModel);

    const [showFormModal, setShowFormModal] =
        useState(false);

    const [showDeleteModal, setShowDeleteModal] =
        useState(false);

    const [subCategoryToDelete, setSubCategoryToDelete] =
        useState(null);

    useEffect(() => {

        loadSubCategories();
        loadCategories();

    }, []);

    async function loadSubCategories() {

        try {

            const data = await getSubCategories();

            setSubCategories(data);

        } catch (error) {

            console.error(error);
        }
    }

    async function loadCategories() {

        try {

            const data = await getCategories();

            setCategories(data);

        } catch (error) {

            console.error(error);
        }
    }

    function handleCreateClick() {

        setSelectedSubCategory(SubCategoryRequestModel);

        setShowFormModal(true);
    }

    function handleEdit(subCategory) {

        setSelectedSubCategory(subCategory);

        setShowFormModal(true);
    }

    function handleDeleteClick(subCategory) {

        setSubCategoryToDelete(subCategory);

        setShowDeleteModal(true);
    }

    async function handleSave(subCategory) {

        try {

            if (selectedSubCategory.id) {

                await updateSubCategory(
                    selectedSubCategory.id,
                    subCategory
                );

            } else {

                await createSubCategory(subCategory);
            }

            await loadSubCategories();

            setShowFormModal(false);

        } catch (error) {

            console.error(error);
        }
    }

    async function handleDelete() {

        try {

            await deleteSubCategory(subCategoryToDelete.id);

            await loadSubCategories();

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
                        SubCategory Management Dashboard
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
                    Create SubCategory
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
                    subCategories.length === 0 ? (

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

                                <FaLayerGroup
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
                                No subcategories found
                            </h2>

                            <p
                                className="
                                text-slate-400
                                mt-3
                                max-w-md
                                "
                            >
                                Start by creating your first subcategory.
                            </p>

                        </div>

                    ) : (

                        subCategories.map(subCategory => (

                            <div
                                key={subCategory.id}
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
                                    "
                                >
                                    {subCategory.nombre}
                                </h2>

                                <p
                                    className="
                                    text-gray-500
                                    mt-2
                                    mb-6
                                    "
                                >
                                    {subCategory.categoria}
                                </p>

                                <div
                                    className="
                                    flex
                                    gap-3
                                    "
                                >

                                    <button
                                        onClick={() => handleEdit(subCategory)}
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
                                        onClick={() => handleDeleteClick(subCategory)}
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
                title="Delete SubCategory"
                message="Are you sure you want to delete this subcategory?"
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
                                        selectedSubCategory.id
                                        ? "Edit SubCategory"
                                        : "Create SubCategory"
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

                            <SubCategoryForm
                                initialData={selectedSubCategory}
                                categories={categories}
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

export default SubCategoriesPage;
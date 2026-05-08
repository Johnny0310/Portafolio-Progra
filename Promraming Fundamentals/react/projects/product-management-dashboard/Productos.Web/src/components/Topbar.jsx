import { Link, useLocation } from "react-router-dom";

import {
    FaBox,
    FaTags,
    FaLayerGroup
} from "react-icons/fa";

function Topbar() {

    const location = useLocation();

    function getPageTitle() {

        switch (location.pathname) {

            case "/products":
                return "Products";

            case "/categories":
                return "Categories";

            case "/subcategories":
                return "SubCategories";

            default:
                return "Dashboard";
        }
    }

    function getLinkClasses(path) {

        return `
            flex
            items-center
            justify-center
            gap-2
            px-5
            py-3
            rounded-xl
            transition
            font-semibold
            text-sm
            md:text-base
            ${
                location.pathname === path
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }
        `;
    }

    return (

        <div
            className="
            w-full
            bg-slate-900
            border-b
            border-slate-800

            px-4
            md:px-10

            py-5

            flex
            flex-col
            gap-5

            md:flex-row
            md:justify-between
            md:items-center
            "
        >

            <h1
                className="
                text-2xl
                md:text-3xl
                font-bold
                text-white
                text-center
                md:text-left
                "
            >
                {getPageTitle()}
            </h1>

            <div
                className="
                flex
                flex-col
                gap-3

                sm:flex-row
                sm:flex-wrap
                "
            >

                <Link
                    to="/products"
                    className={getLinkClasses("/products")}
                >
                    <FaBox />

                    Products
                </Link>

                <Link
                    to="/categories"
                    className={getLinkClasses("/categories")}
                >
                    <FaTags />

                    Categories
                </Link>

                <Link
                    to="/subcategories"
                    className={getLinkClasses("/subcategories")}
                >
                    <FaLayerGroup />

                    SubCategories
                </Link>

            </div>

        </div>
    );
}

export default Topbar;
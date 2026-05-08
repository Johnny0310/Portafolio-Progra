import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import ProductsPage from "./pages/ProductsPage";
import CategoriesPage from "./pages/CategoriesPage";
import SubCategoriesPage from "./pages/SubCategoriesPage";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Navigate to="/products" />}
                />

                <Route
                    path="/products"
                    element={<ProductsPage />}
                />

                <Route
                    path="/categories"
                    element={<CategoriesPage />}
                />

                <Route
                    path="/subcategories"
                    element={<SubCategoriesPage />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;
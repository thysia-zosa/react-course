import {
  RouterProvider,
  createBrowserRouter,
  // Route,
  // createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

/*

OLD WAY OF DOING THIS:

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions)
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // { path: "", element: <HomePage /> },
      { index: true, element: <HomePage /> }, // same behavior
      { path: "products", element: <ProductsPage /> },
      // { path: "/products/product-1", element: <ProductDetailPage /> }, not an option for every product...

      // this is dynamic with ':' after productId '/new' o.Ä is possible
      // productId is just a placeholder
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

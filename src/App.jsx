import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Cart from "./components/cart/Cart";
import Layout from "./components/Layout";
import ProductsPage from "./components/productsPage/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/products",
          element: <ProductsPage />,
        },
        {
          path: "/detail",
          element: <ProductDetailPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

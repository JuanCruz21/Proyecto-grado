import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter(
  {
    path: "/proyecto/src/Pages/Home/Home.jsx",
    element:<span>Home</span>
  },
  {
    path: "./Pages/Product/Product.jsx",
    element:<span>Product</span>
  },
  {
    path: "./Pages/Products/products.jsx",
    element:<span>Products</span>
  }
)

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>

    )
}

export default App;

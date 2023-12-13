import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/index.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about.jsx";
import Product from "./Pages/Product.jsx";
import Layout from "./components/Layout.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "product/:id",
//     element: <Product />,
//   },
//   {
//     path: "/*",
//     element: <h1>404 - NOT Found this page</h1>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        {/* <RouterProvider router={router} /> */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="/*" element={<h1>404 - NOT Found this page</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);

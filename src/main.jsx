import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/index.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about.jsx";
import Product from "./pages/product.jsx";
import Layout from "./components/Layout.jsx";
import { Auth0Provider } from '@auth0/auth0-react';
import ShoppingCard from "./pages/shopping-card.jsx";

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
    <Auth0Provider
    domain="dev-5osyss4pkoa1wbn3.us.auth0.com"
    clientId="9vfkWamRKKbZMeKDTPpIFAFUa2eGjKdV"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
      <Layout>
        {/* <RouterProvider router={router} /> */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/shopping-card" element={<ShoppingCard />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="/*" element={<h1>404 - NOT Found this page</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

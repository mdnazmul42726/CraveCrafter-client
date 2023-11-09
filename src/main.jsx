import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./pages/Home";
import Login from "./pages/LogIn";
import Register from "./pages/Register";
import AuthProvider from "./AuthProvider";
import TopPrdctDtls from "./pages/TopPrdctDtls";
import ErrorPage from "./pages/ErrorPage";
import Foods from "./pages/Foods";
import ProdctDtls from "./pages/ProdctDtls";
import Order from "./pages/Order";
import PrivateRoute from "./PrivateRoute";
import OrderTop from "./pages/OrderTop";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogDtls";
import AddFood from "./pages/AddFood";
import Cart from "./pages/Cart";
import Added from "./pages/Added";
import Update from "./pages/Update";
import About from "./pages/About";
import Teamp from "./pages/Team";
import BookP from "./pages/BookP";
const router = createBrowserRouter([
  {
    path: "/", element: <Root />, errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home />, loader: () => fetch('https://crave-crafter-server.vercel.app/foods/top/v1') },

      { path: "/login", element: <Login /> },

      { path: "/register", element: <Register /> },

      { path: "/top-food/:id", element: <TopPrdctDtls />, loader: ({ params }) => fetch(`https://crave-crafter-server.vercel.app/top-food/v1/${params.id}`) },

      { path: "/foods", element: <Foods /> },

      { path: "/about", element: <About /> },

      { path: "/team", element: <Teamp /> },

      { path: "/reservation", element: <BookP /> },

      { path: "/food/:id", element: <ProdctDtls />, loader: ({ params }) => fetch(`https://crave-crafter-server.vercel.app/food/v1/${params.id}`) },

      { path: "/food/order/:id", element: <PrivateRoute><Order /></PrivateRoute>, loader: ({ params }) => fetch(`https://crave-crafter-server.vercel.app/food/v1/${params.id}`) },

      { path: "/top-food/order/:id", element: <PrivateRoute><OrderTop /></PrivateRoute>, loader: ({ params }) => fetch(`https://crave-crafter-server.vercel.app/top-food/v1/${params.id}`) },

      { path: "/blogs", element: <Blog />, loader: () => fetch('https://crave-crafter-server.vercel.app/blogs/v1') },
      { path: "/blog/:id", element: <BlogPost />, loader: ({ params }) => fetch(`https://crave-crafter-server.vercel.app/blog/v1/${params.id}`) },

      { path: "/add-food", element: <PrivateRoute><AddFood /></PrivateRoute> },

      { path: "/my-ordered-food", element: <PrivateRoute><Cart /></PrivateRoute> },

      { path: "/my-added-food", element: <PrivateRoute><Added /></PrivateRoute> },

      { path: "/food/update/:id", element: <PrivateRoute> <Update /></PrivateRoute>, loader: ({ params }) => fetch(`https://crave-crafter-server.vercel.app/food/v1/${params.id}`) },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><AuthProvider><RouterProvider router={router} /></AuthProvider></React.StrictMode>
);
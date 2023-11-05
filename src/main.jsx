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

const router = createBrowserRouter([
  {
    path: "/", element: <Root />,
    children: [
      { index: true, element: <Home />, loader: () => fetch('http://localhost:5000/foods/top/v1') },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/top-food/:id", element: <TopPrdctDtls />, loader: ({ params }) => fetch(`http://localhost:5000/top-food/v1/${params.id}`) }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><AuthProvider><RouterProvider router={router} /></AuthProvider></React.StrictMode>
);
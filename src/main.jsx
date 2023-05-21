import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import About from "./components/About/About.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import AddToy from "./components/AddToy/AddToy.jsx";
import ToyDetails from "./components/ToyDetails/ToyDetails.jsx";
import MyToy from "./components/MyToy/MyToy.jsx";
import EditToys from "./components/EditToys/EditToys.jsx";
import PrivateRoute from "./components/routes/PrivateRoute.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "toy/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "addToy",
        element: <AddToy></AddToy>,
      },
      {
        path: "myToy",
        element: <MyToy></MyToy>,
      },
      {
        path: "editToy/:id",
        element: <EditToys></EditToys>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);

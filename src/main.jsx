import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./Index.css";
import App from "./App";
import Accueil from "./pages/Accueil";
import Daltonisme from "./pages/Daltonisme";
import Equipe from "./pages/Equipe";
import Experience1 from "./pages/Experience1";
import Experience2 from "./pages/Experience2";
import Experience3 from "./pages/Experience3";
import Experience4 from "./pages/Experience4";
import Conclusion from "./pages/Conclusion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/daltonisme",
        element: <Daltonisme />,
      },
      {
        path: "/experience",
        element: <Experience1 />,
      },
      {
        path: "/experience-2",
        element: <Experience2 />,
      },
      {
        path: "/experience-3",
        element: <Experience3 />,
      },
      {
        path: "/experience-4",
        element: <Experience4 />,
      },
      {
        path: "/conclusion",
        element: <Conclusion />,
      },
      {
        path: "/equipe",
        element: <Equipe />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

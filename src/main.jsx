import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Accueil from "./pages/Accueil";
import Daltonisme from "./pages/Daltonisme";
import Experience from "./pages/Experience";
import Equipe from "./pages/Equipe";

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
        element: <Experience />,
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

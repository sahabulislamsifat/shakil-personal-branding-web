import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    Component: NotFound,
    path: "/notFound",
  },
]);

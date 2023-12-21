import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./page/Home";
import Intro from "./page/Intro";

const home = {
  index: true,
  element: <Home />,
};

const routerConfig = [
  {
    path: "/",
    element: <App />,
    children: [home],
  },
];

export const router = createBrowserRouter(routerConfig, {
  basename: "/slyricfarm",
});

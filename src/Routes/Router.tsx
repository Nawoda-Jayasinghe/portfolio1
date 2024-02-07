import { createBrowserRouter } from "react-router-dom";
import { URLS } from "../Constants/urls";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Root from "../Pages/Root";

const router = createBrowserRouter([
  {
    path: URLS.Home,
    element: <Root />,
    children: [
      { path: URLS.Home, element: <Home /> },
      { path: URLS.About, element: <About /> },
    ],
  },
],{ basename: import.meta.env.DEV ? "/" : "/portfolio1/" });

export default router;

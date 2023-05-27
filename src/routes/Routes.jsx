import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Blogs from "../pages/Blogs";
import HeroArea from "../pages/HeroArea";
import Portfolio from "../pages/Portfolio";
import NotFoundPage from "../pages/NotFounPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "hero",
        element: <HeroArea></HeroArea>
      },
      {
        path: "portfolio",
        element: <Portfolio></Portfolio>
      }
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Blogs from "../pages/Blogs";
import HeroArea from "../pages/HeroArea";
import NotFoundPage from "../pages/NotFounPage";
import RecifeGallery from "../pages/RecifeGallery";
import ChefCard from "../pages/ChefCard";
import ViewRecife from "../pages/ViewRecife";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../pages/AboutUs";

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
        path: "about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "hero",
        element: <HeroArea></HeroArea>,
      },
      {
        path: "recife",
        element: <RecifeGallery></RecifeGallery>,
      },
      {
        path: "chefcard",
        element: <ChefCard></ChefCard>,
      },
      {
        path: "chefs/:id",
        element: (
          <PrivateRoute>
            <ViewRecife></ViewRecife>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b7a10-chef-recipe-hunter-server-side-ayatbd.vercel.app/chefs/${params.id}`
          ),
      },
    ],
  },
]);

export default router;

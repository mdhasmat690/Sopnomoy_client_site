import { createBrowserRouter } from "react-router-dom";
import Home from "../component/home/Home";
import Services from "../component/home/services/Services";
import Video from "../component/home/video/Video";
import ForgetPassword from "../component/user/ForgetPassword";
import Login from "../component/user/Login";
import SignUp from "../component/user/SignUp";
import Main from "../layout/Main";
import DesginProjects from "../pages/findwork/DesginProjects";
import JobBoards from "../pages/findwork/JobBoard";
import SingleJob from "../pages/findwork/SingleJob";
import SingleService from "../pages/services/SingleService";
import SingleStory from "../pages/stories/SingleStory";
import Stories from "../pages/stories/Stories";
import LarnMore from "../pages/warmUp/LarnMore";
import WarmUp from "../pages/warmUp/WarmUp";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/singleProduct/:id", element: <SingleService /> },
      { path: "/blog", element: <Stories /> },
      { path: "/blog/:id", element: <SingleStory /> },
      { path: "/warmUp", element: <WarmUp /> },
      { path: "/warmUp/:id", element: <LarnMore /> },
      { path: "/desginProjects", element: <DesginProjects /> },
      { path: "/jobBoards", element: <JobBoards /> },
      { path: "/singleJob", element: <SingleJob /> },
      { path: "/signUp", element: <SignUp /> },
      { path: "/login", element: <Login /> },
      { path: "/forgetPassword", element: <ForgetPassword /> },
    ],
  },
]);

export default routes;

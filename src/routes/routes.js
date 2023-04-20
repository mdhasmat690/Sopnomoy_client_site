import { createBrowserRouter } from "react-router-dom";
import Home from "../component/home/Home";
import Services from "../component/home/services/Services";
import ServicesByEmail from "../component/home/services/ServicesByEmail";
import Video from "../component/home/video/Video";
import PrivetRoute from "../component/privetRoute/PrivetRoute";
import ForgetPassword from "../component/user/ForgetPassword";
import Login from "../component/user/Login";
import SignUp from "../component/user/SignUp";
import Main from "../layout/Main";
import DesginProjects from "../pages/findwork/DesginProjects";
import JobBoards from "../pages/findwork/JobBoard";
import SingleJob from "../pages/findwork/SingleJob";
import EmptyCreateAccout from "../pages/getStart/EmptyCreateAccout";
import GetStart from "../pages/getStart/GetStart";
import HiringFreelance from "../pages/getStart/HiringFreelance";
import HiringWorkType from "../pages/getStart/HiringWorkType";
import Welcome from "../pages/getStart/Welcome";
import PostFrelance from "../pages/hireDesginer/PostFrelance";
import SingleService from "../pages/services/SingleService";
import SingleStory from "../pages/stories/SingleStory";
import Stories from "../pages/stories/Stories";
import LarnMore from "../pages/warmUp/LarnMore";
import WarmUp from "../pages/warmUp/WarmUp";
import Dashboard from "../component/chating/Dashboard";
import ChatUi from "../component/chating/ChatUi";
import Profile from "../pages/profile/Profile";
import Works from "../pages/profile/Works";
import Collection from "../pages/profile/Collection";
import LinkedShoot from "../pages/profile/LinkedShoot";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/singleProduct/:id",
        element: (
          <PrivetRoute>
            {" "}
            <SingleService />
          </PrivetRoute>
        ),
      },

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
      {
        path: "/postFrelance",
        element: <PostFrelance />,
      },
      {
        path: "/getStart",
        element: (
          <PrivetRoute>
            {" "}
            <GetStart />
          </PrivetRoute>
        ),
      },
      { path: "/welcome", element: <Welcome /> },
      { path: "/hiringWorkType", element: <HiringWorkType /> },
      { path: "/hiringFreelance", element: <HiringFreelance /> },
      { path: "/emptyCreateAccout", element: <EmptyCreateAccout /> },
      { path: "/servicesByEmail/:id", element: <ServicesByEmail /> },
      { path: "/inbox", element: <ChatUi /> },
      { path: "/profile", element: <Profile /> },
      {
        element: <ChatUi />,
        children: [
          {
            path: "/message/:id",
            element: <Dashboard />,
          },
        ],
      },
      {
        element: <Profile />,
        children: [
          /*   {
            path: "/work",
            element: <Work />,
          }, */
          { path: "/work", element: <Works /> },
          { path: "/collection", element: <Collection /> },
          { path: "/linkedShoot", element: <LinkedShoot /> },
        ],
      },
    ],
  },
]);

export default routes;

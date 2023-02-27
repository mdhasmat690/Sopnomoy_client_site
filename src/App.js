import { RouterProvider } from "react-router-dom";
import "./App.css";
import Footer from "./component/home/Footer";
import NaveBar from "./component/home/NaveBar";
import ServiceItem from "./component/home/services/ServiceItem";
import Services from "./component/home/services/Services";
import Video from "./component/home/video/Video";
import { AuthProvider } from "./contexts/AuthContext";
import DesginProjects from "./pages/findwork/DesginProjects";
import SingleService from "./pages/services/SingleService";
import SingleStory from "./pages/stories/SingleStory";
import Stories from "./pages/stories/Stories";
import LarnMore from "./pages/warmUp/LarnMore";
import WarmUp from "./pages/warmUp/WarmUp";
import routes from "./routes/routes";

function App() {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>

      {/* <NaveBar /> */}
      {/* <Video /> */}
      {/* <Services /> */}
      {/* <ServiceItem /> */}
      {/* <Footer /> */}
      {/* <SingleService /> */}

      {/* <Stories /> */}
      {/* <SingleStory /> */}
      {/* <WarmUp /> */}
      {/* <DesginProjects /> */}

      {/* <LarnMore /> */}
    </div>
  );
}

export default App;

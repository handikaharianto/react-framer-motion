import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import FadeInAndUp from "../pages/fade-in-and-up";
import StaggeredAndScroll from "../pages/staggered-and-scroll";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/staggered-and-scroll",
    element: <StaggeredAndScroll />,
  },
  {
    path: "/fade-in-and-up",
    element: <FadeInAndUp />,
  },
]);

export default router;

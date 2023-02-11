import { createBrowserRouter } from "react-router-dom";
import App from "../App";
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
]);

export default router;

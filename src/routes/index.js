/** @format */

import AboutUs from "../pages/AboutUs/AboutUs";
import Index from "../pages/Home/Index";

const routes = {
  defaultLayout: [
    {
      element: <Index />,
      path: "/",
    },
    {
      element: <AboutUs />,
      path: "/about-us",
    },
  ],
};

export default routes;

/** @format */
import DefaultLayout from "../Layouts/DefaultLayout";
import AboutUs from "../pages/AboutUs/AboutUs";
import Faq from "../pages/Faq/Faq";
import Index from "../pages/Home/Index";

const routes = [
  {
    layout: DefaultLayout,
    routes: [
      {
        element: <Index />,
        path: "/",
      },
      {
        element: <AboutUs />,
        path: "/about-us",
      },
      {
        element: <Faq />,
        path: "/faq",
      },
    ],
  },

  // {
  //   layout: null, // No layout (for NotFound page)
  //   routes: [
  //     {
  //       element: <NotFound />,
  //       path: "*",
  //     },
  //   ],
  // },
];

export default routes;

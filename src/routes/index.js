/** @format */
import DefaultLayout from "../Layouts/DefaultLayout";
import AboutUs from "../pages/AboutUs/AboutUs";
import DoctorLogin from "../pages/DoctorPanel/Login/DoctorLogin";
import Faq from "../pages/Faq/Faq";
import Index from "../pages/Home/Index";
import NewsArticle from "../pages/News/NewsArticle";
import NotFound from "../pages/NotFound/404";
import PrivacyPolicy from "../pages/Policy/PrivacyPolicy";
import Terms from "../pages/Terms/Terms";
import DoctorRegister from "../pages/DoctorPanel/Register/DoctorRegister";
import DoctorPanelLayout from "../Layouts/DoctorPanelLayout";
import DoctorDashboard from "../pages/DoctorPanel/Dashboard/DoctorDashboard";

const routes = [
  // Default Layout
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
      {
        element: <PrivacyPolicy />,
        path: "/privacy-policy",
      },
      {
        element: <Terms />,
        path: "/terms&conditions",
      },
      {
        element: <NewsArticle />,
        path: "/news/post/:id",
      },
    ],
  },
  // Pages Without Layout
  {
    layout: null,
    routes: [
      {
        element: <DoctorLogin />,
        path: "/doctor/login",
      },
      {
        element: <DoctorRegister />,
        path: "/doctor/register",
      },
      {
        element: <NotFound />,
        path: "*",
      },
    ],
  },
  // Doctor Panel Layout
  {
    layout: DoctorPanelLayout,
    routes: [
      {
        element: <DoctorDashboard />,
        path: "/doctor/dashboard",
      },
    ],
  },
];

export default routes;

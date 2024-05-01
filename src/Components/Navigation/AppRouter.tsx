import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../Pages/Home/HomePage";
import GlobalError from "../../Pages/GlobalError/GlobalErrorPage";
import GetStartedPage from "../../Pages/GetStarted/GetStartedPage";
import QueryPage from "../../Pages/Query/QueryPage";
import DashboardPage from "../../Pages/Dashboard/DashboardPage";
import { NavItem, NavToPath } from "./Nav.const";
import AnswerList from "../../Pages/AnswerList/AnswerList";
import SavedAnswer from "../Answer/SavedAnswer";

const router = createBrowserRouter([
  {
    path: NavToPath[NavItem.HOME],
    element: <HomePage />,
    errorElement: <GlobalError />,
    children: [
      {
        index: true,
        element: <GetStartedPage />,
        errorElement: <GlobalError />,
      },
      {
        path: NavToPath[NavItem.QUERY],
        element: <QueryPage />,
        errorElement: <GlobalError />,
      },
      {
        path: NavToPath[NavItem.ANSWERS],
        element: <AnswerList />,
        errorElement: <GlobalError />,
      },
      {
        path: NavToPath[NavItem.DASHBOARD],
        element: <DashboardPage />,
        errorElement: <GlobalError />,
      },
      {
        path: NavToPath[NavItem.SAVED_ANSWERS],
        element: <SavedAnswer />,
        errorElement: <GlobalError />,
      },
      {
        path: "*",
        element: <GlobalError />,
        errorElement: <GlobalError />,
      },
    ],
  },
]);

export default router;

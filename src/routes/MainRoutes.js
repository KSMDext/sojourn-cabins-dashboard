import { Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Dashboard } from "../pages";

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    //   ================= dashboard =================

    {
      path: "/",
      element: <Navigate to="/dashboard" />,
    },
    {
      path: "",
      element: <Navigate to="/dashboard" />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },

    //  ==================== End Dashboard =========================

    // ================= other routes goes here ===================

    //  ======================== End Other routes =================



    
    // NB: Keep this as the last route
    // ========== 404 pages ====================

    {
      path: "*",
      element: <Navigate to="/page-not-found" />,
    },

    //  =======================
  ],
};

export default MainRoutes;

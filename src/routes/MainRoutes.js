import { Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { AddCabins, AddExtraCharge, AddLocation, AddReservations, AddSeasonalRule, AddStaff, Analytics, Cabins, CreatePackage, Dashboard, Emails, ExtraCharge, Extras, Feedback, GeneralSettings, Location, Packages, Policies, Reservations, SeasonalRule, Staff, UpdateCabins, UpdateExtraCharge, UpdateReservations, UpdateSeasonalRule, UpdateStaff } from "../pages";
import UpdateLocation from "../pages/Location/UpdateLocation";

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
    {
      path: "",
      element: <Reservations />,
    },
    {
      path: "",
      element: <AddReservations />,
    },
    {
      path: "",
      element: <UpdateReservations />,
    },
    {
      path: "",
      element: <Location />,
    },
    {
      path: "",
      element: <AddLocation />,
    },
    {
      path: "",
      element: <UpdateLocation />,
    },
    {
      path: "",
      element: <Cabins />,
    },
    {
      path: "",
      element: <AddCabins />,
    },
    {
      path: "",
      element: <UpdateCabins />,
    },
    {
      path: "",
      element: <Staff />,
    },
    {
      path: "",
      element: <AddStaff />,
    },
    {
      path: "",
      element: <UpdateStaff />,
    },
    {
      path: "",
      element: <Analytics />,
    },
    {
      path: "",
      element: <Feedback />,
    },
    {
      path: "",
      element: <SeasonalRule />,
    },
    {
      path: "",
      element: <AddSeasonalRule />,
    },
    {
      path: "",
      element: <UpdateSeasonalRule />,
    },
    {
      path: "",
      element: <ExtraCharge />,
    },
    {
      path: "",
      element: <AddExtraCharge />,
    },
    {
      path: "",
      element: <Packages />,
    },
    {
      path: "",
      element: <CreatePackage />,
    },
    {
      path: "",
      element: <GeneralSettings />,
    },
    {
      path: "",
      element: <Emails />,
    },
    {
      path: "",
      element: <Policies />,
    },
    {
      path: "",
      element: <Extras />,
    },
    {
      path: "",
      element: <UpdateExtraCharge />,
    },
    {
      path: "",
      element: <UpdateSeasonalRule  />,
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

import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar, Sidebar } from './components';
import { Dashboard, Analytics, Feedback } from './pages';
import { Location } from './pages';
import { Cabins } from './pages';
import { Reservations } from './pages';
import { Staff } from './pages';
import './App.css';
import SignIn from './SignIn';

import SeasonalRule from './pages/PriceOptions/SeasonalRule';
import ExtraCharge from './pages/PriceOptions/ExtraCharge';
import Coupons from './pages/PriceOptions/Coupons';
import Packages from './pages/PriceOptions/Packages';
import GeneralSettings from './pages/Settings/GeneralSettings';
import Extras from './pages/Settings/Extras';
import Emails from './pages/Settings/Emails';
import Policies from './pages/Settings/Policies';
import AddReservations from './pages/Reservations/AddReservations';
import UpdateReservations from './pages/Reservations/UpdateReservations';
import AddLocation from './pages/Location/AddLocation';
import AddCabins from './pages/Cabins/AddCabins';
import UpdateCabins from './pages/Cabins/UpdateCabins';
import AddCoupon from './pages/PriceOptions/AddCoupon';
import AddSeasonalRule from './pages/PriceOptions/AddSeasonalRule';
import AddExtraCharge from './pages/PriceOptions/AddExtraCharge';
import AddStaff from './pages/Staff/AddStaff';
import UpdateStaff from './pages/Staff/UpdateStaff';
import CreatePackage from './pages/PriceOptions/CreatePackage';
import UpdateLocation from './pages/Location/UpdateLocation';

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              isSignedIn ? (
                <>
                  <div className="flex relative dark:bg-main-dark-bg">
                    <div className="w-60 fixed sidebar dark:bg-secondary-dark-bg bg-stone-900">
                      <Sidebar />
                    </div>
                    <div className="dark:bg-main-dark-bg  bg-zinc-200 min-h-screen md:ml-60 w-full">
                      <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                        <Navbar />
                      </div>
                      <div>
                        <Routes>
                          <Route path="/" element={<Dashboard />} />
                          <Route path="/reservations" element={<Reservations />} />
                          <Route path="/addreservations" element={<AddReservations />} />
                          <Route path="/updatereservations" element={<UpdateReservations />} />
                          <Route path="/location" element={<Location />} />
                          <Route path="/addlocation" element={<AddLocation />} />
                          <Route path="/updatelocation" element={<UpdateLocation />} />
                          <Route path="/cabins" element={<Cabins />} />
                          <Route path="/addcabins" element={<AddCabins />} />
                          <Route path="/updatecabins" element={<UpdateCabins />} />
                          <Route path="/staff" element={<Staff />} />
                          <Route path="/addstaff" element={<AddStaff />} />
                          <Route path="/updatestaff" element={<UpdateStaff />} />
                          <Route path="/analytics" element={<Analytics />} />
                          <Route path="/feedback" element={<Feedback />} />
                          <Route path="/priceoptions/seasonalrule" element={<SeasonalRule />} />
                          <Route path="/addseasonalrule" element={<AddSeasonalRule />} />
                          <Route path="/priceoptions/extracharge" element={<ExtraCharge />} />
                          <Route path="/addextracharge" element={<AddExtraCharge />} />
                          <Route path="/priceoptions/coupons" element={<Coupons />} />
                          <Route path="/addcoupons" element={<AddCoupon />} />
                          <Route path="/priceoptions/packages" element={<Packages />} />
                          <Route path="/createpackage" element={<CreatePackage />} />
                          <Route path="/settings/generalsettings" element={<GeneralSettings />} />
                          <Route path="/settings/emails" element={<Emails />} />
                          <Route path="/settings/policies" element={<Policies />} />
                          <Route path="/settings/extras" element={<Extras />} />
                        </Routes>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <SignIn handleSignIn={handleSignIn} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;



import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Signin, Dashboard, Reservations, Location, Cabins, Staff, Analytics, Feedback, PriceOption, Settings } from './pages';

import { useStateContext } from './contexts/ContextProvider';
import './App.css';



const App = () => {
  const {activeMenu} = useStateContext();
  

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          
          {activeMenu ? (
            <div className="w-60 fixed sidebar dark:bg-secondary-dark-bg bg-black ">
              <Sidebar/> 
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar/> 
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-60 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar/> 
            </div>
            <div>
              <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/reservations" element={<Reservations/>} />
                <Route path="/addreservations" element="AddReservation" />
                <Route path="/updatereservations" element="UpdateReservation" />
                <Route path="/location" element={<Location/>} />
                <Route path="/addlocation" element="AddLocation" />
                <Route path="/updatelocation" element="UpdateLocation" />
                <Route path="/cabins" element={<Cabins/>} />
                <Route path="/addcabins" element="AddCabins" />
                <Route path="/updatecabins" element="UpdateCabins" />
                <Route path="/staff" element={<Staff/>} />
                <Route path="/addstaff" element="AddStaff" />
                <Route path="/updatestaff" element="UpdateStaff" />
                <Route path="/analytics" element={<Analytics/>} />
                <Route path="/feedback" element={<Feedback/>} />
                <Route path="/priceoption/seasonalrule" element="PriceOption_SeasonalRule" />
                <Route path="/addseasonalrule" element="AddSeasonalRule" />
                <Route path="/priceoption/extracharge" element="PriceOption_ExtraCharge" />
                <Route path="/addextracharge" element="AddExtraCharge" />
                <Route path="/priceoption/coupons" element="PriceOption_Coupons" />
                <Route path="/addcoupons" element="AddCoupons" />
                <Route path="/priceoptions/packages" element="PriceOption_Packages" />
                <Route path="/createpackage" element="CreatePackage" />
                <Route path="/settings/generalsettings" element="Settings_GeneralSettings" />
                <Route path="/settings/Emails" element="Settings_Emails" />
                <Route path="/settings/Policies" element="Settings_Policies" />
                <Route path="/settings/extras" element="Settings_Extras" />
                
              </Routes>
            </div>
          
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

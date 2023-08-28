import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar, Sidebar} from './components';
import { Dashboard,  Analytics, Feedback, AddReservations, UpdateReservations, AddLocation, AddCabins, UpdateCabins, AddStaff, UpdateStaff, AddSeasonalRule, AddExtraCharge, CreatePackage, UpdateExtraCharge, UpdateSeasonalRule} from './pages';
import {Location} from './pages';
import {Cabins} from './pages';
import {Reservations} from './pages';
import {Staff} from './pages';
import SignIn from './SignIn';


import { useStateContext } from './contexts/ContextProvider';
import './App.css';
import SeasonalRule from './pages/PriceOptions/SeasonalRule';
import ExtraCharge from './pages/PriceOptions/ExtraCharge';
import Coupons from './pages/PriceOptions/Coupons';
import Packages from './pages/PriceOptions/Packages';
import GeneralSettings from './pages/Settings/GeneralSettings';
import Extras from './pages/Settings/Extras';
import Emails from './pages/Settings/Emails';
import Policies from './pages/Settings/Policies';
import UpdateLocation from './pages/Location/UpdateLocation';
import AddCoupon from './pages/PriceOptions/AddCoupon';
import AddFaq from './pages/Settings/AddFaq';
import AddTestimonial from './pages/Settings/AddTestimonial';
import AddToGallery from './pages/Settings/AddToGallery';
import UpdateCoupon from './pages/PriceOptions/UpdateCoupon';


const App = () => {
  const {activeMenu} = useStateContext();
  const [isSignedIn, setIsSignedIn] = useState(localStorage.getItem('isSignedIn') === 'true');

  const handleSignIn = () => {
    setIsSignedIn(true);
    localStorage.setItem('isSignedIn', 'true');
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              isSignedIn ?(
                <>
                  <div className="flex relative dark:bg-main-dark-bg">
          
          {activeMenu ? (
            <div className="w-60 fixed sidebar dark:bg-secondary-dark-bg bg-stone-900 ">
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
                ? 'dark:bg-main-dark-bg  bg-zinc-200 min-h-screen md:ml-60 w-full  '
                : 'bg-zinc-200 dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }>
            <div className={`${activeMenu ? "hidden" : "fixed"} md:static bg-main-bg dark:bg-main-dark-bg navbar w-full `}>
              <Navbar/> 
            </div>
            <div>
              <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/reservations" element={<Reservations/>} />
                <Route path="/addreservations" element={<AddReservations/>} />
                <Route path="/updatereservations" element={<UpdateReservations/>} />
                <Route path="/location" element={<Location/>} />
                <Route path="/addlocation" element={<AddLocation/>} />
                <Route path="/updatelocation" element={<UpdateLocation/>} />
                <Route path="/cabins" element={<Cabins/>} />
                <Route path="/addcabins" element={<AddCabins/>} />
                <Route path="/updatecabins" element={<UpdateCabins/>} />
                <Route path="/staff" element={<Staff/>} />
                <Route path="/addstaff" element={<AddStaff/>} />
                <Route path="/updatestaff" element={<UpdateStaff/>} />
                <Route path="/analytics" element={<Analytics/>} />
                <Route path="/feedback" element={<Feedback/>} />
                <Route path="/priceoptions/seasonalrule" element={<SeasonalRule/>} />
                <Route path="/addseasonalrule" element={<AddSeasonalRule/>} />
                <Route path="/priceoptions/extracharge" element={<ExtraCharge/>} />
                <Route path="/addextracharge" element={<AddExtraCharge/>} />
                <Route path="/priceoptions/coupons" element={<Coupons/>} />
                <Route path="/addcoupons" element={<AddCoupon/>} />
                <Route path="/priceoptions/packages" element={<Packages/>} />
                <Route path="/createpackage" element={<CreatePackage/>} />
                <Route path="/settings/generalsettings" element={<GeneralSettings/>} />
                <Route path="/settings/emails" element={<Emails/>} />
                <Route path="/settings/policies" element={<Policies/>} />
                <Route path="/settings/extras" element={<Extras/>} />
                <Route path="/addfaq" element={<AddFaq/>} />
                <Route path="/addtestimonial" element={<AddTestimonial/>} />
                <Route path="/addtogallery" element={<AddToGallery/>} />
                <Route path="/updatecoupon" element ={<UpdateCoupon/>}/>
                <Route path="/updateextracharge" element={<UpdateExtraCharge/>}/>
                <Route path="/updateseasonalrule" element={<UpdateSeasonalRule/>}/>
                
              </Routes>
            </div>
          
              </div>
              </div>
                </>
              ):(
                <SignIn handleSignIn={handleSignIn} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
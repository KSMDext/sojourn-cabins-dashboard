
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar, Sidebar } from './components';
import { Dashboard, Analytics, Feedback } from './pages';
import { Location, Cabins, Reservations, Staff } from './pages';
import { AddReservation, UpdateReservation } from './pages';
import { AddLocation, UpdateLocation } from './pages';
import { AddCabins, UpdateCabins } from './pages';
import { AddStaff, UpdateStaff } from './pages';
import SeasonalRule from './pages/PriceOptions/SeasonalRule';
import ExtraCharge from './pages/PriceOptions/ExtraCharge';
import Coupons from './pages/PriceOptions/Coupons';
import Packages from './pages/PriceOptions/Packages';
import GeneralSettings from './pages/Settings/GeneralSettings';
import Extras from './pages/Settings/Extras';
import Emails from './pages/Settings/Emails';
import Policies from './pages/Settings/Policies';

const PrivateRoute = ({ element, path }) => {
  const [authenticated, setAuthenticated] = useState(false);

  return authenticated ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/signin" replace={true} />
  );
};

const SignInPage = ({ setAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Perform your sign-in logic here
    // Validate username and password
    if (username === 'sampleuser' && password === 'samplepassword') {
      // On successful sign-in, update the authenticated state to true
      setAuthenticated(true);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="w-60 fixed sidebar dark:bg-secondary-dark-bg bg-stone-900 ">
            <Sidebar />
          </div>
          <div className={activeMenu ? 'dark:bg-main-dark-bg  bg-zinc-200 min-h-screen md:ml-60 w-full  ' : 'bg-zinc-200 dark:bg-main-dark-bg  w-full min-h-screen flex-2 '}>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              <Routes>
                <Route path="/signin" element={<SignInPage setAuthenticated={setAuthenticated} />} />
                <PrivateRoute path="/" element={<Dashboard />} />
                <PrivateRoute path="/dashboard" element={<Dashboard />} />
                <PrivateRoute path="/analytics" element={<Analytics />} />
                <PrivateRoute path="/feedback" element={<Feedback />} />
                <PrivateRoute path="/reservations" element={<Reservations />} />
                <PrivateRoute path="/addreservations" element={<AddReservation />} />
                <PrivateRoute path="/updatereservations" element={<UpdateReservation />} />
                <PrivateRoute path="/location" element={<Location />} />
                <PrivateRoute path="/addlocation" element={<AddLocation />} />
                <PrivateRoute path="/updatelocation" element={<UpdateLocation />} />
                <PrivateRoute path="/cabins" element={<Cabins />} />
                <PrivateRoute path="/addcabins" element={<AddCabins />} />
                <PrivateRoute path="/updatecabins" element={<UpdateCabins />} />
                <PrivateRoute path="/staff" element={<Staff />} />
                <PrivateRoute path="/addstaff" element={<AddStaff />} />
                <PrivateRoute path="/updatestaff" element={<UpdateStaff />} />
                <PrivateRoute path="/analytics" element={<Analytics />} />
                <PrivateRoute path="/feedback" element={<Feedback />} />
                <PrivateRoute path="/priceoptions/seasonalrule" element={<SeasonalRule />} />
                <PrivateRoute path="/addseasonalrule" element={<AddSeasonalRule />} />
                <PrivateRoute path="/priceoptions/extracharge" element={<ExtraCharge />} />
               

 <PrivateRoute path="/addextracharge" element={<AddExtraCharge />} />
                <PrivateRoute path="/priceoptions/coupons" element={<Coupons />} />
                <PrivateRoute path="/addcoupons" element={<AddCoupons />} />
                <PrivateRoute path="/priceoptions/packages" element={<Packages />} />
                <PrivateRoute path="/createpackage" element={<CreatePackage />} />
                <PrivateRoute path="/settings/generalsettings" element={<GeneralSettings />} />
                <PrivateRoute path="/settings/emails" element={<Emails />} />
                <PrivateRoute path="/settings/policies" element={<Policies />} />
                <PrivateRoute path="/settings/extras" element={<Extras />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;



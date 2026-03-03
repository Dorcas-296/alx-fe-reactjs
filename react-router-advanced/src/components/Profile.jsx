import React from 'react'
import {Routes, Route, Link } from "react-router-dom"
import ProfileDetails from "./components/ProfileDetails.jsx";
import ProfileSettings from "./components/ProfileSettings.jsx";

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>
      
      <Route>
        <Route path='details' element={<ProfileDetails />} />
        <Route path='settings' element={<ProfileSettings />} />
      </Route>
    </div>
  );
}

export default Profile;
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./component/Home.jsx";
import Profile from "./component/Profile.jsx";
import ProfileDetails from "./component/ProfileDetails.jsx";
import ProfileSettings from "./component/ProfileSettings.jsx";
import BlogPost from "./component/BlogPost.jsx";
import Login from "./component/Login.jsx";


  const profileAuth = { isAuthenticated: false };

  function protectedRoute({ children }) {
     return profileAuth.isAuthenticated ? children : <Navigate to="/login" />;
  }

  function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route 
          path="/profile/*"
            element={
              <protectedRoute>
                <Profile />
              </protectedRoute>
            }
          >

          <Route path='details' element={<ProfileDetails />} />
          <Route path='settings' element={<ProfileSettings />} />
        </Route>

        <Route path='/blog/:postId' element={<BlogPost />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App

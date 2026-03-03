import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/Home.jsx";
import Profile from "./components/Profile.jsx";
import BlogPost from "./components/BlogPost.jsx";
import Login from "./components/Login.jsx";


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
          />   

        <Route path='/blog/:id' element={<BlogPost />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App

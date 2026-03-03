import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/Home.jsx";
import Profile from "./components/Profile.jsx";
import BlogPost from "./components/BlogPost.jsx";
import Login from "./components/Login.jsx";
import ProtectedRoute from './components/ProtectedRoute.jsx';


  function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route 
          path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />   

        <Route path='/blog/:id' element={<BlogPost />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

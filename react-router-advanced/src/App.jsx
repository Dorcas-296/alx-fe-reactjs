import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

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

          <Route path='details' element={<profileDetails />} />
          <Route path='settings' element={<profileSettings />} />
        </Route>

        <Route path='/blog/:postId' element={<BlogPost />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App

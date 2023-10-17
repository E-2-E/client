import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import HomePage from "./pages/stathome/Homepage";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/home" /> : <Register />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

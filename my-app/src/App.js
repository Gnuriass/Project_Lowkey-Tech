import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Online from "./pages/Online";
import Onsite from "./pages/Onsite";

import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import { UserProvider, default as UserContext } from "./context/UserContext";

function Layout() {
  const location = useLocation();
  const { user } = useContext(UserContext);

  // ไม่แสดง Navbar ที่หน้า login และ signup
  const hideNavbar = ["/login", "/signup"].includes(location.pathname);

  let NavbarToShow = null;
  if (!hideNavbar) {
    if (location.pathname === "/home2" && user) {
      NavbarToShow = <Navbar2 />;
    } else {
      NavbarToShow = <Navbar />;
    }
  }

  return (
    <>
      {NavbarToShow}

      <div style={{ paddingTop: "60px" }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/home2" element={user ? <Home2 /> : <Navigate to="/login" replace />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" replace />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courseonline" element={<Online />} />
          <Route path="/courseonsite" element={<Onsite />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <UserProvider>
      <Router>
        <Layout />
      </Router>
    </UserProvider>
  );
}

export default App;

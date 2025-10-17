import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Signup from "./pages/Signup";
import Welcome from "./pages/Login";
import FAQ from "./pages/FAQ";
import Online from "./pages/Online";
import Onsite from "./pages/Onsite";
import UserContext from "./context/UserContext";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";

function Layout() {
  const location = useLocation();
  const { user } = useContext(UserContext);

  // 🔸 หน้าไหนไม่ต้องโชว์ Navbar
  const hideNavbar = ["/signup", "/login"].includes(location.pathname);

  return (
    <>
      {!hideNavbar && (user ? <Navbar2 /> : <Navbar />)}

      <Routes>
        <Route path="/login" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="*"
          element={
            <div style={{ paddingTop: "60px" }}>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/home2" element={<Home2 />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/courseonline" element={<Online />} />
                <Route path="/courseonsite" element={<Onsite />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/profile" element={<Profile />} />

              </Routes>
            </div>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null // ✅ ดึงค่าจาก localStorage ถ้ามี
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Layout />
      </Router>
    </UserContext.Provider>
  );
}

export default App;

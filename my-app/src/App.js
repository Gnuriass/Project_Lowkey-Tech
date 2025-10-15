import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // โหลด CSS Bootstrap

import Contact from "./pages/Contact";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Welcome from "./pages/Login";
import FAQ from "./pages/FAQ";
import Online from "./pages/Online";
import Onsite from "./pages/Onsite";
import UserContext from "./context/UserContext"; 
import Navbar from "./components/Navbar";


function Layout() {
  const location = useLocation(); 
  const hideNavbar = [ "/signup", "/login"].includes(location.pathname); 

  return (
  <>
    {!hideNavbar && <Navbar />}

    <Routes>
      {/* Routes ที่ไม่ต้องมี paddingTop */}
      <Route path="/login" element={<Welcome />} />
      <Route path="/signup" element={<Signup />} />

      {/* Routes ที่ต้องมี paddingTop */}
      <Route
        path="*"
        element={
          <div style={{ paddingTop: "60px" }}>
            <Routes>
              <Route path="/" element={<Home />} />  {/* หน้าแรกเป็น Home */}
              <Route path="/home" element={<Home />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/category/:type" element={<Category />} />
              <Route path="/courseonline" element={<Online />} />
              <Route path="/courseonsite" element={<Onsite />} />
            </Routes>
          </div>
        }
      />
    </Routes>
  </>
);


}


function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Layout />
      </Router>
    </UserContext.Provider>
  );
}
export default App;
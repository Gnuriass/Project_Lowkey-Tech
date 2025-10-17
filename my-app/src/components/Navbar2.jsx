import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Container,
  InputGroup,
} from "react-bootstrap";
import "../Navbar.css";
import logo from "../image/logo.png";
import search from "../image/search.png";
import us from "../image/us.png";
import sun from "../image/sun.png";
import moon from "../image/moon.png";
import UserContext from "../context/UserContext";

function NavBarComponent2() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [query, setQuery] = useState("");

  // 🌙 Dark mode toggle
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // 🔍 Search
  const handleSearch = (e) => {
    e.preventDefault();
    const lowerQuery = query.toLowerCase().trim();
    if (!lowerQuery) {
      navigate(`/search?query=${query}Notfound.`);
      return;
    }
    navigate(`/search?query=${lowerQuery}`);
    setQuery("");
  };

  // 🏠 คลิกโลโก้ → ไปหน้าแรก home2 + scroll top
  const handleLogoClick = () => {
    navigate("/home2");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 🚪 ออกจากระบบ → เคลียร์ user + กลับ home (Navbar ปกติ)
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/home"); // กลับหน้าแรกแบบ Navbar ปกติ
  };

  return (
    <Navbar expand="lg" fixed="top" className="bg-warning">
      <Container
        fluid
        className="d-flex align-items-center justify-content-between w-100"
      >
        {/* ✅ Logo คลิกได้ */}
        <div
          className="d-flex align-items-center gap-2 ms-5"
          onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
        >
          <img src={logo} alt="Logo" width="45" height="45" />
        </div>

        {/* 🔍 Search */}
        <Form className="flex-grow-1 mx-3" onSubmit={handleSearch}>
          <InputGroup
            style={{
              borderRadius: "50px",
              overflow: "hidden",
              backgroundColor: "white",
              maxWidth: "400px",
              margin: "0 auto",
            }}
          >
            <FormControl
              type="search"
              placeholder="SEARCH"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                border: "none",
                borderRadius: "50px",
                padding: "10px 15px",
                color: "#333",
              }}
            />
            <InputGroup.Text
              onClick={handleSearch}
              style={{
                backgroundColor: "white",
                border: "none",
                cursor: "pointer",
                padding: "10px 15px",
              }}
            >
              <img src={search} alt="Search Icon" width="22" height="22" />
            </InputGroup.Text>
          </InputGroup>
        </Form>

        {/* 📑 เมนูหลัก + 🌙 Dark mode + 👤 โปรไฟล์ */}
        <div className="d-flex align-items-center gap-4">
          {/* เมนู */}
          <Nav className="d-flex gap-3">
            <Nav.Link as={Link} to="/home2" className="text-dark" onClick={handleLogoClick}>
              หน้าแรก
            </Nav.Link>
            <Nav.Link as={Link} to="/courseonline" className="text-dark">
              หลักสูตร Online
            </Nav.Link>
            <Nav.Link as={Link} to="/courseonsite" className="text-dark">
              หลักสูตร Onsite
            </Nav.Link>
            <Nav.Link as={Link} to="/courses" className="text-dark">
              คอร์สแนะนำ
            </Nav.Link>
          </Nav>

          {/* 🌙 Dark mode switch */}
          <div className="d-flex align-items-center gap-2">
            <img
              src={darkMode ? sun : moon}
              alt={darkMode ? "Sun Icon" : "Moon Icon"}
              width="25"
              height="25"
              style={{ cursor: "pointer" }}
              onClick={toggleDarkMode}
            />
            <div
              onClick={toggleDarkMode}
              style={{
                width: "40px",
                height: "20px",
                backgroundColor: darkMode ? "#222" : "#fff",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                padding: "2px",
                cursor: "pointer",
                border: "1px solid #ccc",
              }}
            >
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: darkMode ? "#E6531A" : "#222",
                  borderRadius: "50%",
                  marginLeft: darkMode ? "auto" : "0",
                  transition: "0.3s",
                }}
              ></div>
            </div>
          </div>

          {/* 👤 โปรไฟล์ */}
          <NavDropdown
            title={<img src={us} alt="User Icon" width="35" height="35" />}
            id="user-dropdown"
            align="end"
            className="no-caret"
          >
            <NavDropdown.Item as={Link} to="/profile">
              โปรไฟล์ของฉัน
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleLogout} className="text-danger">
              ออกจากระบบ
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent2;

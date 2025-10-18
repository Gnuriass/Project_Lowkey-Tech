import { useState, useEffect, useContext, Button } from "react";
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

function NavBar2() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext); // ใช้ Context
  const [query, setQuery] = useState("");

  // 🌙 Dark mode toggle
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // ตรวจสอบ user ถ้าไม่มี → กลับหน้า home
  useEffect(() => {
    if (!user) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) {
        setUser(storedUser);
      } else {
        navigate("/home");
      }
    }
  }, [user, navigate, setUser]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

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

  const handleLogoClick = () => {
    navigate("/home2");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/home");
  };

  return (
    <Navbar expand="lg" fixed="top" className="bg-warning">
      <Container fluid className="d-flex align-items-center justify-content-between w-100">
        {/* Logo */}
        <div className="d-flex align-items-center gap-2 ms-5" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
          <img src={logo} alt="Logo" width="45" height="45" />
        </div>

        {/* Search */}
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

        {/* เมนู + Dark mode + Profile */}
        <div className="d-flex align-items-center gap-4">
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

          {/* Dark mode */}
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
              />
            </div>
          </div>

          {/* Profile dropdown */}
          {user ? (
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
          ) : (
            <Button variant="outline-dark" onClick={() => navigate("/login")}>
              เข้าสู่ระบบ
            </Button>
          )}
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar2;

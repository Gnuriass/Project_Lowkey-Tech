import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container,
  InputGroup,
} from "react-bootstrap";
import "../Navbar.css";
import logo from "../image/logo.png";
import search from "../image/search.png";
import us from "../image/us.png";
import sun from "../image/sun.png";
import moon from "../image/moon.png";

function NavBarComponent() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Dark mode
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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

  return (
    <Navbar expand="lg" fixed="top" className="bg-warning">
      <Container fluid className="d-flex align-items-center justify-content-between w-100">

        {/* Logo */}
        <div className="d-flex align-items-center gap-2">
          <img src={logo} alt="Logo" width="45" height="45" />
          <Nav.Link as={Link} to="/home" className="fw-bold text-dark">
            Lowkey Tech Co., Ltd.
          </Nav.Link>
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

        {/* เมนู + dark mode + login */}
        <div className="d-flex align-items-center gap-4">
          <Nav className="d-flex gap-3">
            <Nav.Link as={Link} to="/home" className="text-dark">
              เกี่ยวกับเรา
            </Nav.Link>
            <Nav.Link as={Link} to="/courseonline" className="text-dark">
              หลักสูตร Online
            </Nav.Link>
            <Nav.Link as={Link} to="/courseonsite" className="text-dark">
              หลักสูตร Onsite
            </Nav.Link>
            <NavDropdown title="หมวดหมู่" id="books-dropdown">
              <NavDropdown.Item as={Link} to="/category/offroad">Off Road</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/grandprix">Grand Prix</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/bank">การเงินธนาคาร</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/homegarden">บ้านและสวน</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/biomind">ชีวจิต</NavDropdown.Item>
            </NavDropdown>
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
              ></div>
            </div>
          </div>

          {/* User / Auth */}
          {isLoggedIn ? (
            <NavDropdown
              title={<img src={us} alt="User Icon" width="35" height="35" />}
              id="user-dropdown"
              align="end"
              className="no-caret"
            >
              <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setIsLoggedIn(false);
                  navigate("/");
                }}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <div className="d-flex gap-2">
              <Link to="/login" className="btn btn-outline-primary">Login</Link>
              <Link to="/signup" className="btn btn-primary">Signup</Link>
            </div>
          )}
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;


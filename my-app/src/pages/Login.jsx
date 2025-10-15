import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  Row,
  Col,
  Card,
  Alert,
} from "react-bootstrap";
import axios from "axios";
import mail from "../image/mail.png";
import pass from "../image/pass.png";
import a from "../image/a.jpg";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("กรุณากรอกอีเมลและรหัสผ่าน");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/login", { email, password });

      if (response.data.success) {
        if (rememberMe) {
          localStorage.setItem("user", JSON.stringify({ email, password }));
        }
        navigate("/home"); // ไปหน้า home หลัง login สำเร็จ
      } else {
        setError(response.data.message || "อีเมลหรือรหัสผ่านไม่ถูกต้อง");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("เกิดข้อผิดพลาด โปรดลองอีกครั้ง");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card
        className="shadow-lg overflow-hidden"
        style={{ width: "60rem", borderRadius: "40px" }}
      >
        <Row className="g-0">
          <Col md={6} className="p-5 bg-light">
            <h3 className="mb-4 fw-bold">เข้าสู่ระบบ</h3>

            {error && <Alert variant="danger">{error}</Alert>}

            <Form>
              <Form.Group className="mb-4">
                <Form.Control
                  type="email"
                  placeholder="อีเมล"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    backgroundImage: `url(${mail})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "5px center", // ชิดซ้ายขึ้น
                    paddingLeft: "35px", // เว้นที่ให้ตัวอักษรไม่ทับไอคอน
                    backgroundSize: "20px 20px", // ปรับขนาดไอคอน
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="รหัสผ่าน"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    backgroundImage: `url(${pass})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "5px center", // ชิดซ้ายขึ้น
                    paddingLeft: "35px", // เว้นที่ให้ตัวอักษรไม่ทับไอคอน
                    backgroundSize: "20px 20px", // ปรับขนาดไอคอน
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="จดจำฉันไว้"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              </Form.Group>

              <Button
                style={{ backgroundColor: "#fac240", color: "white" }}
                variant="primary"
                className="w-100"
                onClick={handleLogin}
              >
                เข้าสู่ระบบ
              </Button>

              <div
                className="mt-3 d-flex justify-content-center align-items-center"
                style={{ fontSize: "1.2rem" }}
              >
                <span>ไม่มีบัญชี?</span>
                <Button
                  variant="link"
                  onClick={() => navigate("/signup")}
                  style={{ fontSize: "1.2rem" }}
                >
                  ลงทะเบียน
                </Button>
              </div>
            </Form>
          </Col>

          <Col md={6} className="position-relative d-none d-md-block">
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-start align-items-center text-white"
              style={{
                backgroundImage: `url(${a})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                textAlign: "center",
                padding: "40px 20px 20px 20px", // padding บนเพิ่มให้ข้อความไม่ชิดขอบ
                backdropFilter: "brightness(100%)",
              }}
            >
              <h4
                className="fw-bold"
                style={{ fontSize: "2rem", color: "black" }}
              >
                ยินดีต้อนรับสู่ Lowkey Tech
              </h4>

              <p style={{ fontSize: "1.5rem", color: "black" }}>
                เปิดโลกดิจิทัล ให้ชีวิตง่ายขึ้น
              </p>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Login;

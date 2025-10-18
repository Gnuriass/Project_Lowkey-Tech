import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Card, Alert } from "react-bootstrap";
import axios from "axios";
import mail from "../image/mail.png";
import pass from "../image/pass.png";
import bg2 from "../image/bg2.jpg";
import UserContext from "../context/UserContext";

function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("กรุณากรอกอีเมลและรหัสผ่าน");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: email.toLowerCase().trim(),
        password,
      });

      if (response.data.success && response.data.user) {
        const userData = response.data.user;

        // 🔹 บันทึก Context
        if (setUser) setUser(userData);

        // 🔹 บันทึก localStorage เสมอ
        localStorage.setItem("user", JSON.stringify(userData));

        // 🔹 ถ้า rememberMe = false, สามารถเลือกลบ sessionStorage แทน
        if (!rememberMe) {
          sessionStorage.setItem("user", JSON.stringify(userData));
        }

        alert("เข้าสู่ระบบสำเร็จ!");
        navigate("/home2");
      } else {
        setError(response.data.message || "อีเมลหรือรหัสผ่านไม่ถูกต้อง");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || "เกิดข้อผิดพลาด โปรดลองอีกครั้ง");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: "#6b9fac" }}>
      <div className="d-flex flex-column justify-content-center align-items-center p-4" style={{ width: "50%", height: "100vh", backgroundColor: "#6b9fac" }}>
        <Card className="shadow-sm border-0" style={{ width: "500px", borderRadius: "16px", padding: "25px 30px", maxHeight: "100vh", backgroundColor: "white" }}>
          <h2 className="text-center fw-bold mb-3" style={{ color: "#f3a734ff", marginTop: "-20px" }}>เข้าสู่ระบบ</h2>
          <Form onSubmit={handleLogin}>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="อีเมล"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  backgroundImage: `url(${mail})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "8px center",
                  paddingLeft: "35px",
                  backgroundSize: "20px 20px",
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
                  backgroundPosition: "8px center",
                  paddingLeft: "35px",
                  backgroundSize: "20px 20px",
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

            <Button type="submit" className="w-100 fw-bold mb-3" style={{ backgroundColor: "#f3a734ff", border: "none", borderRadius: "8px" }}>
              เข้าสู่ระบบ
            </Button>

            <p className="text-center mb-0">
              ไม่มีบัญชี?{" "}
              <Button variant="link" onClick={() => navigate("/signup")} style={{ color: "#f3a734ff", textDecoration: "none" }}>
                ลงทะเบียน
              </Button>
              <Button variant="link" onClick={() => navigate("/home")} style={{ color: "#E6531A", textDecoration: "none" }}>
                กลับหน้าแรก
              </Button>
            </p>
          </Form>
        </Card>

        <div className="mt-4 text-center text-white">
          <h2 className="fw-bold mb-3" style={{ fontSize: "1.3rem" }}>
            เรียนรู้จากผู้สอนมืออาชีพ <br /> ทำให้เทคโนโลยีเป็นเรื่องง่ายสำหรับคุณ
          </h2>
          <p style={{ fontSize: "1rem", opacity: 0.9 }}>Loekey-Tech — เติมพลังดิจิทัลให้ชีวิตวัยเก๋า</p>
        </div>
      </div>

      <div className="d-none d-md-flex flex-column" style={{ width: "40%", height: "100vh", backgroundImage: `url(${bg2})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
    </div>
  );
}

export default Login;

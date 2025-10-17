import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Card } from "react-bootstrap";
import axios from "axios";
import user from "../image/user.png";
import mail from "../image/mail.png";
import pass from "../image/pass.png";
import map from "../image/map.png";
import agee from "../image/agee.png";
import carer from "../image/carer.png";
import bg from "../image/bg.jpg";

function Signup() {
  const navigate = useNavigate();
  const [username, setName] = useState("");
  const [lastname, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [career, setCareer] = useState("");
  const [gender, setGender] = useState("");
  const [province, setProvince] = useState("");
  const [age, setAge] = useState("");

  const provinces = [
    "กรุงเทพมหานคร",
    "กระบี่",
    "กาญจนบุรี",
    "กาฬสินธุ์",
    "กำแพงเพชร",
    "ขอนแก่น",
    "จันทบุรี",
    "ฉะเชิงเทรา",
    "ชลบุรี",
    "ชัยนาท",
    "ชัยภูมิ",
    "ชุมพร",
    "เชียงราย",
    "เชียงใหม่",
    "ตรัง",
    "ตราด",
    "ตาก",
    "นครนายก",
    "นครปฐม",
    "นครพนม",
    "นครราชสีมา",
    "นครศรีธรรมราช",
    "นครสวรรค์",
    "นนทบุรี",
    "นราธิวาส",
    "น่าน",
    "บึงกาฬ",
    "บุรีรัมย์",
    "ปทุมธานี",
    "ประจวบคีรีขันธ์",
    "ปราจีนบุรี",
    "ปัตตานี",
    "พระนครศรีอยุธยา",
    "พังงา",
    "พัทลุง",
    "พิจิตร",
    "พิษณุโลก",
    "เพชรบุรี",
    "เพชรบูรณ์",
    "แพร่",
    "พะเยา",
    "ภูเก็ต",
    "มหาสารคาม",
    "มุกดาหาร",
    "แม่ฮ่องสอน",
    "ยะลา",
    "ยโสธร",
    "ร้อยเอ็ด",
    "ระนอง",
    "ระยอง",
    "ราชบุรี",
    "ลพบุรี",
    "ลำปาง",
    "ลำพูน",
    "เลย",
    "ศรีสะเกษ",
    "สกลนคร",
    "สงขลา",
    "สตูล",
    "สมุทรปราการ",
    "สมุทรสงคราม",
    "สมุทรสาคร",
    "สระแก้ว",
    "สระบุรี",
    "สิงห์บุรี",
    "สุโขทัย",
    "สุพรรณบุรี",
    "สุราษฎร์ธานี",
    "สุรินทร์",
    "หนองคาย",
    "หนองบัวลำภู",
    "อ่างทอง",
    "อุดรธานี",
    "อุทัยธานี",
    "อุตรดิตถ์",
    "อุบลราชธานี",
    "อำนาจเจริญ",
  ];

  const careers = [
    "นักพัฒนาเว็บ",
    "นักพัฒนาแอป",
    "นักออกแบบกราฟิก",
    "ครู/อาจารย์",
    "นักศึกษา",
    "นักการตลาด",
    "พนักงานบริษัท",
    "ข้าราชการ",
    "อื่น ๆ",
  ];

  const handleSignup = async (e) => {
    e.preventDefault();

    // ตรวจสอบรหัสผ่านตรงกัน
    if (password !== confirmPassword) {
      setError("รหัสผ่านไม่ตรงกัน!");
      return;
    }

    // ตรวจสอบกรอกครบทุกช่อง
    if (
      !username ||
      !lastname ||
      !email ||
      !password ||
      !career ||
      !gender ||
      !province ||
      !age
    ) {
      setError("กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return;
    }

    setError(""); // ล้าง error ก่อนส่ง

    try {
      const newUser = {
        username,
        lastname,
        email,
        password,
        career,
        gender,
        province,
        age,
      };
      const response = await axios.post(
        "http://localhost:5000/signup",
        newUser
      );

      if (response.data.success) {
        alert("ลงทะเบียนสำเร็จ!");
        navigate("/login");
      } else {
        setError(response.data.message || "ลงทะเบียนไม่สำเร็จ");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError("เกิดข้อผิดพลาด โปรดลองอีกครั้ง");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{ backgroundColor: "#f5f6fa" }}
    >
      <div
        className="d-none d-md-flex flex-column justify-content-end align-items-start text-white p-5"
        style={{
          width: "50%",
          height: "100vh",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",

          paddingBottom: "60px",
        }}
      >
        <h1
          className="fw-bold mb-3"
          style={{ fontSize: "1.7rem", color: "black", marginTop: 0 }}
        >
          เริ่มต้นวันนี้ใช้เทคโนโลยีอย่างมั่นใจในทุกวัน <br /> 
        </h1>
        <p
          className="mt-2"
          style={{ fontSize: "1rem", color: "black", opacity: 0.9 }}
        >
          เรียนออนไลน์หรือเรียนที่สถาบัน คุณก็สามารถเลือกเรียนได้ทุกที่ทุกเวลา
          🌍
        </p>
      </div>

      <div
        className="d-flex flex-column justify-content-center align-items-center p-4"
        style={{ width: "55%", height: "100vh", backgroundColor: "#fbfaff" }}
      >
        <Card
          className="shadow-sm border-0"
          style={{
            width: "600px",
            borderRadius: "16px",
            padding: "25px 30px",
            maxHeight: "100vh",
            backgroundColor: "white",
          }}
        >
          <h2
            className="text-center fw-bold mb-3"
            style={{ color: "#f3a734ff", marginTop: "-20px" }}
          >
            สร้างบัญชี
          </h2>

          <Form onSubmit={handleSignup}>
            <div className="d-flex gap-2 mb-3">
              <Form.Control
                type="text"
                placeholder="ชื่อ"
                value={username}
                onChange={(e) => setName(e.target.value)}
                style={{
                  backgroundImage: `url(${user})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "8px center",
                  paddingLeft: "35px",
                  backgroundSize: "20px 20px",
                }}
              />
              <Form.Control
                type="text"
                placeholder="นามสกุล"
                value={lastname}
                onChange={(e) => setLast(e.target.value)}
                style={{
                  backgroundImage: `url(${user})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "8px center",
                  paddingLeft: "35px",
                  backgroundSize: "20px 20px",
                }}
              />
            </div>

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

            {/* Password */}
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="รหัสผ่าน"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={confirmPassword && password !== confirmPassword}
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
              <Form.Control
                type="password"
                placeholder="ยืนยันรหัสผ่าน"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                isInvalid={confirmPassword && password !== confirmPassword}
                style={{
                  backgroundImage: `url(${pass})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "8px center",
                  paddingLeft: "35px",
                  backgroundSize: "20px 20px",
                }}
              />
              <Form.Control.Feedback type="invalid">
                รหัสผ่านไม่ตรงกัน
              </Form.Control.Feedback>
            </Form.Group>

            {/* Career */}
            <Form.Group className="mb-3">
              <Form.Select
                value={career}
                onChange={(e) => setCareer(e.target.value)}
                style={{
                  backgroundImage: `url(${carer})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "8px center",
                  paddingLeft: "35px",
                  backgroundSize: "20px 20px",
                }}
              >
                <option value="">-- กรุณาเลือกอาชีพ --</option>
                {careers.map((job, index) => (
                  <option key={index} value={job}>
                    {job}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            {/* Gender */}
            <Form.Group className="mb-3 d-flex align-items-center">
              <Form.Label className="fw-semibold me-3 mb-0">เพศ :</Form.Label>
              <div>
                <Form.Check
                  inline
                  label="ชาย"
                  name="gender"
                  type="radio"
                  value="Male"
                  onChange={(e) => setGender(e.target.value)}
                />
                <Form.Check
                  inline
                  label="หญิง"
                  name="gender"
                  type="radio"
                  value="Female"
                  onChange={(e) => setGender(e.target.value)}
                />
                <Form.Check
                  inline
                  label="ไม่ระบุเพศ"
                  name="gender"
                  type="radio"
                  value="Notgender"
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
            </Form.Group>

            {/* Province */}
            <Form.Group className="mb-3">
              <Form.Select
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                style={{
                  backgroundImage: `url(${map})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "8px center",
                  paddingLeft: "35px",
                  backgroundSize: "20px 20px",
                }}
              >
                <option value="">-- กรุณาเลือกจังหวัด --</option>
                {provinces.map((prov, index) => (
                  <option key={index} value={prov}>
                    {prov}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            {/* Age */}
            <Form.Group className="mb-4">
              <Form.Control
                type="number"
                placeholder="อายุ"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                min="1"
                style={{
                  backgroundImage: `url(${agee})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "8px center",
                  paddingLeft: "35px",
                  backgroundSize: "20px 20px",
                }}
              />
            </Form.Group>

            {/* Error Message */}
            {error && <div className="text-danger mb-3">{error}</div>}

            <Button
              type="submit"
              className="w-100 fw-bold"
              style={{
                backgroundColor: "#f3a734ff",
                border: "none",
                borderRadius: "8px",
              }}
            >
              ลงทะเบียน
            </Button>

            <p className="text-center mt-3 mb-0">
              มีบัญชีอยู่แล้วใช่ไหม?{" "}
              <Button
                variant="link"
                onClick={() => navigate("/login")}
                style={{ color: "#f3a734ff", textDecoration: "none" }}
              >
                เข้าสู่ระบบ
              </Button>
              <Button
                variant="link"
                onClick={() => navigate("/home")}
                style={{ color: "#E6531A", textDecoration: "none" }}
              >
                กลับหน้าแรก
              </Button>
            </p>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default Signup;

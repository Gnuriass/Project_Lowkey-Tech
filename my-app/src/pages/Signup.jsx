import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import user from "../image/user.png";
import mail from "../image/mail.png";
import pass from "../image/pass.png";
import map from "../image/map.png";
import agee from "../image/agee.png";


function Signup() {
  const navigate = useNavigate();
  const [username, setName] = useState("");
  const [lastname, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const handleSignup = async () => {
    if (
      username &&
      lastname &&
      email &&
      password &&
      gender &&
      province &&
      age
    ) {
      try {
        const newUser = {
          username,
          lastname,
          email,
          password,
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
          alert(response.data.message || "ลงทะเบียนไม่สำเร็จ");
        }
      } catch (error) {
        console.error("Signup error:", error);
        alert("เกิดข้อผิดพลาด โปรดลองอีกครั้ง");
      }
    } else {
      alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card
        className="shadow-lg overflow-hidden"
        style={{ width: "60rem", borderRadius: "40px" }}
      >
        <Row className="g-0">
          <Col md={6} className="position-relative d-none d-md-block">
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white"
              style={{
                backgroundImage: `url(https://specialneedscomputers.ca/cdn/shop/files/background-caregiver-and-senior-v2_1.jpg?v=1752599516&width=1920)`,
                backgroundSize: "cover",
                backgroundPosition: "30% 20%",
                textAlign: "center",
                padding: "20px",
                backdropFilter: "brightness(100%) ",
              }}
            >
              <h4
                className="fw-bold"
                style={{ fontSize: "3.5rem"}} // ใช้ HEX
              >
              Lowkey Tech
              </h4>

            </div>
          </Col>

          <Col md={6} className="p-5 bg-light">
            <h3 className="mb-4 fw-bold">สมัครสมาชิก</h3>

            <Form >
              <Row className="mb-3">
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="ชื่อ"
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      backgroundImage: `url(${user})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "8px center", // ไอคอนชิดซ้าย
                      paddingLeft: "35px", // เว้นที่ให้ตัวอักษรไม่ทับ
                      backgroundSize: "20px 20px", // ขนาดไอคอน
                    }}
                  />
                </Col>
                <Col>
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
                </Col>
              </Row>

              <Form.Group className="mb-3">
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
                <Form.Label>เพศ</Form.Label>
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

              <Form.Group className="mb-3">
                <Form.Select
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  style={{
                    backgroundImage: `url(${map})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "5px center", // ชิดซ้ายขึ้น
                    paddingLeft: "35px", // เว้นที่ให้ตัวอักษรไม่ทับไอคอน
                    backgroundSize: "20px 20px", // ปรับขนาดไอคอน
                    textAlignLast: "center", // จัดข้อความของ option ที่เลือกให้อยู่กลาง
                    textAlign: "center", // จัดข้อความใน dropdown ให้อยู่กลาง
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

              {/* ✅ ฟอร์มอายุ */}
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  placeholder="อายุ"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  min="1"
                  style={{
                    backgroundImage: `url(${agee})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "5px center", // ชิดซ้ายขึ้น
                    paddingLeft: "35px", // เว้นที่ให้ตัวอักษรไม่ทับไอคอน
                    backgroundSize: "20px 20px", // ปรับขนาดไอคอน
                  }}
                />
              </Form.Group>

              <div className="d-flex justify-content-between">
                <Button variant="secondary" onClick={() => navigate("/login")}>
                  ยกเลิก
                </Button>
                <Button variant="success" onClick={handleSignup} style={{ backgroundColor: "#fac240"}}>
                  ยืนยัน
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Signup;

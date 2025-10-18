import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaLaptop,
  FaComments,
  FaShoppingCart,
  FaWallet,
  FaWifi,
  FaLightbulb,
  FaUserGraduate,
  FaUniversity,
  FaMobileAlt,
  FaTv,
  FaUsers,
  FaCog,
  FaShieldAlt,
} from "react-icons/fa";
import a from "../image/a.jpg";
import Footer from "./Footer";

function Courses() {
  const categories = [
    { name: "พื้นฐานดิจิทัล", icon: <FaLaptop /> },
    { name: "การสื่อสารออนไลน์", icon: <FaComments /> },
    { name: "ใช้งานบริการออนไลน์", icon: <FaShoppingCart /> },
    { name: "การเงินดิจิทัล", icon: <FaWallet /> },
    { name: "ใช้เน็ตให้เป็น", icon: <FaWifi /> },
    { name: "เสริมทักษะ", icon: <FaLightbulb /> },
    { name: "บทเรียนแนะนำเฉพาะบุคคล", icon: <FaUserGraduate /> },
    { name: "บริการภาครัฐออนไลน์", icon: <FaUniversity /> },
    { name: "แอปธนาคารเฉพาะ", icon: <FaMobileAlt /> },
    { name: "ความบันเทิง & ไลฟ์สไตล์", icon: <FaTv /> },
    { name: "สื่อสารกับครอบครัว", icon: <FaUsers /> },
    { name: "เรียนรู้การตั้งค่าเครื่อง", icon: <FaCog /> },
    { name: "รู้เท่าทันโลกดิจิทัล", icon: <FaShieldAlt /> },
  ];

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh", backgroundColor: "#fafafa" }}>
      {/* 🔹 ส่วนหลัก (Sidebar + Content) */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <div
          className="sidebar p-4 d-flex flex-column"
          style={{
            width: "250px",
            backgroundColor: "#fff",
            borderRight: "1px solid #eee",
          }}
        >
          <h3 className="text-center mb-4" style={{ color: "#E6531A", fontWeight: "bold" }}>
            หมวดหมู่
          </h3>
          <ul className="nav flex-column flex-grow-1" style={{ listStyle: "none", paddingLeft: 0, fontSize: "1.05rem" }}>
            {categories.map((cat, index) => (
              <li
                key={index}
                className="nav-item d-flex align-items-center mb-3 p-2 rounded"
                style={{ cursor: "pointer", transition: "0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFF3E0")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <span style={{ color: "#E6531A", fontSize: "1.3rem", marginRight: "10px" }}>{cat.icon}</span>
                <span>{cat.name}</span>
              </li>
            ))}
          </ul>

          <div className="text-center mt-auto">
            <Button
              className="w-100 fw-bold"
              style={{ backgroundColor: "#E6531A", border: "none", color: "white" }}
            >
              Upgrade to PRO
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="content flex-grow-1 p-4 d-flex flex-column">
          <div className="flex-grow-1">
            {/* คอร์สนิยม */}
            <section className="mb-4">
              <h5 className="fw-bold mb-3">คอร์สนิยม</h5>
              <Row className="mb-4">
                <Col md={6} className="mb-3">
                  <Card className="shadow-sm h-100">
                    <Card.Img variant="top" src={a} height="200" style={{ objectFit: "cover" }} />
                    <Card.Body>
                      <Card.Title>วิธีแตะ/ปัด/พิมพ์บนหน้าจอ</Card.Title>
                      <Card.Text>฿390</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-3">
                  <Card className="shadow-sm h-100">
                    <Card.Img variant="top" src={a} height="200" style={{ objectFit: "cover" }} />
                    <Card.Body>
                      <Card.Title>สั่งอาหารผ่าน Grab / LINE MAN</Card.Title>
                      <Card.Text>฿400</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3">
                  <Card className="shadow-sm h-100">
                    <Card.Img variant="top" src={a} height="200" style={{ objectFit: "cover" }} />
                    <Card.Body>
                      <Card.Title>ลงทะเบียนรับเงินผู้สูงอายุ</Card.Title>
                      <Card.Text>฿350</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-3">
                  <Card className="shadow-sm h-100">
                    <Card.Img variant="top" src={a} height="200" style={{ objectFit: "cover" }} />
                    <Card.Body>
                      <Card.Title>การจัดการไฟล์ / รูปภาพในเครื่อง</Card.Title>
                      <Card.Text>฿420</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </section>

            {/* คอร์สใหม่ */}
            <section className="mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-bold">คอร์สใหม่</h5>
                <Link to="/classes/popular">ดูทั้งหมด</Link>
              </div>
              <Row>
                <Col md={6}>
                  <Card className="mb-3">
                    <Card.Img variant="top" src={a} height="200" style={{ objectFit: "cover" }} />
                    <Card.Body>
                      <Card.Title>สมัครดู Netflix, YouTube Premium</Card.Title>
                      <Card.Text>฿300</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="mb-3">
                    <Card.Img variant="top" src={a} height="200" style={{ objectFit: "cover" }} />
                    <Card.Body>
                      <Card.Title>ใช้อีเมล (สมัคร / อ่าน / ส่ง)</Card.Title>
                      <Card.Text>฿400</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </section>
          </div>
        </div>
      </div>

      {/* Footer อยู่ล่างสุด */}
      <Footer />
    </div>
  );
}

export default Courses;

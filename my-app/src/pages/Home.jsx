import  { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { FaHistory, FaEye, FaBullseye } from "react-icons/fa"; // import icon
import a from "../image/a.jpg";

function Home() {
  // สมมติว่าดึงค่าจาก global state / localStorage
  const [isLoggedIn] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.2)),
            url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1350&q=80')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "150px 20px",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h1 className="fw-bold">เปิดประตูสู่โลกดิจิทัล ให้ชีวิตง่ายขึ้น</h1>
        <p style={{ fontSize: "1.5rem" }}>
          เรียน การสื่อสารออนไลน์, ใช้งานบริการออนไลน์ และอีกมากมาย
          ครอบคลุมทุกพื้นฐานการใช้ชีวิตในโลกดิจิทัล
        </p>
        <Link to="/courseonline">
          <Button
            style={{
              backgroundColor: "#E6531A",
              borderColor: "#E6531A",
              color: "#fff",
            }}
            size="lg"
          >
            ดูคอร์สเรียนทั้งหมด
          </Button>
        </Link>
      </div>

      {/* Features Section */}
      <Container className="my-5">
        <Row className="text-center">
          <Col md={4} className="mb-4">
            <h3>หลากหลายคอร์สคุณภาพ</h3>
            <p>ออกแบบและผลิตโดยทีมงานของเราเอง</p>
          </Col>
          <Col md={4} className="mb-4">
            <h3>ครอบคลุมทุกทักษะ</h3>
            <p>เทคโนโลยี ธุรกิจ ครีเอทีฟ และอื่นๆ</p>
          </Col>
          <Col md={4}>
            <h3>เรียนได้ทุกที่</h3>
            <p>คลาสเรียนออนไลน์ เรียนซ้ำเมื่อไรก็ได้</p>
          </Col>
        </Row>
      </Container>

      <hr
        style={{
          border: "none",
          borderTop: "2px solid #ccc",
          margin: "40px 0",
        }}
      />

      {/* About / Company Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">เกี่ยวกับเรา</h2>
        <Row className="mb-4">
          {/* ความเป็นมา */}
          <Col md={4} className="mb-3">
            <Card
              className="p-4 shadow-lg h-100 text-center"
              style={{ borderRadius: "20px", backgroundColor: "#FFF3E0" }}
            >
              <div className="mb-3">
                <FaHistory size={40} color="#E6531A" />
              </div>
              <Card.Title
                className="mb-3"
                style={{ fontSize: "1.25rem", fontWeight: "600" }}
              >
                ความเป็นมาของบริษัท
              </Card.Title>
              <Card.Text
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  textAlign: "justify",
                }}
              >
                เนื่องจากกระแสการเปลี่ยนแปลงของโลกที่มีการพัฒนาของเทคโนโลยีอยู่ตลอดเวลาอย่างรวดเร็ว
                แต่ประเทศไทยยังคงมีผู้ที่มีทักษะความรู้ทางด้านเทคโนโลยีจำนวนน้อย
                บริษัทฯ เล็งเห็นถึงความสำคัญในการพัฒนาผู้คนเหล่านี้
                จึงได้จัดตั้งบริษัทฯ ขึ้นมาภายใต้วิสัยทัศน์ “Low Tech for a High
                Life” เพื่อให้เข้าถึงง่ายและบริการอย่างครอบคลุม
                ต้องการให้ผู้ใช้เทคโนโลยีก้าวเดินไปพร้อมกัน
              </Card.Text>
            </Card>
          </Col>

          {/* วิสัยทัศน์ */}
          <Col md={4} className="mb-3">
            <Card
              className="p-4 shadow-lg h-100 text-center"
              style={{ borderRadius: "20px", backgroundColor: "#E0F7FA" }}
            >
              <div className="mb-3">
                <FaEye size={40} color="#00ACC1" />
              </div>
              <Card.Title
                className="mb-3"
                style={{ fontSize: "1.25rem", fontWeight: "600" }}
              >
                วิสัยทัศน์
              </Card.Title>
              <Card.Text
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  textAlign: "justify",
                }}
              >
                เราเชื่อว่าทุกวัยสามารถใช้เทคโนโลยีได้อย่างมั่นใจและสนุกสนาน
                เราจะเป็นเพื่อนคู่คิดที่ช่วยให้ผู้สูงอายุทุกคนก้าวสู่โลกดิจิทัลอย่างเข้าใจและปลอดภัย
              </Card.Text>
            </Card>
          </Col>

          {/* เป้าหมาย */}
          <Col md={4} className="mb-3">
            <Card
              className="p-4 shadow-lg h-100 text-center"
              style={{ borderRadius: "20px", backgroundColor: "#E8F5E9" }}
            >
              <div className="mb-3">
                <FaBullseye size={40} color="#43A047" />
              </div>
              <Card.Title
                className="mb-3"
                style={{ fontSize: "1.25rem", fontWeight: "600" }}
              >
                เป้าหมาย
              </Card.Title>
              <Card.Text
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  textAlign: "left",
                }}
              >
                <ul style={{ paddingLeft: "20px" }}>
                  <li>ช่วยให้ผู้สูงอายุใช้เทคโนโลยีได้อย่างมั่นใจและปลอดภัย</li>
                  <li>ทำให้การเรียนรู้เทคโนโลยีสนุกและเข้าถึงง่าย</li>
                  <li>
                    สร้างชุมชนผู้สูงอายุที่เชื่อมต่อดิจิทัลได้อย่างราบรื่น
                  </li>
                  <li>พัฒนาครูและโค้ชผู้เชี่ยวชาญที่เข้าใจผู้สูงอายุ</li>
                  <li>สนับสนุนการใช้เทคโนโลยีเพื่อคุณภาพชีวิตที่ดีขึ้น</li>
                </ul>
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>

      <hr
        style={{
          border: "none",
          borderTop: "2px solid #ccc",
          margin: "40px 0",
        }}
      />

      {/* Popular Class */}
      <Container className="py-5">
        <h2 className="text-center mb-4">คอร์สนิยม</h2>
        <Row className="mb-4">
                  {/* แถว 1 */}
                  <Col md={6} className="mb-3">
                    <Card className="shadow-sm h-100">
                      <Card.Img
                        variant="top"
                        src={a}
                        height="200"
                        style={{ objectFit: "cover" }}
                      />
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="fw-bold">พื้นฐานดิจิทัล</span>
                          <Link to="/courses">
                          <button
                            style={{
                              backgroundColor: "#E6531A",
                              borderColor: "#E6531A",
                              color: "#fff",
                            }}
                            className="btn btn-sm"
                          >
                            ดูเพิ่มเติม
                          </button>
                          </Link>
                        </div>
                        <Card.Text className="mt-2">฿390</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
        
                  <Col md={6} className="mb-3">
                    <Card className="shadow-sm h-100">
                      <Card.Img
                        variant="top"
                        src={a}
                        height="200"
                        style={{ objectFit: "cover" }}
                      />
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="fw-bold">การสื่อสารออนไลน์</span>
                          <Link to="/courses">
                          <button
                            style={{
                              backgroundColor: "#E6531A",
                              borderColor: "#E6531A",
                              color: "#fff",
                            }}
                            className="btn btn-sm"
                          >
                            ดูเพิ่มเติม
                            
                          </button>
                          </Link>
                        </div>
                        <Card.Text className="mt-2">฿400</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
        
                <Row>
                  {/* แถว 2 */}
                  <Col md={6} className="mb-3">
                    <Card className="shadow-sm h-100">
                      <Card.Img
                        variant="top"
                        src={a}
                        height="200"
                        style={{ objectFit: "cover" }}
                      />
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="fw-bold">การใช้งานโซเชียลมีเดีย</span>
                          <Link to="/courses">
                          <button
                            style={{
                              backgroundColor: "#E6531A",
                              borderColor: "#E6531A",
                              color: "#fff",
                            }}
                            className="btn btn-sm"
                          >
                            ดูเพิ่มเติม
                          </button>
                          </Link>
                        </div>
                        <Card.Text className="mt-2">฿350</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Card className="shadow-sm h-100">
                      <Card.Img
                        variant="top"
                        src={a}
                        height="200"
                        style={{ objectFit: "cover" }}
                      />
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="fw-bold">การชำระเงินออนไลน์</span>
                          <Link to="/courses">
                          <button
                            style={{
                              backgroundColor: "#E6531A",
                              borderColor: "#E6531A",
                              color: "#fff",
                            }}
                            className="btn btn-sm"
                          >
                            ดูเพิ่มเติม
                          </button>
                          </Link>
                        </div>
                        <Card.Text className="mt-2">฿420</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>

        {/* ปุ่มสมัครเรียนตอนนี้ (แสดงเฉพาะยังไม่ login) */}
        {!isLoggedIn && (
          <div className="text-center mt-4">
            <Link to="/signup">
              <Button
                style={{
                  backgroundColor: "#E6531A",
                  borderColor: "#E6531A",
                  color: "#fff",
                }}
                size="lg"
              >
                สมัครเรียนตอนนี้
              </Button>
            </Link>
          </div>
        )}
      </Container>

      <hr
        style={{
          border: "none",
          borderTop: "2px solid #ccc",
          margin: "40px 0",
        }}
      />

      <Footer />
    </div>
  );
}

export default Home;

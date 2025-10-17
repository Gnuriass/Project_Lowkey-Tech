import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#fac240", padding: "40px 0" }}>
      <Container>
        <Row>
          {/* โลโก้และคำบรรยาย */}
          <Col md={4} className="mb-4">
            <img
              src={logo}
              alt="Lowkeytech"
              style={{ height: "100px", marginBottom: "50px" }}
            />
            <p>แพลตฟอร์มเรียนรู้เพื่อเพิ่มทักษะให้ทันต่อโลก</p>
            <p>
              © 2024 Lowkey Tech Co., Ltd. <br />
              All rights reserved.
            </p>
          </Col>

          {/* บริการทั้งหมด */}
          <Col md={2} className="mb-4">
            <h6 className="fw-bold">บริการทั้งหมด</h6>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/courseonline"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  หลักสูตร Online
                </Link>
              </li>
              <li>
                <Link
                  to="/courseonsite"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  หลักสูตร Onsite
                </Link>
              </li>
            </ul>
          </Col>

          {/* เส้นทางการเรียน */}
          <Col md={2} className="mb-4">
            <h6 className="fw-bold">เส้นทางการเรียน</h6>
            <ul className="list-unstyled">
              <li>แพ็กเกจรายปี</li>
              <li>วัดระดับทักษะ </li>
              <li>บทความ</li>
              <Link
                to="/faq"
                onClick={() => window.scrollTo(0, 0)}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                คำถามที่พบบ่อย
              </Link>
            </ul>
          </Col>

          {/* ร่วมงานกับเรา */}
          <Col md={4} className="mb-4">
            <h6 className="fw-bold">ร่วมงานกับเรา</h6>
            <ul className="list-unstyled">
              <li>สมัครงาน</li>
              <li>สมัครเป็นผู้สอน</li>
              <li>
                <Link
                  to="/home"
                  onClick={() => window.scrollTo(0, 0)}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  เกี่ยวกับเรา
                </Link>
              </li>
              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                ติดต่อเรา
              </Link>
            </ul>
            <h6 className="fw-bold mt-3">ดาวน์โหลดแอปพลิเคชัน</h6>
            <div className="mb-2">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                style={{ height: "40px" }}
              />
            </div>
            <div className="mb-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                style={{ height: "40px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

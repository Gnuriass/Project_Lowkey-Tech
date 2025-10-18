import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Tab,
  Tabs,
  Table,
  ProgressBar,
} from "react-bootstrap";
import { BsWifi, BsPhone, BsCamera } from "react-icons/bs";
import axios from "axios";
import me from "../image/user.png";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      console.log("Stored user:", storedUser);

      if (!storedUser || !storedUser.email) {
        setError("กรุณาเข้าสู่ระบบก่อนดูโปรไฟล์");
        setLoading(false);
        return;
      }

      try {
        const email = storedUser.email.toLowerCase().trim();
        const res = await axios.get(`http://localhost:5000/profile/${email}`);
        console.log("Profile response:", res.data);
        setUser(res.data);
      } catch (err) {
        console.error("Fetch profile error:", err.response || err);
        if (err.response?.status === 404) {
          setError("ไม่พบข้อมูลผู้ใช้");
        } else {
          setError("ไม่สามารถดึงข้อมูลผู้ใช้ได้");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const learningProgress = [
    { title: "เชื่อมต่อ Wi-Fi และมือถือ", progress: 50, icon: <BsWifi size={22} color="#E6531A" /> },
    { title: "รู้จักอุปกรณ์สมาร์ทโฟน", progress: 30, icon: <BsPhone size={22} color="#E6531A" /> },
    { title: "ใช้งานกล้องถ่ายรูปในมือถือ", progress: 70, icon: <BsCamera size={22} color="#E6531A" /> },
  ];

  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (error) return <p className="text-center mt-5 text-danger">{error}</p>;
  if (!user) return null;

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="shadow-sm p-4">
            <Row className="align-items-center mb-4">
              <Col md={4} className="text-center">
                <img
                  src={me}
                  alt="Profile"
                  className="img-fluid rounded-circle mb-3"
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                />
              </Col>
              <Col md={8}>
                <h3>โปรไฟล์ของฉัน</h3>
                <p>ชื่อ: {user.username}</p>
                <p>นามสกุล: {user.lastname}</p>
                <p>อีเมล: {user.email}</p>
                <p>อาชีพ: {user.career}</p>
                <p>เพศ: {user.gender}</p>
                <p>จังหวัด: {user.province}</p>
                <p>อายุ: {user.age}</p>
              </Col>
            </Row>

            <Tabs defaultActiveKey="history" id="profile-tabs" className="mb-4">
              <Tab eventKey="history" title="ประวัติการเรียน">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>วันที่</th>
                      <th>คอร์ส</th>
                      <th>สถานะ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01/03/2025</td>
                      <td>วิธีแตะ/ปัด/พิมพ์บนหน้าจอ</td>
                      <td>สำเร็จ</td>
                    </tr>
                    <tr>
                      <td>15/04/2025</td>
                      <td>รู้จักอุปกรณ์สมาร์ทโฟน</td>
                      <td>กำลังเรียน</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab>
              <Tab eventKey="courses" title="คอร์สที่สมัคร">
                <ul>
                  <li>รู้จักภัยออนไลน์และการป้องกัน</li>
                  <li>จองคิวหมอ / โรงพยาบาลออนไลน์</li>
                  <li>ตั้งโหมดผู้สูงอายุ (Simplified Mode)</li>
                </ul>
              </Tab>
            </Tabs>

            <div className="mt-4">
              <h5 className="fw-bold mb-3" style={{ color: "#E6531A" }}>
                สิ่งที่เรียนรู้ล่าสุด
              </h5>
              {learningProgress.map((item, index) => (
                <Card key={index} className="mb-3 shadow-sm border-0">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="d-flex align-items-center gap-2">
                        {item.icon}
                        <strong style={{ fontSize: "1.05rem" }}>{item.title}</strong>
                      </div>
                      <span style={{ color: "#555", fontSize: "0.95rem" }}>{item.progress}%</span>
                    </div>
                    <ProgressBar
                      now={item.progress}
                      variant="warning"
                      style={{ height: "18px", borderRadius: "10px" }}
                    />
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;

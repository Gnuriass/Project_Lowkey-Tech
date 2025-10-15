import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Footer from "./Footer";
import { Link } from "react-router-dom";

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
        <h1 className="fw-bold">เปิดโลกดิจิทัล ให้ชีวิตง่ายขึ้น</h1>
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

      {/* Popular Class */}
      <Container className="py-5">
        <h2 className="text-center mb-4">คอร์สนิยม</h2>
        <Row>
          <Col md={6}>
            <Card className="mb-3 shadow-sm">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/500x300"
              />
              <Card.Body>
                <Card.Title>พื้นฐานดิจิทัล</Card.Title>
                <Card.Text>฿390</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-3 shadow-sm">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/500x300"
              />
              <Card.Body>
                <Card.Title>การสื่อสารออนไลน์</Card.Title>
                <Card.Text>฿400</Card.Text>
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

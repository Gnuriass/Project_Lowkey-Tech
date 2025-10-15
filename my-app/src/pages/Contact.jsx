import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import ct from "../image/ct.png";
import email from "../image/email.png";
import phon from "../image/phon.png";
import user from "../image/user.png";
import mail from "../image/mail.png";
import Footer from "./Footer"; 


function Contact() {
  return (
    <>
      <Container className="mt-4">
        <h2>
          <img
            src={ct}
            alt="React Icon"
            width="50"
            height="50"
            className="me-2"
          />
          ติดต่อเรา
        </h2>
        <Form>
          <Row className="mb-3">
            <Col>
              <Form.Control
                type="text"
                placeholder="ชื่อ"
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
            <Form.Label>ข้อความถึงเรา:</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="✍🏻" />
          </Form.Group>
          <Button
            style={{ backgroundColor: "#996633" }}
            variant="primary"
            type="submit"
          >
            เสร็จสิ้น
          </Button>
        </Form>
        <hr />
        <p>
          <img
            src={email}
            alt="React Icon"
            width="40"
            height="40"
            className="me-2"
          />
          : contact@lowkeytech.com
        </p>
        <p>
          <img
            src={phon}
            alt="React Icon"
            width="40"
            height="40"
            className="me-2"
          />
          : 012 345 6789
        </p>
        
      </Container>
      <Footer />
    </>
  );
}

export default Contact;

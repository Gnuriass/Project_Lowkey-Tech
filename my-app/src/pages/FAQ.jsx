import React from "react";
import { Container, Accordion } from "react-bootstrap";
import q from "../image/q.png";
import Footer from "./Footer"; 

function FAQ() {
  const faqs = [
    {
      question: "ต้องลงทะเบียนก่อนถึงจะสามรถอ่านเรื่องย่อได้ใช่หรือไม่?",
      answer: "ตอบ: ใช่ ผู้ใช้ต้องทำลงทะเบียนก่อนจึงจะสามารถอ่านเรื่องย่อได้",
    },
    {
      question: "สามารถค้นหาหนังสือที่มีเรื่องย่อได้จากอะไรบ้าง?",
      answer:
        "ตอบ: เว็บของเรามีระบบค้นหาหนังสือที่ง่ายและสะดวก โดยคุณสามารถค้นหาหนังสือได้จากชื่อหนังสือ หรือ ประเภทของหนังสือ เรามีหมวดหมู่หนังสือหลากหลายให้เลือก เช่น ชีวจิต, บ้านและสวน, การเงินธนาคาร เป็นต้น",
    },
    {
      question: "หากไม่เจอหนังสือที่ต้องการอ่านเรื่องย่อในเว็บของคุณ สามารถขอให้เพิ่มหนังสือเล่มนั้นได้หรือไม่?",
      answer:
        "ตอบ: แน่นอน! หากคุณไม่พบหนังสือที่ต้องการ เรามีฟอร์มให้คุณกรอกคำขอเพิ่มหนังสือเล่มนั้นเข้ามาในเว็บไซต์ ทีมงานของเราจะตรวจสอบและพิจารณาเพิ่มหนังสือใหม่ตามคำขอของคุณ",
    },
    {
      question: "เว็บไซต์ของคุณมีบริการสำหรับผู้ใช้ที่ต้องการอ่านหนังสือเต็มเล่มหรือไม่?",
      answer: "ตอบ: ในตอนนี้เว็บไซต์ของเราเน้นให้บริการเรื่องย่อหนังสือเป็นหลัก แต่เรามีลิงก์ที่นำไปยังแหล่งซื้อหนังสือออนไลน์ที่คุณสามารถซื้อหรืออ่านเต็มเล่มได้",
    },
  ];

  return (
    <>
      <Container className="mt-4">
        <h2>
          <img
            src={q}
            alt="React Icon"
            width="50"
            height="50"
            className="me-2"
          />
          คำถามที่พบบ่อย
        </h2>
        <Accordion>
          {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        
      </Container>
      <Footer />
      
    </>
    
  );
}

export default FAQ;

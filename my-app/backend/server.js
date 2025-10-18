require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000", // frontend URL
  credentials: true
}));

// ================= MySQL Connection =================
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error("❌ Database Connection Failed:", err);
  } else {
    console.log("✅ Connected to MySQL Database");
  }
});

// ================= Signup =================
app.post("/signup", async (req, res) => {
  const { username, lastname, email, password, career, gender, province, age } = req.body;

  if (!username || !lastname || !email || !career || !password || !gender || !province || !age) {
    return res.status(400).json({ success: false, message: "กรุณากรอกข้อมูลให้ครบ" });
  }

  try {
    const [existing] = await db.promise().query(
      "SELECT * FROM users WHERE email = ?",
      [email.trim().toLowerCase()]
    );
    if (existing.length > 0) {
      return res.status(400).json({ success: false, message: "อีเมลนี้ถูกใช้งานแล้ว" });
    }

    const sql = `
      INSERT INTO users (username, lastname, email, password, career, gender, province, age)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    await db.promise().query(sql, [
      username.trim(),
      lastname.trim(),
      email.trim().toLowerCase(),
      password,
      career.trim(),
      gender.trim(),
      province.trim(),
      age
    ]);

    res.json({ success: true, message: "สมัครสมาชิกสำเร็จ" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ success: false, message: "เกิดข้อผิดพลาด", error: err.message });
  }
});

// ================= Login =================
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "กรุณากรอกอีเมลและรหัสผ่าน" });
  }

  try {
    const [results] = await db.promise().query(
      "SELECT * FROM users WHERE email = ?",
      [email.trim().toLowerCase()]
    );

    if (results.length === 0 || results[0].password !== password) {
      return res.status(401).json({ success: false, message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง" });
    }

    const user = {
      username: results[0].username,
      lastname: results[0].lastname,
      email: results[0].email,
      career: results[0].career,
      gender: results[0].gender,
      province: results[0].province,
      age: results[0].age
    };

    res.json({ success: true, message: "เข้าสู่ระบบสำเร็จ", user });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ success: false, message: "เกิดข้อผิดพลาด", error: err.message });
  }
});

// ================= Get user profile =================
app.get("/profile/:email", async (req, res) => {
  const email = req.params.email;
  try {
    const [rows] = await db.promise().query(
      "SELECT * FROM users WHERE email = ?",
      [email.trim().toLowerCase()]
    );
    if (rows.length === 0) {
      return res.status(404).json({ message: "ไม่พบข้อมูลผู้ใช้" });
    }
    res.json(rows[0]);
  } catch (err) {
    console.error("Profile error:", err);
    res.status(500).json({ message: "เกิดข้อผิดพลาดในเซิร์ฟเวอร์" });
  }
});

// ================= Start server =================
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});

require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// สร้าง Connection กับ MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database Connection Failed:", err);
  } else {
    console.log("✅ Connected to MySQL Database");
  }
});

// Signup (plain text)
app.post("/signup", async (req, res) => {
  const { username, lastname, email, password, gender, province, age } = req.body;

  if (!username || !lastname || !email || !password || !gender || !province || !age) {
    return res.status(400).json({ success: false, message: "กรุณากรอกข้อมูลให้ครบ" });
  }

  try {
    const [existing] = await db.promise().query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (existing.length > 0) {
      return res.status(400).json({ success: false, message: "อีเมลนี้ถูกใช้งานแล้ว" });
    }

    const sql = `
      INSERT INTO users (username, lastname, email, password, gender, province, age)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    await db.promise().query(sql, [
      username,
      lastname,
      email,
      password,
      gender,
      province,
      age
    ]);

    res.json({ success: true, message: "สมัครสมาชิกสำเร็จ" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ success: false, message: "เกิดข้อผิดพลาด", error: err });
  }
});

// Login (plain text)
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "กรุณากรอกอีเมลและรหัสผ่าน" });
  }

  try {
    const [results] = await db.promise().query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (results.length === 0) {
      return res.status(401).json({ success: false, message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง" });
    }

    const user = results[0];

    if (password !== user.password) {
      return res.status(401).json({ success: false, message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง" });
    }

    res.json({ success: true, message: "เข้าสู่ระบบสำเร็จ", user });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ success: false, message: "เกิดข้อผิดพลาด", error: err });
  }
});

// ดึงข้อมูลผู้ใช้ทั้งหมด (ไม่เอารหัสผ่าน)
app.get("/users", (req, res) => {
  const sql = "SELECT id, username, lastname, email, gender, province, age FROM users";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ message: "เกิดข้อผิดพลาด", error: err });
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ملفات الموقع
app.use(express.static(path.join(__dirname)));

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "GT STORE server is working"
  });
});

// الصفحة الرئيسية
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`GT STORE server running on port ${PORT}`);
});

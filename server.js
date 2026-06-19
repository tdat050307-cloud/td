const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const DB_FILE = path.join(__dirname, "database.json");

// Hàm đọc dữ liệu từ file thật
function readDB() {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(
      DB_FILE,
      JSON.stringify({ users: [], reviews: [] }, null, 2),
    );
  }
  return JSON.parse(fs.readFileSync(DB_FILE, "utf8"));
}

// Hàm ghi dữ liệu vào file thật
function writeDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), "utf8");
}

const server = http.createServer((req, res) => {
  // Cấu hình CORS để giao diện HTML gọi vào server không bị chặn
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // API LẤY DỮ LIỆU THẬT OUT RA WEB
  if (req.method === "GET" && req.url === "/api/data") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(readDB()));
    return;
  }

  // API GHI DỮ LIỆU THẬT VÀO FILE
  if (req.method === "POST" && req.url === "/api/save") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        const params = JSON.parse(body);
        const db = readDB();

        if (params.action === "register") {
          // Kiểm tra trùng tài khoản
          const isExist = db.users.some(
            (u) => u.username.toLowerCase() === params.username.toLowerCase(),
          );
          if (isExist) {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ status: "exists" }));
            return;
          }
          db.users.push({
            username: params.username,
            email: params.email,
            password: params.password,
            date: params.date,
          });
        } else if (params.action === "review") {
          db.reviews.push({
            username: params.username,
            score: params.score,
            content: params.content,
            date: params.date,
          });
        }

        writeDB(db); // Tiến hành ghi trực tiếp vào file cứng!
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ status: "success" }));
      } catch (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ status: "error", message: err.message }));
      }
    });
    return;
  }

  res.writeHead(404);
  res.end();
});

server.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`🚀 DATABASE SERVER ĐÃ CHẠY THẬT SỰ!`);
  console.log(`💻 Địa chỉ API: http://localhost:3000`);
  console.log(`📁 Dữ liệu ghi trực tiếp vào file: database.json`);
  console.log(`==================================================\n`);
});

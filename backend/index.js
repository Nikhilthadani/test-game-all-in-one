const http = require("http");

const server = http.createServer((req, res) => {
  console.log("👉 Request received:", req.method, req.url); // 👈 Debug log
  res.end("SERVER OK!");
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});

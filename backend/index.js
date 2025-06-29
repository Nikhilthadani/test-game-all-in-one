const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {
  res.write("OKOKOKOKOK");
  res.end("SERVER OK!");
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, "0.0.0.0", () => {
  console.log("SERVER OPEN");
});

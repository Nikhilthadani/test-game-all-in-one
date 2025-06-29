const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {
  res.end("SERVER OK!");
});
const PORT = process.env.PORT || 4000;
server.listen(PORT);

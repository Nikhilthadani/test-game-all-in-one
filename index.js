const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {
  res.end("SERVER READY UPDATED");
});

server.listen(5000);

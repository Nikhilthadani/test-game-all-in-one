const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("<h1>OK</h1>");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`✅ SERVER OPEN on 0.0.0.0:${PORT}`)
);

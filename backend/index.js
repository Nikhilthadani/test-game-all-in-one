const express = require("express");

const app = express();
app.use(express.json());

app.get("/api/health", (req, res) => {
  return res.send("Health OK!");
});

app.get("/api/user", (req, res) => {
  return res.json({ id: 1, name: "Nikhil", email: "n@test.com" });
});
app.get("/", (req, res) => {
  return res.send("<h1>Welcome to my app</h1>");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log("App open at port: ", PORT);
});

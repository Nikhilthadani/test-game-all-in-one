const express = require("express");

const app = express();
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.send("Health OK!");
});

const PORT = process.env.PORT || 5000;

// ✅ MUST bind to 0.0.0.0 so NGINX or external clients can access
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running at http://0.0.0.0:${PORT}`);
});

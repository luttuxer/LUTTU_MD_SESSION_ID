const express = require("express");
const path = require("path");

const app = express();
const PORT = 3001;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => {
  res.json({
    status: "online",
    project: "Luttuxer MD",
    platform: "Termux"
  });
});

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Dashboard: http://127.0.0.1:${PORT}`);
});

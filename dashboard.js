const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => {
  res.json({
    status: "online",
    project: "Luttuxer MD",
    platform: "Web"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Luttu MD website running on port ${PORT}`);
});

const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();

app.use(express.static(path.join(__dirname, "build")));

// allow client side routing
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || "development";
app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT} in ${NODE_ENV} mode`);
  console.log("Press CTRL-C to stop\n");
});

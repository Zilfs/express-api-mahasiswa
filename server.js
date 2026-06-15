const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

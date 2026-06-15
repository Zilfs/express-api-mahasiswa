const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Server is running");
});

const mahasiswa = [
  { nim: "001", nama: "Hirzi Ahnaf", jurusan: "Informatika" },
  { nim: "002", nama: "Budi Santoso", jurusan: "Sistem Informasi" },
  { nim: "003", nama: "Citra Dewi", jurusan: "Sains Data" },
];

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

app.get("/mahasiswa", (req, res) => {
  res.json(mahasiswa);
});

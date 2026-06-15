const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Server is running");
});

const mahasiswa = [
  { nim: "2410511142", nama: "Hirzi Ahnaf", jurusan: "Informatika" },
  { nim: "2410512003", nama: "Budi Santoso", jurusan: "Sistem Informasi" },
  { nim: "2410513111", nama: "Citra Dewi", jurusan: "Sains Data" },
];

app.get("/mahasiswa", (req, res) => {
  res.json(mahasiswa);
});

app.get("/mahasiswa/:nim", (req, res) => {
  const { nim } = req.params;
  const data = mahasiswa.find((m) => m.nim === nim);

  if (!data) {
    return res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
  }

  res.json(data);
});

app.post("/mahasiswa", (req, res) => {
  const { nama, nim, jurusan } = req.body || {};

  if (!nama || !nim) {
    return res.status(400).json({
      message:
        "Data tidak valid. Pastikan nama dan nim dikirim, dan header Content-Type: application/json sudah diset.",
    });
  }

  mahasiswa.push({ nim, nama, jurusan: jurusan || "-" });

  res.json({ message: `Berhasil menambahkan mahasiswa baru bernama ${nama}` });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());

const users = [];

// Kullanıcıları listele
app.get("/posts", (req, res) => {
  res.json(users);
});

// Kullanıcı ekle
app.post("/posts", (req, res) => {
  const { name, content } = req.body;
  const newUser = { name, content };
  users.push(newUser);
  res.json(users);
});

// Kullanıcı güncelle
app.put("/users/:userId", (req, res) => {
  const { userId } = req.params;
  const { name, email } = req.body;
  const user = users.find((user) => user.id === userId);
  if (!user) {
    return res.status(404).json({ error: "Kullanıcı bulunamadı" });
  }
  user.name = name;
  user.email = email;
  res.json(user);
});

// Kullanıcı sil
app.delete("/posts/:postId", (req, res) => {
  const { userId } = req.params;
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ error: "Kullanıcı bulunamadı" });
  }
  const deletedUser = users.splice(userIndex, 1)[0];
  res.json(deletedUser);
});

app.listen(5000, () => {
  console.log("API çalışıyor: http://localhost:5000");
});

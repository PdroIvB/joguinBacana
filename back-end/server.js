const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors(/*{origin:144.202.2.161:"a porta que a gente quiser usar"}*/));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/helloworld", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.post("/save-score", (req, res) => {
  const data = req.body.data;
  console.log(data);
  if (data) {
    res.send({ status: "Tudo certo" });
  } else {
    res.send({ status: "Tudo errado" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

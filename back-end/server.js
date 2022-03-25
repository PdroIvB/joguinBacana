const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const fs = require("fs");

app.use(cors(/*{origin:144.202.2.161:"a porta que a gente quiser usar"}*/));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/helloworld", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.get("/ranking", (req, res) => {
  const ranking = JSON.parse(fs.readFileSync("./ranking.json", "utf8"));
  ranking.sort(function (a, b) {
    if (a.points > b.points) {
      return 1;
    }
    if (a.points < b.points) {
      return -1;
    }
    return 0;
  });
  ranking.slice(0,9)
  res.send({data: ranking});
});

app.post("/save-score", (req, res) => {
  const data = req.body.data;
  console.log(data);
// salvando em um arquivo json
  const ranking = JSON.parse(fs.readFileSync("./ranking.json", "utf8"));
  ranking.push(data);
  fs.writeFile("./ranking.json", JSON.stringify(ranking), (err) => {
    if (err) {
      console.error(err);
      res.send({ status: "Tudo errado " });
    } else {
      console.log("File written successfully\n");
      console.log(fs.readFileSync("./ranking.json", "utf8"));
      res.send({ status: "Tudo certo" });
    }
  });
//FIXME qqr coisa
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

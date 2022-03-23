const express = require("express");
const app = express();
const port = 6969;

app.use(express.static(__dirname + "/jogao"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

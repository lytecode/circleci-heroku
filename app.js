const express = require("express");

const app = express();
const port = 8800;

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Hello circleci-heroku" });
});

const sum = (a, b) => a + b;
//app.listen(port, () => console.log(`app started on port 8800 ....`));

module.exports = {
  sum
};

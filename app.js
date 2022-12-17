const express = require("express");
const app = express();

app.get("/", (require, response) => {
  let date = new Date();
  response.send(
    `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  );
});

module.exports = app;

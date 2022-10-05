const path = require("path");
const express = require("express");

const app = express(); // create express app
const PORT = process.env.PORT || 3000;

// add middlewares

app.disable("x-powered-by");
app.use(express.static(path.join(__dirname, "build")));
app.use(express.static("public"));

app.use((_req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`);
});

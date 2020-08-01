const express = require("express");
const dotenv = require("dotenv");

/* Load configuration for dotenv */
dotenv.config();

const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

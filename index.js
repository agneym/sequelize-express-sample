const express = require("express");
const dotenv = require("dotenv");
const compression = require("compression");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");

/* Load configuration for dotenv */
dotenv.config();

const app = express();

app.use(logger("dev"));
app.use(compression());
app.use(helmet());

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

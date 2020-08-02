const express = require("express");
const dotenv = require("dotenv");
const compression = require("compression");
const helmet = require("helmet");
const logger = require("morgan");
const cors = require("cors");

/* Load configuration for dotenv */
dotenv.config();

const app = express();

/* Logger */
app.use(logger("dev"));

/* Add GZIP in express. Use reverse proxy in production */
app.use(compression());

/* Protect from HTTP vulnerabilities */
app.use(helmet());

/* Arguments are of the form of JSON */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

/* Initialize database and associated models */
const sequelize = require("./config/database")();
require("./models")(sequelize);

app.use("/", require("./routes"));

app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

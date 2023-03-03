require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const router = require("../config/routes");
const cors = require("cors");
const bodyParser = require("body-parser");

const publicDir = path.join(__dirname, "../public");
const viewsDir = path.join(__dirname, "./views");
const app = express();

/** Install CORS */
app.use(cors());

/** Install Body Parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/** Install request logger */
app.use(morgan("dev"));

/** Install JSON request parser */
app.use(express.json());

/** Install View Engine */
app.set("views", viewsDir);
app.set("view engine", "ejs");

/** Set Public Directory */
app.use(express.static(publicDir));

/** Install Router */
app.use(router);

module.exports = app;

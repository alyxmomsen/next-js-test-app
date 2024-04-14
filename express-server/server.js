const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./router/router");
const { db } = require("./data-base/database");

const corsOptions = {
  origin: "http://localhost:3001",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const port = 3000;
const app = express();

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  console.log("server started on port: " + port);
});

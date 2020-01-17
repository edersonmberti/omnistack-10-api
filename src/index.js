const express = require("express");
const cors = require("cors");
const routes = require("./routes");

require("dotenv").config();
require("./db/db");

const { PORT } = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log("PORT", PORT);
});

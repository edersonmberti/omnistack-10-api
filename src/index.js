const express = require("express");
const cors = require("cors");
const http = require("http");

const routes = require("./routes");
const { setupWebSocket } = require("./webscoket");

require("dotenv").config();
require("./db/db");

const app = express();
const server = http.Server(app);

const { PORT } = process.env;

setupWebSocket(server);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(PORT, () => {
  console.log("PORT", PORT);
});

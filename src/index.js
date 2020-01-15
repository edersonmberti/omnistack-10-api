const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

const PORT = 3000;

// GET, POST, PUT and DELETE

// Query params: /?search=ederson req.query (Filtros, ordenação, paginação, ...)
// Route Params: Delete and put user/:id req.params (Identificar um recurso na alteração ou remoção)
// Body: req.body (Dados para a criação ou alteração de um registro)

mongoose.connect(
  "mongodb+srv://edersonmberti:edersonmberti@cluster0-lxrq6.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log("PORT", PORT);
});

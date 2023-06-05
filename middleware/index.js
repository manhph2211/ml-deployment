const express = require('express')
const app = express();
const database = require("./src/database");
const route = require("./src/routes")

require("dotenv").config();

const PORT = process.env.PORT || 8000;


app.get("/", (req, res, next) => {
  res.send("Xin chào!");
});


app.use(express.urlencoded({extended: true}));
app.use(express.json());

database.connect();
route(app)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

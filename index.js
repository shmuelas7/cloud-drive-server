const cors = require("cors");
require('dotenv').config()
const express = require("express"),
  app = express(),
  PORT = process.env.PORT || 3001;


require('./DL/db').connect()

app.use(require("cors")());
app.use(express.json());

const mainRouter = require("./Routes/index.js");
app.use("/", mainRouter);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

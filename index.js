const cors = require("cors");
const express = require("express"),
  app = express(),
  PORT = process.env.PORT || 3001;

app.use(require("cors")());
app.use(express.json());

const mainRouter = require("./Routes/index.js");
app.use("/", mainRouter);

app.listen(PORT, () => console.log(`server runing on port ${PORT}`));

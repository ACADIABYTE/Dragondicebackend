const express = require("express");
const { readdirSync } = require("fs");
const cors = require("cors");
const morgan = require("morgan");
const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(cors());

readdirSync("src/Routes").map((i) => {
  server.use("/", require("./Routes/" + i));
});

server.listen(3001, () => {
  console.log("server start at port: 3001");
});

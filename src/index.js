const { ServerConfig, Logger } = require("./config");
const express = require("express");
const apiroutes = require("./routes");

const app = express();

app.use("/api", apiroutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Sucessfully started the server at ${ServerConfig.PORT} `);
  Logger.info("sucessfully started the server", {});
});

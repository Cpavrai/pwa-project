const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  PORT = process.env.PORT || 3000,
  jsonParser = bodyParser.json(),
  { Client } = require("pg"),
  client = new Client({
    host: "pwa-postgres",
    port: 5432,
    user: "database-user",
    password: "pwaproject",
    database: "pwa"
  }),
  dbManager = require("./db-query");

client.connect();

app.get("/token", function(req, res) {
  res.send(dbManager.listToken(client));
});

app.post("/token", jsonParser, (req, res) => {
  if (!req.param["db-use"])
    res.status(200).send(dbManager.saveToken(client, res.body.token));
  else {
    res.status(200).send({});
    webPush.sendNotification(
      subscription,
      JSON.stringify({
        title: "Push notification with Service Workers"
      }).catch(err => console.err(err))
    );
  }
  // ;
});

app.listen(PORT, function() {
  console.log("Listening on port " + PORT + "!");
});

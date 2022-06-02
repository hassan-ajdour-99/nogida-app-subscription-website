import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello NodeJs");
});

app.listen(5000, ()
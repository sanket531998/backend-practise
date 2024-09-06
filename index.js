// import express from "express ";
require("dotenv").config();

console.log("Test");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("You can login");
});

app.get("/hawky", (req, res) => {
  res.send("<h1>Haw Ky bhau kahi bhi nako sanga</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});

// import express
const express = require("express");

// import router
const router = require("./api");

// buat app express
const app = express();

// pasang router
app.use("/api", router);

// port
app.listen(8000, () => {
  console.log("Server is running on port 3000");
});

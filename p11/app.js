// import express
const express = require("express");

// buat object express
const app = express();

// menambahkan middleware
app.use(express.json());

// import router
const router = require("./routes/api");
app.use(router);
// port
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

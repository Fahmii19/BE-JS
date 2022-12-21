// import express
const express = require("express");

// buat routing modular
const router = express.Router();

// buat routing
router.get("/", (req, res) => {
  res.send("Hello World!");
});

// routing student dan params
router.get("/student/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Hello Student ${id}!`);
});

// routing post student
router.post("/student", (req, res) => {
  res.send("Hello Post Student!");
});

// routing put student
router.put("/student", (req, res) => {
  res.send("Hello Put Student!");
});

// routing delete student
router.delete("/student", (req, res) => {
  res.send("Hello Delete Student!");
});

// export router
module.exports = router;

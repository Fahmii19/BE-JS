// import express
const express = require("express");

// buat routing modular
const router = express.Router();

// buat routing
router.get("/", (req, res) => {
  res.send("Hello World!");
});

// import controller
const StudentController = require("../controllers/StudentController");

// routing student dan params
// req dan res adalah callback function yang berjaran ketika ada request
router.get("/students", StudentController.index);

// routing post students
router.post("/students", StudentController.store);

// export router
module.exports = router;

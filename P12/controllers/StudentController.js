// import model Student
const Student = require("../models/Student");

class StudentController {
  // method index untuk menampilkan data students
  async index(req, res) {
    const students = await Student.all();

    const data = { message: "Menampilkan data student", data: students };
    res.status(200).json(data);
  }

  // method store untuk menambahkan data students
  async store(req, res) {
    const input = req.body;
    await Student.create(input);
    const response = {
      message: "Menambahkan data students",
      data: input,
    };
    res.status(201).json(response);
  }
}

// buat object dari class StudentController
const object = new StudentController();
// diekspor ke routes\api.js
module.exports = object;

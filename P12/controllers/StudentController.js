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

  // method update untuk mengubah data students
  async update(req, res) {
    const input = req.body;
    const id = req.params.id;
    await Student.update(input, id);
    const response = {
      message: "Mengubah data students",
      data: input,
    };
    res.status(201).json(response);
  }

  // method delete untuk menghapus data students
  async delete(req, res) {
    const id = req.params.id;
    await Student.delete(id);
    const response = {
      message: "Menghapus data students",
      data: id,
    };
    res.status(201).json(response);
  }

  // mendapatkan 1 data berdasarkan id
  async show(req, res) {
    const id = req.params.id;
    const student = await Student.findById(id).catch((err) => console.log(err));
    const response = {
      message: "Menampilkan data student",
      data: student,
    };
    res.status(200).json(response);
  }
}

// buat object dari class StudentController
const object = new StudentController();
// diekspor ke routes\api.js
module.exports = object;

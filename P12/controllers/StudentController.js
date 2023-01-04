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
    const student = await Student.create(req.body);
    const response = {
      message: "Menambahkan data students",
      data: student,
    };
    res.status(201).json(response);
  }

  // method update untuk mengubah data students
  async update(req, res) {
    const { id } = req.params;
    const student = await Student.findById(id);

    if (student) {
      const updatedStudent = await Student.update(req.body, id);
      const response = {
        message: "Mengubah data students",
        data: updatedStudent,
      };
      res.status(201).json(response);
    } else {
      const response = {
        message: "Data students tidak ditemukan",
      };
      res.status(404).json(response);
    }
  }

  // method delete untuk menghapus data students
  async delete(req, res) {
    const { id } = req.params;
    const student = await Student.findById(id);
    if (student) {
      await Student.delete(id);
      const response = {
        message: "Menghapus data students",
        data: id,
      };
      res.status(201).json(response);
    } else {
      const response = {
        message: "Data students tidak ditemukan",
      };
      res.status(404).json(response);
    }
  }

  // mendapatkan 1 data berdasarkan id
  async show(req, res) {
    const { id } = req.params;
    const student = await Student.findById(id);
    if (student) {
      const response = {
        message: "Menampilkan data students",
        data: student,
      };
      res.status(200).json(response);
    } else {
      const response = {
        message: "Data students tidak ditemukan",
      };
      res.status(404).json(response);
    }
  }
}

// buat object dari class StudentController
const object = new StudentController();
// diekspor ke routes\api.js
module.exports = object;

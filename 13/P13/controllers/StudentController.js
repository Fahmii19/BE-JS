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

  // method update untuk mengubah data students dengan asycn await
  async update(req, res) {
    const { id } = req.params;
    const input = req.body;
    await Student.update(input, id);
    const response = {
      message: `Mengubah data students dengan id ${id}`,
      data: input,
    };
    res.status(200).json(response);
  }

  //  method destroy untuk menghapus data students dengan async await
  async destroy(req, res) {
    const { id } = req.params;
    await Student.delete(id);
    const response = {
      message: `Menghapus data students dengan id ${id}`,
      data: [],
    };
    res.status(200).json(response);
  }
}

// buat object dari class StudentController
const object = new StudentController();
// diekspor ke routes\api.js
module.exports = object;

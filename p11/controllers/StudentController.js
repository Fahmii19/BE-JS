// import students dari folder data
const students = require("../data/students");

class StudentController {
  // method index untuk menampilkan data students
  index(req, res) {
    const data = [{ message: "Menampilkan data student", data: students }];
    res.json(data);
  }
  //   method store untuk menambahkan data students
  store(req, res) {
    // membuat variable nama dan mengambil data dari body
    // const { nama } = req.body;
    // res.send(`Menambahkan data students ${nama}`);
    const { nama } = req.body;
    students.push(nama);
    const data = {
      message: `Menambahkan data students dengan nama ${nama}`,
      data: students,
    };
    res.json(data);
  }
  //   method update untuk mengubah data students
  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;
    // mengubah data students berdasarkan id yang dikirim
    students[id] = nama;
    const data = {
      message: `Mengubah data students dengan id ${id} dan nama ${nama}`,
      data: students,
    };
    res.json(data);
  }
  //   method destroy untuk menghapus data students
  destroy(req, res) {
    const { id } = req.params;
    // const data = {
    //   message: `Menghapus data students ${id}`,
    //   data: [],
    // };
    // menghapus data students berdasarkan id yang dikirim
    students.splice(id, 1);
    const data = {
      message: `Menghapus data students dengan id ${id}`,
      data: students,
    };
    res.json(data);
  }
}

const object = new StudentController();

module.exports = object;

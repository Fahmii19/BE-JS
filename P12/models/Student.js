// import database
const db = require("../config/database");

// membuat class Student
class Student {
  // end point get all students
  static all(callback) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM students";

      db.query(query, (err, result) => {
        resolve(result);
      });
    });
  }

  // end point create students
  static async create(data) {
    const id = await new Promise((resolve, reject) => {
      const query = "INSERT INTO students SET ?";

      db.query(query, data, (err, result) => {
        resolve(result.insertId);
      });
    });
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM students WHERE id = ?";

      db.query(query, id, (err, result) => {
        resolve(result);
      });
    });
  }

  // end point get students by id
  static findById(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM students WHERE id = ?";

      db.query(query, id, (err, result) => {
        resolve(result[0]);
      });
    });
  }

  // end point update students
  static async update(data, id, callback) {
    await new Promise((resolve, reject) => {
      const query = "UPDATE students SET ? WHERE id = ?";

      db.query(query, [data, id], (err, result) => {
        resolve(result);
      });
    });

    const student = await this.findById(id);
    return student;
  }

  // end point delete students
  static delete(id, callback) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM students WHERE id = ?";

      db.query(query, id, (err, result) => {
        resolve(result);
      });
    });
  }
}
// eksport class Student
module.exports = Student;

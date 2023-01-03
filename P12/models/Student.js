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
  static create(data, callback) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO students SET ?";

      db.query(query, data, (err, result) => {
        resolve(result);
      });
    });
  }
}
// eksport class Student
module.exports = Student;

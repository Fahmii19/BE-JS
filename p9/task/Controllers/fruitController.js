// import fruit model

const fruits = require("../data/fruits.js");

// menampilkan semua data pada fruits.js
const index = () => {
  for (const fruit of fruits) {
    console.log(fruit);
  }
};

// menambahkan data baru pada fruits.js dengan fungsi push
const store = (name) => {
  fruits.push(name);
  // index();
};

// mengubah data pada fruits.js dengan fungsi splice
const update = (position, name) => {
  fruits.splice(position, 1, name);
  // index();
};

// menghapus data pada fruits.js dengan fungsi splice
const destroy = (position) => {
  fruits.splice(position, 1);
  index();
};

module.exports = { index, store, update, destroy };

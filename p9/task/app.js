// import method index dan store
const {
  index,
  store,
  update,
  destroy,
} = require("./Controllers/fruitController.js");

const main = () => {
  // menapis data dengan method index
  // index();
  // menambahkan data baru dengan method store
  store("Pisang");
  // mengubah data dengan method update
  update(0, "Kelapa");
  // menghapus data dengan method destroy
  destroy(0);
};

main();

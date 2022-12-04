// import method index dan store
const { index, store } = require("./fruitController.js");

const main = () => {
  index();
  store("Rambutan");
};

main();

// jenis function
// 1. Function Declaration membuat fungsi dengan mendeklarasikan keyword function
// 2. Function Expression membuat fungsi dengan mendeklarasikan keyword function sebagai variabel

// Function Declaration
// function hitungLuasLingkaran(jariJari) {
//   const PHI = 3.14;
//   let luas = PHI * jariJari * jariJari;
//   return luas;
// }

// Function Expression
// function hitungLuasLingkaran(jariJari) {
//   const PHI = 3.14;
//   let luas = PHI * jariJari * jariJari;
//   return luas;
// }

// arrow function

const hitungLuasLingkaran = (jariJari) => {
  const PHI = 3.14;
  let luas = PHI * jariJari * jariJari;
  return luas;
};

console.log(hitungLuasLingkaran(5));

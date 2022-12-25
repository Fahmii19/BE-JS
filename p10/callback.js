// With Function Declaration
// function formatName(name) {
//   const result = name.toUpperCase();
//   return result;
// }

// function getName(name, callformatName) {
//   const result = callformatName(name);
//   console.log(result);
// }

// getName("Fahmi", formatName);

// With Arrow Function
const formatName = (name) => name.toUpperCase();

const getName = (name, callformatName) => console.log(callformatName(name));

getName("Fahmi", formatName);

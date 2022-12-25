function persiapan() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Persiapan");
    }, 2000);
  });
}

function rebusAir() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Rebus Air");
    }, 5000);
  });
}

function masak() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Masak");
    }, 7000);
  });
}

function main() {
  persiapan()
    .then((message) => {
      console.log(message);
      return rebusAir();
    })
    .then((message) => {
      console.log(message);
      return masak();
    })
    .then((message) => {
      console.log(message);
    })
    .catch((message) => {
      console.log(message);
    });
}

main();

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


// async digunakan untuk membuat function menjadi asyncronous
// await digunakan untuk menunggu promise selesai
// await hanya bisa digunakan di dalam function async

async function main() {
  console.log(await persiapan());
  console.log(await rebusAir());
  console.log(await masak());
}

main();

// promise terbagi menjadi 2 bagian
// producing : membuat promise
// consuming : mengkonsumsi promise

// Promise memiliki 3 state
// 1. pending : belum terpenuhi
// 2. fulfilled : terpenuhi
// 3. rejected : ditolak

function download() {
  return new Promise((resolve, reject) => {
    const status = true;
    setTimeout(() => {
      if (status) {
        resolve("Download success");
      } else {
        reject("Download failed");
      }
    }, 3000);
  });
}

download()
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

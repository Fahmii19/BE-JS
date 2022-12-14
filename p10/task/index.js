// Penggunan Callback
function dataDiri(callback) {
  setTimeout(() => {
    const nama = "Fahmi Callback";
    callback(nama);
  }, 2000);
}

dataDiri((nama) => {
  console.log(nama);
});

// Callback ke promise

function dataDiriPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const nama = "Fahmi Promise";
      resolve(nama);
    }, 2000);
  });
}

dataDiriPromise().then((nama) => {
  console.log(nama);
});

// Promise ke async await

async function dataDiriAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const nama = "Fahmi Async";
      resolve(nama);
    }, 2000);
  });
}

async function main() {
  const nama = await dataDiriAsync();
  console.log(nama);
}

main();

// Penggunan Callback Refactor ES6
const dataDiri = (callback) => {
  setTimeout(() => {
    const nama = "Fahmi Callback";
    callback(nama);
  }, 2000);
};
dataDiri((nama) => {
  console.log(nama);
});

// Callback ke promise Refactor ES6
const dataDiriPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const nama = "Fahmi Promise";
      resolve(nama);
    }, 2000);
  });
};

dataDiriPromise().then((nama) => {
  console.log(nama);
});

// Promise ke async await refactor ES6

const dataDiriAsync = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const nama = "Fahmi Async";
      resolve(nama);
    }, 1000);
  });
};

const main = async () => {
  const nama = await dataDiriAsync();
  console.log(nama);
};

main();

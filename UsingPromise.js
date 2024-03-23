console.log("start");
const getUser = () => {
  return new Promise((resolve, reject) => {
    resolve({ name: "hjggh", age: 90 });
    reject("err");
    console.log("in side promise");
  });
};

getUser().then((data) => {
  console.log("data", data);
});
console.log("end");

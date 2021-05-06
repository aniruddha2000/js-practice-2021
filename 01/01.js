let arr = [2, 3, 6, 8];

var result = arr.every((e) => {
  return e % 2 === 0;
});

console.log(result);

function sum(a, b, callback) {
  console.log(a + b);
  callback(a, b);
}

function callbackFunc(a, b) {
  console.log(a - b);
}

sum(6, 5, callbackFunc);

function sayMyName() {
  setTimeout(() => {
    console.log("Aniruddha Basak");
  }, 2000);
}

sayMyName();

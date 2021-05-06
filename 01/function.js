function init() {
  let name = "Aniruddha";
  console.log("This is higher priority");
  function sayName() {
    console.log(name);
  }
  return sayName;
}

// let value = init();
// console.log("I want to print this right now");
// value();

///////////////////////////////
function doAddValue(x) {
  return function main(y) {
    return x + y;
  };
}

// let value = doAddValue(5);
// console.log(value(6));

console.log(doAddValue(6)(10));
// doAddValue(6)(5)

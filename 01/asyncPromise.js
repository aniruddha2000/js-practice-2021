const uno = () => {
  return "Uno -> 1";
};
const dos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Dos -> 2");
    }, 3000);
  });
};
const tres = () => {
  return "Tres -> 3";
};

const callMe = async () => {
  let valOne = uno();
  console.log(valOne);
  let valTwo = await dos();
  console.log(valTwo);
  let valThree = tres();
  console.log(valThree);
};

callMe();

// let data = new Map();

// data.set(1, "One");
// data.set(2, "Two");
// data.set(3, "Three");

// console.log(data);

// for (const key of data.keys()) {
//   console.log(`Key is ${key}`);
// }
// for (const value of data.values()) {
//   console.log(`Value is ${value}`);
// }

// data.forEach((v, k) => console.log(`${k} => ${v}`));

let contacts = new Map();
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });

contacts.forEach((v, k) => {
  console.log(`${k} = ph: ${v.phone}, address: ${v.address}`);
});

console.log(contacts.get("Hilary"));

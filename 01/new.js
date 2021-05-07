// var Object = function (name, college, place, stream) {
//   this.firstName = name;
//   this.college = college;
//   this.place = place;
//   this.stream = stream;
//   this.getData = function() {
//     console.log(`${this.firstName} studies in ${this.college} in ${this.stream} branch.`);
//   }
// };

// let ani = new Object("Aniruddha", "BPPIMT", "Birati", "CSE")
// let aditi = new Object("Aditi", "BPPIMT", "Chandannagar", "CSE")
// // console.log(ani);
// // console.log(aditi);
// ani.getData()
// aditi.getData()

function sayMyName(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  console.log(`${this.firstName} ${this.lastName}`);
}

let ani = new sayMyName("Aniruddha", "Basak");
let anu = new sayMyName("Anumita", "Basak");

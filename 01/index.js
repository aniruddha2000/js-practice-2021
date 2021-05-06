let count = document.getElementById("counter");
let follower = document.getElementById("follower");

let counter = 1;
setInterval(() => {
  if (counter < 1000) {
    counter++;
    count.innerText = counter;
  }
}, 1);

setTimeout(() => {
  follower.innerText = "Follower on Instagram!";
}, 4000);

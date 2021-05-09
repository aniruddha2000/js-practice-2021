const User = require("./classJs.js");

aniruddha = new User("Aniruddha Basak", "codewithaniruddha@gmail.com");

console.log(aniruddha.getData());
aniruddha.addLanguage("python", "javascript", "shell", "Rust")
console.log(aniruddha.getKnownLanguages());

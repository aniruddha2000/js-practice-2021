class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  #knowLanguages = [];
  getData() {
    return {
      name: this.name,
      email: this.email,
    };
  }

  addLanguage(...languages) { // ... is spread
    for (const language of languages) {
      this.#knowLanguages.push(language);
    }
  }

  getKnownLanguages() {
    return this.#knowLanguages;
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  getAdminInfo() {
    return "Hey, there! I am now Admin";
  }
}

anumita = new Admin("Anumita Basak", "basakanumita@gmail.com");
console.log(anumita.getAdminInfo());
console.log(anumita.getData());

module.exports = User;

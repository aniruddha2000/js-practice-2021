class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  knowLanguages = [];

  getData() {
    return {
      name: this.name,
      email: this.email,
    };
  }

  addLanguage(...languages) {
    for (const language of languages) {
      this.knowLanguages.push(language);
    }
  }

  getKnownLanguages() {
    return this.knowLanguages;
  }
}

module.exports = User;

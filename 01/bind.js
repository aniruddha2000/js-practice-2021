var aniruddha = {
  name: "Aniruddha Basak",
  college: "BPPIMT",
  stream: "CSE",
  getData: function () {
    console.log(
      `${this.name} studies in ${this.college} in ${this.stream} branch.`
    );
  },
};

aniruddha.getData();

var kuntal = {
  name: "Kuntal Roy",
  college: "BPPIMT",
  stream: "CSE",
};

let kuntalData = aniruddha.getData.bind(kuntal);
kuntalData();

var anumita = {
  name: "Anumita Basak",
  college: "BPPIMT",
  stream: "CSE",
};

aniruddha.getData.bind(anumita)();

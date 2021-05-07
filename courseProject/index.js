const courses = [
  {
    name: "Javascript Course",
    price: "2.1",
  },
  {
    name: "Python Course",
    price: "2.5",
  },
  {
    name: "Golang Course",
    price: "2.8",
  },
  {
    name: "Rust Course",
    price: "2.6",
  },
];

function generateList() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";
  courses.forEach((course) => {
    const li = document.createElement("li");
    li.classList.add("list-group-items");
    const courseName = document.createTextNode(course.name + " ");
    li.appendChild(courseName);
    const span = document.createElement("span");
    span.classList.add("price");
    const coursePrice = document.createTextNode("$" + course.price);
    span.appendChild(coursePrice);
    li.appendChild(span);
    ul.appendChild(li);
  });
}

window.addEventListener("load", generateList);

const sortButton = document.querySelector(".sort-btn");

sortButton.addEventListener("click", () => {
  courses.sort((a, b) => {
    return a.price - b.price;
  });
  generateList();
});

const sortReverseButton = document.querySelector(".sort-reverse-btn");

sortReverseButton.addEventListener("click", () => {
  courses.sort((a, b) => {
    return b.price - a.price;
  });
  generateList();
});

const alphaSortButton = document.querySelector(".alpha-sort-btn");

alphaSortButton.addEventListener("click", () => {
  courses.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  generateList();
});

const alphasortReverseButton = document.querySelector(
  ".alpha-sort-reverse-btn"
);

alphasortReverseButton.addEventListener("click", () => {
  courses.sort((a, b) => {
    return b.name.localeCompare(a.name);
  });
  generateList();
});

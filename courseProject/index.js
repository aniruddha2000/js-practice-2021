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

generateList();

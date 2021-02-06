const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const addDoubleBtn = document.getElementById("double");
const showMillionaresBtn = document.getElementById("show-millionares");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

//fetch random user and add money
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();
  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);

  console.log(newUser);
  //   fetch("https://randomuser.me/api")
  //     .then((res) => res.json())
  //     .then((data) => {});
}

// Add new Obj to data arr
function addData(obj) {
  data.push(obj);

  updateDOM();
}

// Update DOM
function updateDOM(providedData = data) {
  // clear main div
  main.innerHTML = `<h2><strong>Person</strong>Wealth</h2>`;

  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
  //   providedData.forEach(function (item) {});
}

// Format number as money
function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"); // 12,345.67
}

//Even Listeners
addUserBtn.addEventListener("click", getRandomUser);

// https://www.udemy.com/course/web-projects-with-vanilla-javascript/learn/lecture/17842166#overview
// 29. Output Users - forEach() & DOM Methods

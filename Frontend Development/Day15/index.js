// const main = document.getElementById("main");
const mainClass = document.querySelector("#main");
const button = document.querySelector(".button");
const modal = document.querySelector(".modal");
const button2 = document.querySelector(".button2");

console.log(mainClass);

// mainClass.style.color = "white";
// mainClass.style.background = "red";

// mainClass.innerHTML = "<h1 style='font-style: italic'>Hello World!</h1>";

const pressMe = () => {
  mainClass.style.color = "white";
  mainClass.style.background = "red";
  mainClass.innerHTML = "<h1 style='font-style: italic'>Hello World!</h1>";
};

const showAlert = () => {
  alert("Press successful");
};

const showModal = () => {
  modal.style.display = "block";
};

const closeModal = () => {
  modal.style.display = "none";
};

button.addEventListener("click", showModal);
button2.addEventListener("click", closeModal);

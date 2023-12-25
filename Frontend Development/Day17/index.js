const modal = document.querySelector(".modal");
const product = document.querySelector(".product");
const closeButton = document.querySelector(".close");

const openModal = () => {
  modal.style.display = "block";
};

const closeModal = () => {
  modal.style.display = "none";
};

product.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

//sidebar
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");

const openSidebar = () => {
  //   sidebar.classList.add("sidebar-active");
  sidebar.classList.toggle("sidebar-active");
};

hamburger.addEventListener("click", openSidebar);

//object
// const object = {
//   id: 1,
//   name: "Anik",
//   age: 23,
// };

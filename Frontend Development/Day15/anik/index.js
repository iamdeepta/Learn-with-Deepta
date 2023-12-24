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

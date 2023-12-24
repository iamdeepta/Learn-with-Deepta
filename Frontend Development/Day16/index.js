const node = document.querySelector(".node");
const button = document.querySelector(".btn");
const buttonRemove = document.querySelector(".btn_remove");

const createElem = () => {
  const paragraph = document.createElement("input");

  //   paragraph.innerText = "Anik";

  paragraph.value = "Anik";

  //this is for showing element in browser
  node.appendChild(paragraph);

  node.classList.add("node2");
};

const removeClass = () => {
  node.classList.remove("node2");
};

button.addEventListener("click", createElem);
buttonRemove.addEventListener("click", removeClass);

//input validation
const textInput = document.querySelector(".text-input");
const submitButton = document.querySelector(".submit");
const errorMessage = document.querySelector(".error-message");

const textValidation = (name) => {
  if (name.length <= 3) {
    errorMessage.style.display = "block";
    errorMessage.style.color = "red";
    errorMessage.innerHTML = "You should enter atleast 4 characters";
  } else {
    errorMessage.style.display = "block";
    errorMessage.style.color = "green";
    errorMessage.innerHTML = "Your name is " + name;
    // alert("Your name is " + name);
  }
};

submitButton.addEventListener("click", () => {
  textValidation(textInput.value);
});

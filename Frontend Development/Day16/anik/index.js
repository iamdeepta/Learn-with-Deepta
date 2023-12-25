  
  //input validation
  const textInput = document.querySelector(".text-input");
  const passwordInput = document.querySelector(".password-input");
  const submitButton = document.querySelector(".submit");
  const errorMessage1 = document.querySelector(".error-message-1");
  const errorMessage2 = document.querySelector(".error-message-2");
  
  const textValidation = (name) => {
    if (name.length <= 2) {
      errorMessage1.style.display = "block";
      errorMessage1.style.color = "red";
      errorMessage1.innerHTML = "You should enter atleast 3 characters";
    } else {
      errorMessage1.style.display = "block";
      errorMessage1.style.color = "green";
      errorMessage1.innerHTML = "Your name is good to go!";
      // alert("Your name is " + name);
    }
  };

  const passwordValidation = (password) => {
    if (password.length <= 5) {
      errorMessage2.style.display = "block";
      errorMessage2.style.color = "red";
      errorMessage2.innerHTML = "You should enter atleast 6 characters";
    } else if(password.match(/\d/) === null){
        //regex = regular expression
        errorMessage2.style.display = "block";
      errorMessage2.style.color = "red";
      errorMessage2.innerHTML = "Password should have atleast 1 number";
    }
    else {
      errorMessage2.style.display = "block";
      errorMessage2.style.color = "green";
      errorMessage2.innerHTML = "Your password is good to go!";
      // alert("Your name is " + name);
    }
  };
  
  submitButton.addEventListener("click", () => {
    textValidation(textInput.value);
    passwordValidation(passwordInput.value);
  });
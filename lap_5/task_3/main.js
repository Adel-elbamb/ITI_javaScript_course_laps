var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email")
var passwordInput = document.getElementById("password")
var inputGender = document.getElementsByName("gender")
var validError = document.getElementsByClassName("error");
var sendData = document.getElementById("submit");
console.log(inputGender)
 
function SendData() {
  if (nameInput.value.trim() === "") {
    // console.log(nameInput.value)
    validError[0].innerHTML = `Name is required`;
    console.log(validError[0]); // Debugging log
  } else {
    validError[0].innerHTML = ""; // Clear the error message
  }


  if ( !emailInput.value.trim().match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)) {
    
    validError[1].innerHTML = `this email : ${emailInput.value.trim()} \t is not valid `;
    console.log(validError[0]); 
  } else {
    validError[1].innerHTML = ""; 
   
  }
 var regxPassword =  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  if (!regxPassword.test(passwordInput.value)){
    
    validError[2].innerHTML = `please write strong password `;
    console.log(validError[2]); 
  } else {
    validError[2].innerHTML = ""; 
   
  }

  if (!(inputGender[0].value === "male" || inputGender.value == "female")){
    validError[3].innerHTML = `gender is required  `; 
  } else {
    validError[3].innerHTML = ""; 
   
  }
}

sendData.addEventListener("click", SendData);
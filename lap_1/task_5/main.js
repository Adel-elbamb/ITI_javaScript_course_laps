
var patternName = /^[A-Za-z]+$/ ;
var name;
do {
  name = prompt("Enter your name (letters only):");
  if (!patternName.test(name)) {
    alert("Invalid name! Please enter letters only.");
  }
} while (!patternName.test(name));

// mobile number 
var mobileNumber ;
var patternMobilenumber = /^\d{8}$/
do {
    mobileNumber = prompt("Enter your mobil number ")
    var cheak = patternMobilenumber.test(mobileNumber)
     if(!cheak) {
        alert("Enter  valid mobileNumber ")
     } 
}while(!cheak)

//phone number 
var phoneNumber ;
var patternPhoneNumber = /^(010|011|012|015)\d{8}/ 

do{
    phoneNumber = prompt("Enter your phone number ")
    var cheak = patternPhoneNumber.test(phoneNumber)
    if(!cheak) {
        alert("please Enter valid phoneNumber")
    }
}while(!cheak)

    //email 

var email ;
var patternemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

do {
 email = prompt("enter your email ")
 var cheak = patternemail.test(email)
 if(!cheak) {
    alert("eemail is notvalid ")
 }
}while(!cheak)


document.writeln(`
    <h2 style="color: green;">entering user info</h2>
      <p style="color: green;">Welcome dear guest <b>${name}</b></p>
      <p style="color: green;">Your telephone number is <b>${mobileNumber}</b></p>
      <p style="color: green;">Your mobile number is <b>${phoneNumber}</b></p>
      <p style="color: green;">Your eemail address is <b>${email}</b></p>
    `)
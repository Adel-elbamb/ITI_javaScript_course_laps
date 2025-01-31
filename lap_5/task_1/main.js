var nameInput= document.getElementById("studentName")
var ageInput = document.getElementById("studentAge")
var btn = document.getElementById("addStudent")
var deleteButton = document.createElement("button")
var deleteStudent = deleteButton.innerHTML = `<a href='#' class= "deleteStudent">Delete Student </a>`
console.log(deleteButton)
deleteButton.setAttribute("class" , "deleteButton")
var count = 0 
function addStudent () {
var nameData = nameInput.value 
var ageData = Number(ageInput.value)
var row = document.createElement("tr")

var tbody = document.getElementById("studentTableBody")
var nameError = document.getElementById("nameError")
var ageError = document.getElementById("ageError")
count = count +1 

if (!nameData || nameData.lenght < 3) {
    nameError.textContent= "name is required          and name must be grater than 4 words"

}else if  (!ageData || ageData < 18) {
   ageError.textContent= "age is required    and age must be grater than 18 "

} else {
    row.innerHTML=
    `
   <td>${count}</td>
   <td>${nameData}</td>
   <td>${ageData}</td>
   <td>${deleteStudent}</td>
   `
   tbody.append(row)
}

}


btn.addEventListener("click",addStudent)
// deleteStudent.addEventListener("click",deleteStd)

// getting elements

let form = document.getElementById("form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let error = document.getElementById("error");
let reset = document.getElementById("reset");


// form submit event

form.addEventListener("submit", function(e){

e.preventDefault(); // stop page reload

// name validation

if(name.value === ""){
error.textContent = "Name is required";
return;
}

// email validation

if(!email.value.includes("@")){
error.textContent = "Invalid Email";
return;
}

// password validation

if(password.value.length < 6){
error.textContent = "Password must be at least 6 characters";
return;
}

// success message

error.style.color = "green";
error.textContent = "Form Submitted Successfully";

});


// reset button

reset.addEventListener("click", function(){

name.value = "";
email.value = "";
password.value = "";
error.textContent = "";

});
// functions
var user = "elytra789";
var pass = "987el";

function login() {

   let usernameInput = document.getElementById("username").value;
   let passwordInput = document.getElementById("password").value;

   if (usernameInput === "" || passwordInput === "") {
       alert("Please enter all your details.");

   }
   else if (usernameInput === user && passwordInput === pass) {
       alert("Hello " + usernameInput + "!!!");

   }
   else {
       alert("Incorrect details. Please try again.");
   }
}

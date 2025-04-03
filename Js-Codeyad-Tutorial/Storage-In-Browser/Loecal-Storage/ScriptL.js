localStorage.setItem("firstName", "Ali");
localStorage.setItem("lastName", "Amini");
localStorage.setItem("email", "alirezaamini@gmail.com");
const h1 = document.getElementById("test");
const fName = localStorage.getItem("firstName");
const lName = localStorage.getItem("lastName");
const email = localStorage.removeItem("email");
fName
  ? (h1.innerText = `welcome ${fName} ${lName}`)
  : (h1.innerText = "Nobody to Welcome");

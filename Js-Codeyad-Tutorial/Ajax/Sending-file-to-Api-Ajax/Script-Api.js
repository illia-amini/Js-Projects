const fName = document.getElementById("FirstName");
const lName = document.getElementById("LastName");
const jTitle = document.getElementById("jobTitle");
const formCo = document.getElementById("frmSend"); //To defien an event, whenever event happen info will send

function sendData() {
  let xhr = new XMLHttpRequest();
  let params = //for sending the paragraphs we put all in params var,to use send func,
    "FirstName:" +
    fName.value + //why value? beacuse we want the vlue or what user enter to our form
    "&" +
    "LastName:" +
    lName.value +
    "&" +
    "JobTilte:" +
    jTitle.value;

  xhr.open("POST", "http://localhost:7006/api/persons/adduser", true);

  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded"); // to make ur server understand that ur info that send is form data u should mention in ur header by this func setrequestheader and what is inside of the () content means content and also api address.

  xhr.send(params); //also we mention we wamt to send params also
}
frames.addEventListener("submit", sendData);

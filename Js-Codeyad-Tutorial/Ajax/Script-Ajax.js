const myBtn = document.getElementById("my-btn");
const txtDiv = document.getElementById("text");
function loadText() {
  let xhr = new XMLHttpRequest();
  //   console.log(xhi);

  xhr.open("GET", "Ajax-tutorial.txt", true);
  console.log("Redystate:", xhr.readyState); //redystate is 1
  xhr.onprogress = function () {
    console.log("Redystate:", xhr.readyState); //readystate is 3
  };
  xhr.onload = function () {
    if (xhr.status == 200) {
      txtDiv.innerHTML = this.response;
    }
  };
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      txtDiv.innerHTML = this.responseText;
    }
  };
  xhr.send();
  console.log("Redystate:", xhr.readyState); //readystate is
}

myBtn.addEventListener("click", loadText);

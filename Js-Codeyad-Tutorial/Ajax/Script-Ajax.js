const myBtn = document.getElementById("my-btn");
const txtDiv = document.getElementById("text");
function loadText() {
  let xhr = new XMLHttpRequest();
  //   console.log(xhi);
  xhr.open("GET", "Ajax-tutorial.txt", true);
  xhr.onload = function () {
    if (xhr.status == 200) {
      txtDiv.innerHTML = this.response;
    }
  };
  xhr.send();
}

myBtn.addEventListener("click", loadText);

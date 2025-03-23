const myBtn = document.getElementById("my-btn");
const txt = document.getElementById("text");
function loadText() {
  let xhi = new XMLHttpRequest();
  //   console.log(xhi);
  xhi.open("GET", "Ajax/Ajax-tutorial.txt", true);
  xhi.onload = function () {
    if (xhi.status == 200) {
      txt.innerHTML = this.response;
    }
  };
  xhi.send();
}

myBtn.addEventListener("click", loadText);

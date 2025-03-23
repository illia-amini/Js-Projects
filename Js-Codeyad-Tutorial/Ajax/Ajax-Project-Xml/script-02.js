function myXml() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "cd-collection.xml", true);
  xhr.onload = function () {
    if (this.status == 200) {
      console.log(xhr);
    }
  };
  xhr.send();
}
myBtn02.addEventListener("Click", myXml);

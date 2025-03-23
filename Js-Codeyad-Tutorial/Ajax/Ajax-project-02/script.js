function loadXml() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "cd-collection.xml", true);
  xhr.onload = function () {
    if (xhr == 200) {
      console.log(this.responseText);
    }
  };
  xhr.send();
}
loadXml();

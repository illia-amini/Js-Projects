const btnLoad = document.getElementById("myBtn02");
function myXml() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "cd-collection.xml", true);
  // xhr.onload = function () {
  //   if (this.status == 200) {
  //     console.log(this.responseText); //Here u write this.respone text , it will print what texts inside of ur doc is
  //   }
  // };
  xhr.onload = loadXml();
  xhr.send();
}
function loadXml(xhr) {
  //It must have a an input to be able to use for in  as loop u can write this or xhr
  const xmlDocs = xml.responseXml;
  const cd = xmlDocs.getElementByTagName("Cd");
  console.log(cd);
}
btnLoad.addEventListener("click", myXml);

function loadDoc() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "cd-collection.xml", true);
  xhr.onload = function () {
    loadXml(this);
    // console.log(this.responseText); //to check if coonection between client and Ajax is happend or not
  };
  xhr.send();
}
function loadXml(xml) {
  //it must have an input in order to create a loop based on this input, either u write this or xhr it will not be diffrent
  const xmlDoc = xml.responseXml;
  const cd = xmlDoc.getElementsByTagName("CD");
  console.log(cd);
}
myBtn02.addEventListener("click", loadDoc);

function addPost(e) {
  e.preventDefault(); //it will prevent of default behave of html nodes like refresh the page and etc it must have also an input here like e,,,
  console.log(fetch());
  let titleValue = document.getElementById("title").value;
  let bodyValue = document.getElementById("body").value;
  fetch("https://jsonplaceholder.typecode.com/posts", {
    methode: "POST",
    headers: {
      Accept: "applic",
      "content-Type": "",
    },
  });
}
document.getElementById("addPost").addEventListener("submit", addPost);

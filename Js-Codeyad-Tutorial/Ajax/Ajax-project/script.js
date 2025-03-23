function loadUser() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users", true);
  xhr.onload = function () {
    if (this.status == 200) {
      let users = JSON.parse(this.responseText);
      console.log(users);
    }
  };
  xhr.send();
}
loadUser();

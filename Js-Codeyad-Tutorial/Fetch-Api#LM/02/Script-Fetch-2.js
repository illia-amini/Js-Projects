function getUsers() {
  fetch("users-2.json").then((res) => {
    res.json().then((data) => {
      // console.log(data);//here u can see the json, via using json func()
      let myDiv = " ";
      forEach(function (user) {
        myDiv += `<ul>
        <li>${user.id}</li>
        <li>${user.name}</li>
        <li>${user.email}</li>
      </ul>
            `;
        //Erorr, in promises for each is not a function is returend ???
      });
      document.getElementById("outpit").innerHTML = myDiv;
    });
  });
}
btnGetUsers.addEventListener("click", getUsers);

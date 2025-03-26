function getUsers() {
  fetch("users.json").then((res) => {
    // console.log(res); fetc func will retur a response, we use then func and conslo log to see the response, reponse is promises
    res.json().then((json) => {
      //   console.log(json); here we want json section from our response then we use json func to get acess to it, notice that we define a json file here
      let output = " ";
      json.forEach(function (user) {
        output += `
            <ul> 
                <li>${user.id}</li>
                <li>${user.name}</li>
                <li>${user.email}</li>
            </ul>
            `;
      });
      document.getElementById("output").innerHTML = output;
    });
  });
}

btnGetUsers.addEventListener("click", getUsers);

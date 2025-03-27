function getUsers() {
  fetch("").then((res) => {
    console.log(res.text()).then((data) => {
      console.log(data);
    });
  });
}

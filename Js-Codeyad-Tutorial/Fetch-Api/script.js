const myBtn = document.getElementById("getText");

// function getTet() {
//   fetch("Fetch-Api")
//     .then(function (result) { // then() func will come if fetch () promise was successfill then it will aolly sm., here run a func
//       return result.text(); //we say return result.text, rsult its the result of sample of text
//     })
//     .then(function (data) {// data =result.text
//       console.log(data);
//     });
// }

//Written in aarow func

function getText() {
  fetch("Fetch-Api").then((result) =>
    result.text().then((data) => console.log(data))
  );
}
myBtn.addEventListener("click", getText); // it will return a respone

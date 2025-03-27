const myBtn = document.getElementById("getText");

// function getTet() {
//   fetch("Fetch-Api")
//     .then(function (result) { // then() func will come if fetch () promise was successfill then it will aolly sm., here run a func
//       return result.text(); //we say return result.text, rsult its the result of sample of text taht if u consol it it will retun a response
//     })
//     .then(function (data) {// data =result.text
//       console.log(data);
//     });
// }

//Written in aarow func

function getText() {
  fetch("Fetch-Api.txt").then((res) => {
    //the diffrences between fetch api and xml http request u need to write the type of doc at the end of the ur file name for ex here is .txt
    res.text().then((data) => {
      //re.text() is a result or response of fetch(fetch-api)
      //then we put in another func to see the data
      console.log(data);
    });
  });
}

myBtn.addEventListener("click", getText);

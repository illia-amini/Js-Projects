let myPromise = new Promise(function (myResolve, myReject) {
  let fName = "Ali";
  let lName = "Amini";
  if (fName == "Ali" && lName == "Amini") {
    myResolve(`Welcome to ur pannel Mr.${fName} ${lName}`);
  } else {
    myReject(
      `Im so sorry,may u entered a wrong username or password Mr.${fName} ${lName}`
    );
  }
});

myPromise.then(
  function (value) {
    myDisplayer(value);
  },
  function (erorr) {
    myDisplayer(erorr);
  }
);

function myDisplayer(some) {
  document.getElementById("Display").innerHTML = some;
}
// at the end its neccessery to define a func that includes arg, here some
//and present the displayer func.

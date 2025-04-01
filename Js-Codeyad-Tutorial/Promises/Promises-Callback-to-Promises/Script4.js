//Write a call back func

function getMassege(callback) {
  //using call back as arg
  setTimeout(function () {
    callback("Hello callback!!!");
  }, 2000);
}

function myFunc(msg) {
  console.log(msg);
}

getMassege(myFunc); //we pass my func to get massege func to use call back func,

//Turning into promises version

function getMassege(callback) {
  //here we use promise
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("Hello callback!!!");
    }, 2000);
  });
}

function myFunc(msg) {
  console.log(msg);
}

getMassege().then(myFunc); //we must use ()  after get message to use then() func after.and then we pass my func to get massege

//For ruuning u need to command one of them.

const Promise1 = Promise.resolve("promise1 complte");
const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("promise2 is complete");
  }, 3000);
});

// Promise1.then((resolve) => console.log(resolve));

// promise2.then((resolve) => console.log(resolve));

Promise.all([Promise1, promise2]).then((resolve) => console.log(resolve));

// whenever u want run all promises at the same time for ex here all aply in 2s use all func.
//also u must use an array inside of the all func beacuse it recive an array that in array u put the promises u defiend before
//then u log them

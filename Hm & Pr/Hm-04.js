//Hm-04;

//instrouction-below:
//camelCase-written;

/*
.1-Write max() & min() & sum() codes by using arguments.(optional))
.2-Navbar.(required)
.3-Modal.(required)
.4-Programize from 23 to 33.(required)
.5-Make two buttons if u press add and another one decrease the timer.(optional)
*/

//1-max() & min () & sum ()-s

//1.min()
function $cMin() {
    console.log(arguments);
    let result = arguments[0];
    for (let nums of arguments) {
      if (nums < result) {
        result = nums;
      }
    }
    console.log(result);
  }
  $cMin(10, 4, 45, 3, 1);// here u can what nums u want.
//2.max()
function $cMax() {
    console.log(arguments);
    let result = arguments[0];
    for (let nums of arguments) {
      if (nums > result) {
        result = nums;
      }
    }
    console.log(result);
  }
  $cMax(10, 22, 3, 4, 5, 55454, 3);// here u can what nums u want.
  //3.sum()
  function $cSum(){
    console.log(arguments);
    let sum=0;
    for(let nums of arguments){
        sum+=nums;
    }
    console.log(sum);
  }
$cSum(10,2,3);// here u can what nums u want.

//1-max() & min () & sum ()-e

//2-side-nav-s
/*
Written in,
Side-bar-Assect,
& Side-bar
*/
//2-side-nav-e

//3-modal-s
/*
Written in,
Modal-Assect,
& Modal.
*/
//3-modal-e

//4-programize-task-s
//23-s
//23-e
//24-s
//24-e

//25-s
//factord of num

function $factorNums() {
  let $factorNum = parseInt(prompt("Enter ur Number:"));
  for (let i = 1; i <= $factorNum; i++) {
    if (!($factorNum % i != 0)) {
      console.log(i);
    }
  }
}
$factorNums();
//25-e

//26-s
//sum of num via recursion.

function $rSum() {
  var num = Number(prompt(`Sum of:`));
  var sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return ` ur answer is ${sum}`;
}
var $result = $rSum();
alert($result);
//26-e

//27-s
//random num game

function $randomNum() {
  const $rNum = Math.floor(Math.random() * 11);
  let $count = 0;
  while (true) {
    let $userNum = parseInt(prompt("Guess ur number;"));
    $count += 1;
    if ($userNum == $rNum) {
      console.log("Congarts,");
      console.log(`Guess:${$count}\nCorrect answer:${$userNum}`);
      break;
    }
  }
  if ($count <= 5) {
    console.log("GG");
  } else {
    console.log("How many!,\nU R NOOB!!!");
  }
}
$randomNum();
//27-e
//28-s
//28-e
//29-s
//29-e
//30-s
//30-e
//31-s
//31-e
//32-s
//32-e
//33-s
//33-e
//4-programize-task-e

//5-timer-s
//5-timer-e

//Written-by-illia.amini
//Mind-of-king-,-Heart-of-warrior   
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
//2-side-nav-e

//3-modal-s
//3-modal-e

//4-programize-task-s
//4-programize-task-e

//5-timer-s
//5-timer-e

//Written-by-illia.amini
//Mind-of-king-,-Heart-of-warrior   
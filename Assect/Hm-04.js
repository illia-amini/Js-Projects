//Hm-04;

//instrouction-below:
//camelCase-written;

/*
.1-write max() & min() & sum() codes by using arguments.(optional))
.2-5 ex of if, 5 ex of switch.(required)
.3-Read textbooks,until page 29.(optional)
.4-Code with mosh opeartion videos.(optional)
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

//Written-by-illia.amini
//Mind-of-king-,-Heart-of-warrior   
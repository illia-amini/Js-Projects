//Hm-03;

//instrouction-below:
//camelCase-written;

/*
.1-Solve,untill 23 ex of programiz js section.(required)
.2-Read textbooks,until page.(optional)
.3-Code with mosh function videos.(optional)
.4-For in & for of loop,self study on w3shools.(required)
.5-Rewrite,first season of web3 course in for moduel.(required)
*/

//1-programiz-s

//13-prime-number
const number = parseInt(prompt("Enter a positive number: "));
      let isPrime = true;
      if (number === 1) {// check if number is equal to 1.
        alert("1 is neither prime nor composite number.");
      }
   
      else if (number > 1) {   // check if number is greater than 1.
        for (let i = 2; i <= number / 2;i++) {// looping through 2 to number/2.
          if (number % i == 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          alert(`${number} is a prime number`);
        } else {
          alert(`${number} is a not prime number`);
        }
      }
      else {
        alert("The number is not a prime number.");// check if number is less than 1.
      }
//end

//14-prime-number-nesting-loop-module
//end

//15-factorial
var factorialNum=parseInt(prompt('Enter a positive number: '));//recive a num from user.
var factorial=1;
if (factorialNum === 1){//first condition will check.
  alert('The Factorial of 1 is Zero.\n1!=0.');//alert factorial of 1 is 0.
}else if(factorialNum > 1){//seconde condition.*importnat.
  for(let i=1;i<=factorialNum;i++){//i begin from 1 to user number.
    factorial*=1;//eachtime factorial = factorial * i.
  }
  alert(`The factorial of ur number is;${factorialNum}!=${factorial}`);//reurns the code in bactik template.
}else{//third condition
  alert('Invalid Number,Plz Enter a postive number!!!');//Error will precent if user enter any invalid number. 
}
 //end
 
//16-mult-table
//1-up-to-10
var $userMultnum = Number(prompt("Enter a poitive number:"));//recive a num from user.
if ($userMultnum >= 1) {
  var i = 0;//define i for loop.
  while (i <= 10) {
    var $mulResult = $userMultnum * i;//operation define
    console.log(`${$userMultnum} * ${i} = ${$mulResult}`);//in console section the mul table is define.
    i += 1;//i++.
  }
} else {
  confirm("invalid number!!!");//confirm invalid number.
}
var $userMultNum = Number(prompt("Enter a poitive number:"));//recive a num from user.
var $mulRangeNum = parseInt(prompt("Enter ur Range:"));//define the range based on user taste.
if ($userMultNum >= 1 && $mulRangeNum >= 1) {
  var i = 0;//define 0.
  while (i <= $mulRangeNum) {
    var $mulResult = $userMultNum * i;//operation is defined here.
    console.log(`${$userMultNum} * ${i} = ${$mulResult}`);//in console section operation is defined.
    i += 1;//i++.
  }
} else {
  confirm("invalid number!!!");//confirm invalid number.
}
//end

//17-fibonacci
var $userFiboNum = parseInt(prompt("Enter ur range:"));//recive a range from user.
var $n1 = 0;$n2 = 0;$n3 = null;//define the intial value for each var.
alert($n1);alert($n2);//alert the initial value of $n1 & $n2.
$n3 = $n1 + $n2;//next var,$n3 is valuing.
while ($n3 <= $userFiboNum){
  $n1 = $n2;$n2 = $n3;$n3 = $n1 + $n2;//temp methode apply here.
}
//end

//18-armstrong-number
//end

//19-armstrong-number-nesting-loop
//end

//20-calculator
//end

//21-sum-of-natural-nums
//end

//22-same-last-digit
//end

//1-programiz-e

//2-textbooks-ex-s
//2-textbooks-ex-e

//3-code-wirh-mosh-s
//3-code-wirh-mosh-e

//4-forin-&-forof-ex-s
//4-forin-&-forof-ex-e

//5-rewirte-in-for-s
//5-rewirte-in-for-e

//written-by-illia.amini
//mind-of-king-,-hear-of-warrior
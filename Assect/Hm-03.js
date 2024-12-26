//Hm-03;

//instrouction-below:
//camelCase-written;

/*
.1-Solve,untill 23 ex of programiz js section.(required)
.2-Read textbooks,until page.(optional)
.3-Code with mosh function videos.(optional)
.4-For in & for of loop,self study on w3shools.(required)
.5-Rewrite,first season of web3 course in for moduel.(required)
.6-Define Cmax() func.(required)
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
// program to generate fibonacci series up to n terms

// take input from the user
var $number = parseInt(prompt('Enter the number of terms: '));//recive a range from user.
let n1 = 0, n2 = 1, nextTerm;//var defines.
console.log('Fibonacci Series:');//returns fibonacci series.
for (let i = 1; i <= $number; i++) {
    console.log(n1);//returns new value of n1.
    nextTerm = n1 + n2;//operation 1.
    n1 = n2;//operation 3.
    n2 = nextTerm;//operation 3.
}
//end

//18-armstrong-number
//end

//19-armstrong-number-nesting-loop
//end

//20-calculator
/*
the code,
has written,
in password section,
math methode.
*/
//end

//21-sum-of-natural-nums
var $userNumSum = Number(prompt("Enter ur number;")); //recive a num from user.
var $sum = 0;
i = 0; //define var sum & i.
while (i <= $userNumSum) {
  $sum += i;//operation define.
  i++; //i++.
}
alert(`The Sum of ur num is:\n${$sum}`); //returns the value of sum.
//end

//22-same-last-digit
var $firstNum = parseInt(prompt('Enter ur num1:'));var $secondNum = Number(prompt('Enter ur num2:'));var $thirdNum = parseInt(prompt('Enter ur num3:'));//recive 3 var from user.
var $firstResult = $firstNum % 10;var $secondResult = $secondNum % 10;var $thirdResult = $thirdNum % 10;//define the last digit.
if($firstResult === $secondResult && $firstResult === $secondResult && $secondResult === $thirdResult){
  alert(`The numbers of ${$firstNum} & ${$secondNum} & ${$thirdNum} has same last digit.`);//returns has same digits.
}else{
  alert(`The numbers of ${$firstNum} & ${$secondNum} & ${$thirdNum} has not same last digit.`);//returns has not same digits.
}

//end

//1-programiz-e

//2-textbooks-ex-s

//01-fibonacci
//via-func
var $number = parseInt(prompt("Enter the number of terms: ")); //recive a range from user.
function $fibo() {
  let n1 = 0,
    n2 = 1,
    nextTerm; //var defines.
  console.log("Fibonacci Series:"); //returns fibonacci series.
  for (let i = 1; i <= $number; i++) {
    console.log(n1); //returns new value of n1.
    nextTerm = n1 + n2; //operation 1.
    n1 = n2; //operation 3.
    n2 = nextTerm; //operation 3.
  }
}
$fibo();
//end

//02-factorial
//via-func
//end

//2-textbooks-ex-e

//3-code-wirh-mosh-s
//3-code-wirh-mosh-e

//4-forin-&-forof-ex-s
//4-forin-&-forof-ex-e

//5-rewirte-in-for-s
//5-rewirte-in-for-e

//written-by-illia.amini
//mind-of-king-,-hear-of-warrior
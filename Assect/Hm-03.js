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
      if (number === 1) {// check if number is equal to 1
        alert("1 is neither prime nor composite number.");
      }
   
      else if (number > 1) {   // check if number is greater than 1
        for (let i = 2; i <= number / 2;i++) {// looping through 2 to number/2
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
        alert("The number is not a prime number.");// check if number is less than 1
      }
//end

//14-prime-number-nesting-loop-module
//end

//15-factorial
//end
var factorialNum=parseInt(prompt('Enter a positive number: '));
var factorial=1;
if (factorialNum === 1){
  alert('The Factorial of 1 is Zero.\n1!=0.');
}else if(factorialNum > 1){
  for(let i=1;i<=factorialNum;i--){
    var newFactorial =factorialNum*i;
    alert(newFactorial);
  }
}else{
  alert('Invalid Num');
}
//16-mult-table
//end

//17-fibonacci
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
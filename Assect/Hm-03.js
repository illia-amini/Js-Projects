//Hm-03;

//instrouction-below:
//camelCase-written;

/*
.1-Solve,untill 23 ex of programiz js section.
.2-Read textbooks,until page.
.3-Code with mosh loop & function videos.
.4-For in & for of loop,self study on w3shools.
.5-Rewrite,first season of web3 course in for moduel.
*/

//1-programiz-s

//13-prime-number
const number = parseInt(prompt("Enter a positive number: "));
      let isPrime = true;
      if (number === 1) {// check if number is equal to 1
        alert("1 is neither prime nor composite number.");
      }
   
      else if (number > 1) {   // check if number is greater than 1
        for (let i = 2; i <= number / 2; i++) {// looping through 2 to number/2
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

//14
//end

//15
//end

//16
//end

//17
//end

//18
//end

//19
//end

//20
//end

//21
//end

//22
//end

//23
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
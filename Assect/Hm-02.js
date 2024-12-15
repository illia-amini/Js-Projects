//Hm-02;

//instrouction-below:
//Camelcase-written;

/*
.1-solve,first 12 ex of programiz js section.
.2-5 ex of if, 5 ex of switch
.3-read textbooks,until page
.4-code with mosh conditional structer videos
*/

//1-s-programiz

//1- Hello-world
alert('Hello World');//obey alert() func
console.log('Hello World');//obey .log() func
//2- Sum-num
var $userSumNum01 = parseInt(prompt('Enter ur first Number:'));//recive first number from user.
var $userSumNum02 = Number(prompt('Enter ur second Number:'));//recive second number from user.
console.log('Sum:',$userSumNum01 + $userSumNum02);//returns the result normal template.
alert(`the sum of ${$userSumNum01} and ${$userSumNum02} is;${$userSumNum01 + $userSumNum02}`);//returns as backtick template.
//3- Squre-root
//First.methode
var $userSqrtNum01 = parseInt(prompt('Enter ur Number:'));//recive a num from user.
console.log('The sqrt of ur number is:',' ',($userSqrtNum01**0.5));//returns the result in normal template.
alert(`the squre root of ${$userSqrtNum01} is:\n${$userSqrtNum01**0.5}`);//returns the result in backtik template.
//Seconde.methode
var $userSqrtNum02 = Number(prompt('Enter ur Number;'));//recive a num from user.
var $sqrtNum =(Math.sqrt($userSqrtNum02));//To Calclute,sqrt of user num.
console.log('The sqrt of ur number is:',' ',$sqrtNum);//returns the result in normal template.
alert(`the squre root of ${$userSqrtNum02} is:\n${$userSqrtNum02**0.5}`);//returns the result in backtik template.
//4- Area-of-triangle
var $userHeightanum = parseInt(prompt('Enter ur Height:'));//recive height length.
var $userBasenum = parseInt(prompt('Enter ur Base:'));//recive base length.
console.log('The Area of ur tringle is:',($userBasenum * $userHeightanum)/2);//returns the result in normal template.
alert(`The Area of ur triangle with height of ${$userHeightanum} and base of ${$userBasenum} is:\n${($userBasenum * $userHeightanum)/2}`);//returns the result in backtik template.
//5- Temp
var $userTempText01 = prompt('Enter ur First text:');//recive first str of user.
var $userTempText02 = prompt('Enter ur Second text:');//recive second str of user.
var $temp = null;//define a temp.
$temp =$userTempText01; $userTempText01 = $userTempText02 ; $userTempText02 = $temp;//convert operations.
console.log('ur first text now:',$userTempText01,'***','ur Seconde tex now:',$userTempText02);//returns the result in normal template.
alert(`New texts are ready,\nur first text is: ${$userTempText01}\nurseconde text is: ${$userTempText02}`);//returns the result in backtik template.
//6- Quadratic-equation

//7- Km-to-m
var $userKmNum = parseInt(prompt("Enter ur number:")); //recive a num from user.
var $kmToMeter = $userKmNum * 10 ** 3; //convert km to meter.
console.log("To Meter:", $kmToMeter, "m"); //returns the result in normal template.
alert(`ur km length (${$userKmNum}), to Meter is: ${$kmToMeter} m`); //returns the result in backtik template.
//8- Calsius-to-Fahrenheit
var $userCalNum = parseInt(prompt('Enter ur number:'));//recive a num from user.
//9- Randome-num

//10- +,-,0
var $userNum = parseInt(prompt('Enter ur number:'));//recive a num from user.
//11- Odd-even
var $userKmNum = parseInt(prompt('Enter ur number:'));//recive a num from user.
//12- Max,Min-num
var $userKmNum = parseInt(prompt('Enter ur number:'));//
//1-e-programiz

//2-s-if-switch
//2-e-if-switch
//3-s-textbooks-ex
//3-e-textbooks-ex
//4-s-code-with-mosh-ex
//4-e-code-with-mosh-ex
//written-by-illia.amini
//mind-of-king-,-hear-of-warrior
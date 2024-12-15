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
//end

//2- Sum-num
var $userSumNum01 = parseInt(prompt('Enter ur first Number:'));//recive first number from user.
var $userSumNum02 = Number(prompt('Enter ur second Number:'));//recive second number from user.
console.log('Sum:',$userSumNum01 + $userSumNum02);//returns the result normal template.
alert(`the sum of ${$userSumNum01} and ${$userSumNum02} is;${$userSumNum01 + $userSumNum02}`);//returns as backtick template.
//end

//3- Squre-root
//First.methode
var $userSqrtNum01 = parseInt(prompt('Enter ur Number:'));//recive a num from user.
console.log('The sqrt of ur number is:',' ',($userSqrtNum01**0.5));//returns the result in normal template.
alert(`the squre root of ${$userSqrtNum01} is:\n${$userSqrtNum01**0.5}`);//returns the result in backtik template.
//end

//Seconde.methode
var $userSqrtNum02 = Number(prompt('Enter ur Number;'));//recive a num from user.
var $sqrtNum =(Math.sqrt($userSqrtNum02));//To Calclute,sqrt of user num.
console.log('The sqrt of ur number is:',' ',$sqrtNum);//returns the result in normal template.
alert(`the squre root of ${$userSqrtNum02} is:\n${$userSqrtNum02**0.5}`);//returns the result in backtik template.
//end

//4- Area-of-triangle
var $userHeightanum = parseInt(prompt('Enter ur Height:'));//recive height length.
var $userBasenum = parseInt(prompt('Enter ur Base:'));//recive base length.
console.log('The Area of ur tringle is:',($userBasenum * $userHeightanum)/2);//returns the result in normal template.
alert(`The Area of ur triangle with height of ${$userHeightanum} and base of ${$userBasenum} is:\n${($userBasenum * $userHeightanum)/2}`);//returns the result in backtik template.
//end

//5- Temp
var $userTempText01 = prompt('Enter ur First text:');//recive first str of user.
var $userTempText02 = prompt('Enter ur Second text:');//recive second str of user.
var $temp = null;//define a temp.
$temp =$userTempText01; $userTempText01 = $userTempText02 ; $userTempText02 = $temp;//convert operations.
console.log('ur first text now:',$userTempText01,'***','ur Seconde tex now:',$userTempText02);//returns the result in normal template.
alert(`New texts are ready,\nur first text is: ${$userTempText01}\nurseconde text is: ${$userTempText02}`);//returns the result in backtik template.
//end

//6- Quadratic-equation
//end

//7- Km-to-m
var $userKmNum = parseInt(prompt("Enter ur length in km:")); //recive a num from user.
var $kmToMeter = $userKmNum * 10 ** 3; //convert km to meter.
console.log("To Meter:", $kmToMeter, "m"); //returns the result in normal template.
alert(`ur km length (${$userKmNum}), to Meter is: ${$kmToMeter} m`); //returns the result in backtik template.
//end

//8- Calsius-to-Fahrenheit
var $userCelsiusNum = Number(prompt('Enter ur temp in calcius:'));//recive a num from user.
console.log('To Fahrenheit:',($userCelsiusNum * 1.8)+32,'f');//returns the result in normal template.
alert(`ur celsisus (${$userCelsiusNum}), to fahrenheit is: ${($userCelsiusNum * 1.8)+32}f`);//returns the result in backtik template.
//end

//9- Random-num
var $randomNum =Math.floor((Math.random()*100) + 1);//returns a random num between 0 to 100.
/*
Math.floor() in order to round numbers to down,also u can write ceil to round to upper one.
Math.random() will find random num with float parts in all number you can limit this func,
with mark  *number it will find number randome number untill mentioned number,but the mentioned number is not included,
do not forget, and write hole in a ()
for includong the number u have got two option either, wirte a number greater then ur wanted num,or
write +1 at the out of the()
*/
console.log('Reset to recive a new number;',$randomNum);//returns the result in normal template.
alert(`Reset to recive a new number between 0 to 100 always;\n${$randomNum}`);//returns the result in backtik template.
//end

//10- +,-,0
var $userNum = Number(prompt('Enter ur number:'));//recive a num from user.
console.log();//returns the result in normal template.
alert(``);//returns the result in backtik template.
//end

//11- Odd-even
var $userKmNum = parseInt(prompt('Enter ur number:'));//recive a num from user.
console.log();//returns the result in normal template.
alert(``);//returns the result in backtik template.
//end

//12- Max,Min-num
//1-Max
//First-methode
var $userMaxNum01 = Number(prompt('Enter ur First number:'));//recive first num of user.
var $userMaxNum02 = parseInt(prompt('Enter ur Second number:'));//recive scond num of user.
var $userMaxNum03 = Number(prompt('Enter ur Third number:'));//recive third num of user.
var $largestNum = null;

console.log();//returns the result in normal template.
alert(``);//returns the result in backtik template.

//Second-methode
var $userMaxNum04 = Number(prompt('Enter ur First number:'));//recive first num of user.
var $userMaxNum05 = parseInt(prompt('Enter ur Second number:'));//recive scond num of user.
var $userMaxNum06 = Number(prompt('Enter ur Third number:'));//recive third num of user.
var $largestNum02 = Math.max($userMaxNum04,$userMaxNum05,$userMaxNum06);//find max in user numbers
console.log('The largest number among ur numbers is:',$largestNum02);//returns the result in normal template.
alert(`Hmm,The largest Number is;\n${$largestNum02}`);//returns the result in backtik template.

//2-Min
//First-methode
var $userMinNum01 = parseInt(prompt('Enter ur First number:'));//recive first num of user.
var $userMinNum02 = Number(prompt('Enter ur Second number:'));//recive seconde num of user.
var $userMinNum03 = parseInt(prompt('Enter ur Third number:'));//recive third num of user.
var $weakesttNum = null;

console.log();//returns the result in normal template.
alert(``);//returns the result in backtik template.

//Second-methode
var $userMinNum04 = parseInt(prompt('Enter ur First number:'));//recive first num of user.
var $userMinNum05 = Number(prompt('Enter ur Second number:'));//recive seconde num of user.
var $userMinNum06 = parseInt(prompt('Enter ur Third number:'));//recive third num of user.
console.log('The weakest number among ur numbers is:',Math.min($userMinNum04,$userMinNum05,$userMinNum06));//returns the result in normal template.
alert(`Hmm,The weakest number is;\n${Math.min($userMinNum04,$userMinNum05,$userMinNum06)}`);//returns the result in backtik template.
//end

//1-e-programiz

//2-s-if-switch
//2-e-if-switch

//3-s-textbooks-ex
//3-e-textbooks-ex

//4-s-code-with-mosh-ex
//4-e-code-with-mosh-ex

//written-by-illia.amini
//mind-of-king-,-hear-of-warrior
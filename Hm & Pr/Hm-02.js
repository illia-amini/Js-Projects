//Hm-02;

//instrouction-below:
//camelCase-written;

/*
.1-Solve,first 12 ex of programiz js section.(required)
.2-5 ex of if, 5 ex of switch.(required)
.3-Read textbooks,until page 29.(optional)
.4-Code with mosh opeartion videos.(optional)
.5-Write all math opperation with graphical module.moreover,recive nums from user.(required)
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
// program to solve quadratic equation
let root1, root2;

// take input from the user
let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");

// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// condition for real and equal roots
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// if roots are not real
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}
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
var $userIdNum = Number(prompt('Enter ur number:'));//recive a num from user.
if ($userIdNum < 0){
    console.log(`Ur number,${$userIdNum}\nis less than zero.`);//returns the result in backtik template.
}else if(!($userIdNum != 0)){
    console.log(`Ur number,${$userIdNum}\nis zero.`);//returns the result in backtik template.
}else if($userIdNum > 0){
    console.log(`Ur number,${$userIdNum}\nis greater than zero.`);//returns the result in backtik template.
}else{
    console.log('invalid number,');
}
//end

//11- Odd-even
var $userTypeNum = parseInt(prompt("Enter ur number:")); //recive a num from user.
var $userNumStatus = ($userTypeNum % 2 != 0) ? 'odd': 'even';
console.log($userNumStatus); //returns the result in normal template.
//end

//12- Max,Min-num
//1-Max
//First-methode
var $userMaxNum01 = Number(prompt("Enter ur First number:")); //recive first num of user.
var $userMaxNum02 = parseInt(prompt("Enter ur Second number:")); //recive scond num of user.
var $userMaxNum03 = Number(prompt("Enter ur Third number:")); //recive third num of user.
var $largesttNum = $userMaxNum01;
if ($largesttNum <= $userMaxNum02) {//first conditionl is checkead.
    $largesttNum = $userMaxNum02;
    }
if ($largesttNum <= $userMaxNum03) {//seconde conditionl is checkead.
    $largesttNum = $userMaxNum03;
    }
    console.log(`The max number is: ${$largesttNum}`);//returns the result in normal template.
//end

//Second-methode
var $userMaxNum04 = Number(prompt('Enter ur First number:'));//recive first num of user.
var $userMaxNum05 = parseInt(prompt('Enter ur Second number:'));//recive scond num of user.
var $userMaxNum06 = Number(prompt('Enter ur Third number:'));//recive third num of user.
var $largestNum02 = Math.max($userMaxNum04,$userMaxNum05,$userMaxNum06);//find max in user numbers
console.log('The largest number among ur numbers is:',$largestNum02);//returns the result in normal template.
alert(`Hmm,The largest Number is;\n${$largestNum02}`);//returns the result in backtik template.
//end

//2-Min
//First-methode
var $userMinNum01 = parseInt(prompt('Enter ur First number:'));//recive first num of user.
var $userMinNum02 = Number(prompt('Enter ur Second number:'));//recive seconde num of user.
var $userMinNum03 = parseInt(prompt('Enter ur Third number:'));//recive third num of user.
var $weakesttNum = $userMinNum01;
if($weakesttNum >= $userMinNum02){//first conditionl is checkead.
$weakesttNum = $userMinNum02;
}if($weakesttNum >= $userMinNum03){//seconde conditionl is checkead.
$weakesttNum = $userMinNum03;
}
console.log(`The min number is: ${$weakesttNum}`);//returns the result in normal template.
//end

//Second-methode
var $userMinNum04 = parseInt(prompt('Enter ur First number:'));//recive first num of user.
var $userMinNum05 = Number(prompt('Enter ur Second number:'));//recive second num of user.
var $userMinNum06 = parseInt(prompt('Enter ur Third number:'));//recive third num of user.
console.log('The weakest number among ur numbers is:',Math.min($userMinNum04,$userMinNum05,$userMinNum06));//returns the result in normal template.
alert(`Hmm,The weakest number is;\n${Math.min($userMinNum04,$userMinNum05,$userMinNum06)}`);//returns the result in backtik template.
//end

//1-e-programiz

//2-s-if-switch

//01
//Area or perimeter of rectangle 
//if
var $userWidthNum = Number(prompt('Enter ur Width:'));//recieve width.
var $userLengthNum =parseInt(prompt('Enter ur length:'));//recieve length. 
var $rectangelStatus = parseInt(prompt('1-Area or 2-Perimeter'));//user choose here.
if($rectangelStatus == 1){
    alert(`The area of ur rectangel is;\n${$userWidthNum} * ${$userLengthNum} = ${$userWidthNum *$userLengthNum}`);//returns the are of rectangel.
}else if($rectangelStatus == 2){
  alert(`The perimeter of ur rectangel is;\n(${$userWidthNum} * ${$userWidthNum})/2 = ${($userWidthNum * $userLengthNum)/2}`);//returns the peremeit of rectangele.
}else{
  console.log('Plz,enter 1 or 2');//if user input is something diffrent.
};

//swtich
var $rectangelStatus = parseInt(prompt('1-Area or 2-Perimeter'));//user choose here.
switch ($rectangelStatus){
  case 1:{
    var $userWidthNum = Number(prompt('Enter ur Width:'));//recieve width.
    var $userLengthNum =parseInt(prompt('Enter ur length:'));//recieve length. 
    alert(`The area of ur rectangel is;\n${$userWidthNum} * ${$userLengthNum} = ${$userWidthNum *$userLengthNum}`);//returns the are of rectangel.
    break;
  }case 2:{
    var $userWidthNum = Number(prompt('Enter ur Width:'));//recieve width.
    var $userLengthNum =parseInt(prompt('Enter ur length:'));//recieve length. 
    alert(`The perimeter of ur rectangel is;\n(${$userWidthNum} * ${$userWidthNum})/2 = ${($userWidthNum * $userLengthNum)/2}`);//returns the peremeit of rectangele.
    break;
  }default:
    console.log('Plz choose either area of pereimeter')
  }
//end

//02
//Username & password
var $userName = prompt("Enter ur Username;");//recive a userrname from user.
var $userPass = parseInt(prompt("Enter ur Password;"));//recive a password from user.
if ($userName == "Illia_Amini" && $userPass == 2002) {//check if.
    console.log(":)");
    alert(`Welcome to ur account,${$userName}`);//correct user and pass.
} else {
    console.log("Wrong Username or Password");//wrong user and pass.
    alert("Try one more time!,");
    }
//end

//03
//leap year & century year
var $userYear = Number(prompt("Enter ur year:"));//recive a year num from user.
if ($userYear % 400 == 0 && $userYear % 100 == 0) {//check if the year is century year and leap year at the same time.
    alert(`${$userYear},is a leap year`);
} else if ($userYear % 4 == 0 && $userYear % 100 != 0) {//check if the year is a leap year
    alert(`${$userYear},is a leap year`);
} else {
    console.log(`${$userYear},is not a leap year`);//check if its not a leap yeaar.
    }
//end

//04
//Math op
//if

var $userNum01 = Number(prompt("Enter ur first number:")); //recive first num of user.
var $userNum02 = parseInt(prompt("Enter ur second number:")); //recive seconde num of user.
var $userOp = prompt("Enter operation sign:");//opeartion is selected by user.
if ($userOp == "+") {//first condition.
  console.log(
    `${$userNum01} + ${$userNum02} = ${$userNum01 + $userNum02} `
  ); //returns the result in backtik template.
} else if ($userOp == "-") {//seconde condition.
  console.log(
    `${$userNum01} - ${$userNum02} = ${$userNum01 - $userNum02} `
  ); //returns the result in backtik template.
} else if ($userOp == "*") {//third condition.
  console.log(
    `${$userNum01} * ${$userNum02} = ${$userNum01 * $userNum02} `
  ); //returns the result in backtik template.
} else if ($userOp == "/") {//fourth condition
  console.log(
    `${$userNum01} / ${$userNum02} = ${$userNum01 / $userNum02} `
  ); //returns the result in backtik template.
} else if ($userOp == "**") {//fifth condition
  console.log(
    `${$userNum01} ** ${$userNum02} = ${$userNum01 ** $userNum02} `
  ); //returns the result in backtik template.
}else if($userOp == "%"){//sixth condition
    console.log(`${$userNum01} % ${$userNum02} = ${$userNum01 % $userNum02} `)
}else {
  console.log("invalid operation");
}

//switch
var $userNum01 = Number(prompt("Enter ur first number:")); //recive first num of user.
var $userNum02 = parseInt(prompt("Enter ur second number:")); //recive seconde num of user.
var $userOp = prompt("Enter operation sign:");//opeartion is selected by user.
switch($userOp){
  case '+':{
    alert(
    `${$userNum01} + ${$userNum02} = ${$userNum01 + $userNum02} `);
    break;
  }case '-':{
    alert(
      `${$userNum01} - ${$userNum02} = ${$userNum01 - $userNum02} `);
      break;
  }case '*':{
    alert(
      `${$userNum01} * ${$userNum02} = ${$userNum01 * $userNum02} `);
      break;
  }case '/':{
    alert(
      `${$userNum01} / ${$userNum02} = ${$userNum01 / $userNum02} `);
      break;
  }case '**':{
    alert(
      `${$userNum01} ** ${$userNum02} = ${$userNum01 ** $userNum02} `);
      break;
  }case '%':{
    alert(
      `${$userNum01} % ${$userNum02} = ${$userNum01 % $userNum02} `);
      break;
  }default:{
    alert('invalid sign operation!!!!');
  }
}
//end

//05
//word existence
//Does not work!!!
var $userFtext = prompt('Enter ur text:');
if('A' in $userFtext || 'a' in $userFtext){
    console.log('Yes');
}else{
    console.log('No');
}
//end
//2-e-if-switch

//3-s-textbooks-ex
//1-page23
var userNum01 = Number(prompt('Enter ur first number:'));//recive first num of user.
var userNum02 = parseInt(prompt('Enter ur second number:'));//recive seconde num of user.
console.log(`${userNum01} + ${userNum02} =${userNum01 + userNum02} `);//returns the result in backtik template.
console.log(`${userNum01} - ${userNum02} =${userNum01 - userNum02} `);//returns the result in backtik template.
console.log(`${userNum01} * ${userNum02} =${userNum01 * userNum02} `);//returns the result in backtik template.
console.log(`${userNum01} / ${userNum02} =${userNum01 / userNum02} `);//returns the result in backtik template.

//2-page23
/*
in html;
<p id ='demo'></p>
in js;
var element=document.getElementById('demo');
console.log(elemmentinnerHtml);
element.innerText('hi');
*/
//3-page23
/*
1-\n : new line.
2-\\ :
3-\ :
4-\ :
*/

///5-page29
var userName = prompt('Enter ur name;');
var userSureName = prompt('Enter ur surename;');
var userTime = prompt('Enter the time;');
if(userTime >= 0 && userTime < 6){
    console.log(`Hi Good Midnight ${userName} ${userSureName},\nat ${userTime} oclock, u entered to ur pannel.`);
}else if (userTime >= 6 && userTime < 12 ){
    console.log(`Hi Good Morning ${userName} ${userSureName},\nat ${userTime} oclock, u entered to ur pannel.`);
}else if (userTime >= 12 && userTime < 16){
    console.log(`Hi Good Noon ${userName} ${userSureName},\nat ${userTime} oclock, u entered to ur pannel.`);
}else if (userTime >= 16 && userTime < 20){
    console.log(`Hi Good Afternoon ${userName} ${userSureName},\nat ${userTime} oclock, u entered to ur pannel.`);
}else if (userTime >= 20 && userTime < 24){
    console.log(`Hi Good Night ${userName} ${userSureName},\nat ${userTime} oclock, u entered to ur pannel.`);
}else{
    console.log('invalid time')
}
//end
//3-e-textbooks-ex

//4-math-op-s

var userNum01 = Number(prompt('Enter ur first number:'));//recive first num of user.
var userNum02 = parseInt(prompt('Enter ur second number:'));//recive seconde num of user.
console.log(`${userNum01} + ${userNum02} =${userNum01 + userNum02} `);//returns the result in backtik template.
console.log(`${userNum01} - ${userNum02} =${userNum01 - userNum02} `);//returns the result in backtik template.
console.log(`${userNum01} * ${userNum02} =${userNum01 * userNum02} `);//returns the result in backtik template.
console.log(`${userNum01} / ${userNum02} =${userNum01 / userNum02} `);//returns the result in backtik template.
//end
//4-math-op-e

//written-by-illia.amini
//mind-of-king-,-hear-of-warrior
//Hm-04;

//instrouction-below:
//camelCase-written;

/*
.1-write a dynamic list to calc max & min age in server data.(required)
.2-Crud(create,read,update,delete) sorce in js refrences.(optional)
.3-5 ex of The function(Decloration,Experssion,Object(math),self-invoking).(required)
.4-Read all func in Array,Obj,Math,Str,Num,Date.(required)  
*/

//1-Dynamic-list-s
/*** Uncompleted  Yet ***/
//1-Daynamic-list-e

//2-Crud-s
/*** Uncompleted  Yet ***/
//2-Crud-e

//3-5-func-ex-s
//1-Decloration-func
//2-Experssion-func
//3-Object-func
//4-Self-invoking-func
//5-Arrow-func

//3-5-func-ex-e

//4-Read-all-func-s
//1-Math-Func
//1-abs()
console.log(Math.abs(-5));//return absoloute value of -5 = 5.
//2-ceil()*imp
console.log(Math.ceil(5.1));//return 6, rounde to up.
//3-floor()*imp
console.log(Math.floor(5.9));//return 5, rounde to down.
//4-round()*imp
console.log(Math.round(5.5));//return 6, rounde to nearest int.
//5-pow()
console.log(Math.pow(2,3));//return 8, 2*2*2=8.For calculate power.
//6-sqrt()
console.log(Math.sqrt(9));//return 3, 3*3=9.For calculate square root.
//7-random()*imp
console.log(Math.random());//return random number between 0-1.
//8-max()*imp
console.log(Math.max(1,2,3,4,5));//return 5, return max number.
//9-min()*imp
console.log(Math.min(1,2,3,4,5));//return 1, return min number.
//10-PI
console.log(Math.PI);//return 3.141592653589793, return PI number.
//11-E
console.log(Math.E);//return 2.718281828459045, return E number.
//12-log()
console.log(Math.log(10));//return 2.302585092994046, return log number.
//13-log10()
console.log(Math.log10(10));//return 1, return log10 number.
//14-log2()
console.log(Math.log2(10));//return 3.321928094887362, return log2 number.
//15-exp()
console.log(Math.exp(1));//return 2.718281828459045, return E^number.
//16-sin()
console.log(Math.sin(1));//return 0.8414709848078965, return sin number.
//17-cos()
console.log(Math.cos(1));//return 0.5403023058681398, return cos number.
//18-tan()
console.log(Math.tan(1));//return 1.5574077246549023, return tan number.
//19-atan()
console.log(Math.atan(1));//return 0.7853981633974483, return atan number.
//20-atan2()
console.log(Math.atan2(1,1));//return 0.7853981633974483, return atan2 number.
//21-found()
//returns the nearest 32-bit single precision float representation of a number.
//22-sign()*imp
console.log(Math.sign(-5));//return -1, return sign number.
//23-trunc()*imp
console.log(Math.trunc(5.5));//return 5, return int part of decimal number.
//24-cbrt()
console.log(Math.cbrt(8));//return 2, return cubic root of number.
//25-hypot()
console.log(Math.hypot(3,4));//return 5, return hypotenuse of right triangle.

//2-Date-Func
//1-Date()
let date=new Date();
console.log(date);//return current date and time.
//2-getFullYear()
//let date=new Date(); every time we need to declare date.
console.log(date.getFullYear());//return current year.
//3-getMonth()
//let date=new Date(); every time we need to declare date.
console.log(date.getMonth());//return current month.
//4-getDate()
//let date=new Date(); every time we need to declare date.
console.log(date.getDate());//return current date.
//5-getDay()
//let date=new Date(); every time we need to declare date.
console.log(date.getDay());//return current day.
//6-getHours()
//let date=new Date(); every time we need to declare date.
console.log(date.getHours());//return current hours.
//7-getMinutes()
//let date=new Date(); every time we need to declare date.
console.log(date.getMinutes());//return current minutes.
//8-getSeconds()
//let date=new Date(); every time we need to declare date.
console.log(date.getSeconds());//return current seconds.
//9-getMilliseconds()
//let date=new Date(); every time we need to declare date.
console.log(date.getMilliseconds());//return current milliseconds.
//10-toDateString()
//let date=new Date(); every time we need to declare date.
console.log(date.toDateString());//return date in string format.
//11-toTimeString()
//let date=new Date(); every time we need to declare date.
console.log(date.toTimeString());//return time in string format.
//12-setDate()
//let date=new Date(); every time we need to declare date.
date.setDate(5);//set date to 5.
console.log(date);//return date with 5.
//13-setFullYear()
//let date=new Date(); every time we need to declare date.
date.setFullYear(2020);//set year to 2020.
console.log(date);//return date with 2020.
//14-setMonth()
//let date=new Date(); every time we need to declare date.
date.setMonth(5);//set month to 5.
console.log(date);//return date with 5.
//15-setHours()
//let date=new Date(); every time we need to declare date.
date.setHours(5);//set hours to 5.
console.log(date);//return date with 5.
//16-setMinutes()
//let date=new Date(); every time we need to declare date.
date.setMinutes(5);//set minutes to 5.
console.log(date);//return date with 5.
//17-setSeconds()
//let date=new Date(); every time we need to declare date.
date.setSeconds(5);//set seconds to 5.
console.log(date);//return date with 5.
//18-setMilliseconds()
//let date=new Date(); every time we need to declare date.
date.setMilliseconds(5);//set milliseconds to 5.
console.log(date);//return date with 5.
//19-toLocaleDateString()
//let date=new Date(); every time we need to declare date.
console.log(date.toLocaleDateString());//return date in local string format.
//20-toLocaleTimeString()
//let date=new Date(); every time we need to declare date.
console.log(date.toLocaleTimeString());//return time in local string format.
//21-toLocaleString()
//let date=new Date(); every time we need to declare date.
console.log(date.toLocaleString());//return date and time in local string format.

//3-Num-Func
//1-parseInt()*imp
console.log(parseInt("5"));//return 5, return int number.
//2-parseFloat()*imp
console.log(parseFloat("5.5"));//return 5.5, return float number.
//3-isNaN()*imp
console.log(isNaN("5"));//return false, return boolean.to check is number or not.
//4-isFinite()*imp
console.log(isFinite(5));//return true, return boolean.to check is finite or not.
//5-toExponential()
let num = 5.56789;
let n = num.toExponential();//return 5.56789e+0, return exponential number.in() u can add a number to show how many number u want to show.
//6-toFixed()
let num1 = 5.56789;
let n1 = num.toFixed();//return 6, return fixed number.in() u can add a num to round hom many number u want to round in decimal part.
//7-toString();
let num2 = 15;
let text = num2.toString(); //return 15 as a str
console.log(typeof text);
//8-toPrecision()
let num3 = 5.56789;
let n3 = num.toPrecision();//return the lenght of number,in () u can mark ho many numberz u want.
//9-valueOf()
let num4 = 15;
let n4 = num.valueOf();//return the  perimitive value of number.

//4-Str-Func
//1-charAt()*imp
let str = "Hello world!";
let res = str.charAt(0);//return H, return the char at the index.
//2-charCodeAt()
let str1 = "Hello world!";
let res1 = str1.charCodeAt(0);//return 72, return the ascii value of char at the index.
//3-concat()*imp
let str2 = "Hello ";
let str3 = "world!";
let res2 = str2.concat(str3);//return Hello world!, return the concatination of two str.
//4-endsWith()*imp
let str4 = "Hello world!";
let res3 = str4.endsWith("!");//return true, return boolean.
//5-fromCharCode()
let res4 = String.fromCharCode(72);//return H, return the char of ascii value.
//6-includes()*imp
let str5 = "Hello world!";
let res5 = str5.includes("world");//return true, return boolean.
//7-indexOf()*imp
let str6 = "Hello world!";
let res6 = str6.indexOf("world");//return 6, return the index of the char.
//8-lastIndexOf()*imp
let str7 = "Hello world!";
let res7 = str7.lastIndexOf("world");//return 6, return the last index of the char.
//9-length()*imp
let str8 = "Hello world!";
let res8 = str8.length;//return 12, return the length of the str.
//10-match()*imp
let str9 = "Hello world!";
let res9 = str9.match("world");//return world, return the matched str.
//11-repeat()*imp
let str10 = "Hello world!";
let res10 = str10.repeat(2);//return Hello world!Hello world!, return the repeated str.
//12-replace()*imp 
let str11 = "Hello world!";
let res11 = str11.replace("world", "earth");//return Hello earth!, return the replaced str.
//13-search()*imp
let str12 = "Hello world!";
let res12 = str12.search("world");//return 6, return the index of the char.
//14-slice()*imp
let str13 = "Hello world!";
let res13 = str13.slice(0, 5);//return 0 to 5 index value',hELLO
console.log(res13);
//15-split()*imp
let str14 = "Hello world!";
let res14 = str14.split(" ");//return Hello,world!, return the splited str.
//16-startsWith()*imp
let str15 = "Hello world!";
let res15 = str15.startsWith("Hello");//return true, return boolean.
//17-substr()*imp
let str16 = "Hello world!";
let res16 = str16.substr(6, 5);//return world, return the sub str.
//18-substring()*imp
let str17 = "Hello world!";
let res17 = str17.substring(6, 11);//return world, return the sub str.
//19-toLowerCase()*imp
let str18 = "Hello world!";
let res18 = str18.toLowerCase();//return hello world!, return the lower case str.
//20-toUpperCase()*imp
let str19 = "Hello world!";
let res19 = str19.toUpperCase();//return HELLO WORLD!, return the upper case str.
//21-trim()*imp
let str20 = " Hello world! ";
let res20 = str20.trim();//return Hello world!, return the trimmed str.
//22-valueOf()
let str21 = "Hello world!";
let res21 = str21.valueOf();//return the perimitive value of str.

//5-Array-Func

//4-Read-all-func-e

//Written-by-illia.amini
//Mind-of-king-,-Heart-of-warrior   
//Hm-01;

//instrouction-below:
//Camelcase-written;

/*
.1-write a code that add some nums to the end of index2.(required)
     array=[1,2,[45,56,43,],3,4]
.2-10 ex for each datatype.(required)
.3-console.table(), write with students ex.(required)
.4-javascript reffrence; w3schools, console methodes 5 lines code.(required)
.5-javascript reffrence; w3schools, math methodes 10 lines code.(required)
.6-javascript reffrence; w3schools, array methodes 5 lines code.(required)
.7-javascript reffrence; w3schools, string methodes 3/5 lines code.(required)
.8-upload ur project on ur github pannel.(learn-github-first)(required)
.9-code with mosh, as much as we've learned at the js class.(required)
.10-study jsbook untill page 15.(required)
.11-study cleancode book or cleancode via codewithmosh on git.ir.(optional) 
*/

//01-s,multidimensional-Array

var $array01=[1,2,[45,56,43],3,4];
$array01[2][3]='add a random num here';
console.log($array01);

//01-e,multidimensional-Array

//02-s-Datatype

//1-num
var age = 22;//int
var mathExam = 90.2;//float
var cpuTemp = 26;//int
var ceratine = 12.6;//float
var fingers = 10;//int
var bananaPrice = 75.4;//float
var days = 7;//int
var airPollution = 100.2;//float
var continents = 7;//int
var PetrolLitre; 25.6//float
//2-str
var name = 'Ali';//str
var sureName = 'Amini';//str
var fatherName= 'Reza';//str
var $email = 'illiaamini2002ir@gmail.come';//str
var $pass ='12345';//str
var dateofBirth = '26/06/2002';//str
var sex = 'Male';//str
var single = 'True';//str
var major = 'Electrical&Electronic engineering';//str
var uni = 'Lyon Univercity';//str
//3-bool
var isOdd = true ;//bool#1
var isEven = false ;//bool#0
var is$True = true //bool#1
var is$False = false ;//bool#0
var isMarried = true ;//bool#1
var isDay= false ;//bool#0
var isNight= true ;//bool#1
var isExpensive= false;//bool#0
var isCheap= true;//bool#1
var isBig= false ;//bool#0
//4-array;
//#use-[],brackets.
var $array01 =[1,3,5,7,9] ;//array#odd-num
var $array02 = [2,4,6,8,];//array#even-num
var $array03 =[2,3,5,7] ;//array#prime-num
var $array04 =['ali','reza','amini'] ;//array#str
var $array05 =['alireza','amini','22'] ;//array#str
var $array06 =['html','css','js'] ;//array#str
var $array07 =['bool','str','num','object','array'] ;//array#str
var $array08 =['true','false','0','1','ali'] ;//array#str
var $array09 =[1,2,3[4,5,6],7,8,[9,10]] ;//array#multidiemeinsion-2d
var $array10 =[1,2,3,[4,5,6,[7,8,9]],10] ;//array#multidiemeinsion-3d
//5-object;
//#use-{},curely brackets.
var _object01 = {Age:22,Firstname:'Illia',Lastname:'Amini' };//object#bio
var _object02 = {Birth:2002,Gender:'Male'};//object#bio-02
var _object03 = {Favsport:'Archery',Favsport02:'Socer',Trophy:3};//object#bio-3
var _object04 = {Edu:'Enginear',Uni:'Lyon uni',Books:0};//object#bio-04
var _object05 = {Weigth:80.5,Height:188.8,Skin:'white'};//object#bio-05
var _object06 = {Favmovie:'Nobody',Favseries:'Thlo',Timewatched:3};//object#bio-06
var _object07 = {Favfood:'Nypizza',Favfood02:'Kebab',Eatinweek:2};//object#bio-07
var _object08 = {Married:false,Programmer:true,Student:true};//object
var _object09 = [
    std1=
    {
        Name:'illia',
        Surename:'amini',
        Age:22,
        Gender:'male',
        Major:'EEE',
        Athelete:true,
        Marriead:false,
        Child:0
    }
    ,
    std2=
    {
        Name:'amir',
        Surename:'mortazavi',
        Age:29,
        Gender:'male',
        Major:'medical',
        Athelete:false,
        Marriead:true,
        Child:0
    }
    ,
    std3=
    {
        Name:'elena',
        Surename:'amiri',
        Age:56,
        Gender:'female',
        Major:'retierd',
        Athelete:false,
        Marriead:true,
        Child:3
    }
];//object#object & array-01
var _object10 = [
        myBio=
    {
        Name:'illia',
        Surename:'Amini',
        Age:22,
        Gender:'Male',
        Birth:2002,
        Occupation:'Stuudent',
        Major:'EEE',
        Athlete:true,
        Sport:'Archery',
        Married:false,
        child:0,
        Favfood:'Pizza',
    }
];//object#object & array-02

/*
:)
to-run-any-of-wrriten-codes-above\
only-write-either-consol.log();-or-consol.table();\
visit-the-result-on-consile-section\
:)
*/

//02-e-Datatype

//03-s-consol.table()

var students = [
    std1=
    {
        Name:'illia',
        Surename:'amini',
        Age:22,
        Gender:'male',
        Major:'EEE',
        Athelete:true,
        Marriead:false,
        Child:0
    }
    ,
    std2=
    {
        Name:'amir',
        Surename:'mortazavi',
        Age:29,
        Gender:'male',
        Major:'medical',
        Athelete:false,
        Marriead:true,
        Child:0
    }
    ,
    std3=
    {
        Name:'elena',
        Surename:'amiri',
        Age:56,
        Gender:'female',
        Major:'retierd',
        Athelete:false,
        Marriead:true,
        Child:3
    }
]
console.table(students);

//03-e-consol.table()

//04-s-consol.methodes

//01-clear()
/*
.The clear() method clears the console.
.The clear() method also write "Console was cleared" in the console.
*/
console.clear();
//02-error()
/*
.The error() method writes an error message to the console.
.The console is useful for testing purposes.
.red-badge
*/
//ex-01
console.error('you made a bad mistake hhh!!!');
//ex-02
const myObj01 = { firsname: "John", lastname: "Doe" };
console.error(myObj01);
//03-warn()
/*
.The warn() method writes a warning to the console.
.yellow-badge
*/
//ex-01
console.warn("This is a warning!");
//ex-02
const myObj02 = {firstname:"John", lastname:"Doe"};
console.warn(myObj02);
//04-info()
/*
The info() method writes a message to the console.
*/
//ex-01
console.info("Hello world!");
//ex-02
const myObj = {firstname:"John", lastname:"Doe"};
console.info(myObj);
//05-group() & groupCollapesd()
//01-group()
/*
The group() method starts a message group.
All new messages will be written inside this group.
*/
console.log("Hello world!");
console.group();
console.log("Hello again, this time inside a group!");
//02-groupCollapesd()
/*
The groupCollapsed() method starts a collapsed message group.
In the Console, click the expand button to open the new message group.
All new messages will now be written inside this group.
*/
console.log("Hello world!");
console.groupCollapsed();
console.log("Hello again, this time inside a collapsed group!");
//03-groupEnd()
/*
The groupEnd() ends a message group.
*/
console.log("Hello world!");
console.group();
console.log("Hello again, this time inside a group!");
console.groupEnd();
console.log("and we are back.");

//04-e-consol.methodes

//05-s-math-methodes

//01
//Math.round()
var num = null;
num = prompt('Enter any float num:');
console.log(Math.round(num));
//02
//Math.ceil()
var num = null;
num = prompt('Enter any float num:');
console.log(Math.ceil(num));
//03
//Math.floor()
var num = null;
num = prompt('Enter any float num:');
console.log(Math.floor(num));
//04
//Math.turnc()
var num = null;
num = prompt('Enter any float num:');
console.log(Math.trunc(num));
//05
//Math.sign()
var num = null;
num = prompt('Enter any num:');
console.log(Math.sign(num));
//06
//Math.min() & Math.max()
//01-Math.min()
var $minnum = null;
$minnum = Math.min(1,232332,-3,2332,4554);
console.log($minnum);
//02-Math.max()
var _maxnum = null;
_maxnum =Math.max(1,23,43353,-1,34)
console.log(_maxnum);
//07
//Math.abs()
var num = null;
num = prompt('Enter any num:');
console.log(Math.abs(num));
//08
//Math.pow()
var num1 = null;
var num2 = null;
num1 = prompt('Enter any num:');
num2 = prompt('Enter ur power:')
console.log(Math.pow(num1,num2));
//09
//Math.sqrt()
var num = null;
num = prompt('Enter any num:');
console.log(Math.sqrt(num));
//10
//Math.random()
var num = null;
num = Math.random();
console.log(num);

//05-e-math-methode

//06-s-array-methodes

//01
//.length & .at()
//01-length
var fruits = ['Banana','Apple','Orange'];
console.log(fruits.length);
//02-at
var fruits = ['Banana','Apple','Orange'];
console.log(fruits.at(2));
//02
//.toSrting()
var fruits = ['Banana','Apple','Orange'];
console.log(fruits.toString());
//03
//.join()
var fruits = ['Banana','Apple','Orange'];
console.log(fruits.join(' * '));
//04
//.pop() & .push()
//01-pop()
//it-returns-the-value-which-popped-out-either-in-console-or-alert.
//it-pop-out-from-the-last
var fruits = ['Banana','Apple','Orange'];
console.log(fruits.pop());
//02-push()
//it-returns-the-length-of-array-not-the-arguments
var fruits = ['Banana','Apple','Orange'];
console.log(fruits.push('Cocount','Kiwi'));
//05
//.shift() & .unshift()
//01-shift()
//it-returns-the-methode-removes-the-first-element-and-shift-all-other-elements-to-a-lower-index
//The shift() method returns the value that was "shifted out":
var fruits = ['Banana','Apple','Orange'];
console.log(fruits.shift());
//02-unshift()
//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
//The unshift() method returns the new array length:
var fruits = ['Banana','Apple','Orange'];
console.log(fruits.unshift('Lemon'));
//06
//delete()
//better-to-use-pop()-shift()-instead-but-index-is-either-first-or-last
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[2];

//06-e-array-methodes

//07-s-string-methodes

//01
//String charAt() & String charCodeAt()
//01-String charAt()
var text = null;
text = prompt("Enter ur name;");
alert("The First char of ur name will print at console section");
console.log(text.charAt(0));
//02-String charCodeAt()
var text = null;
text = prompt("Enter ur name;");
alert("The First char's code of ur name will print at console section");
console.log(text.charCodeAt(0));
//String at()
let $name= "illia amini";
let letter = $name.at(6);
console.log(letter);
//03
//String slice()#include substr() & substring()
//01-values>=0
var txt = null;
txt = prompt("Enter ur name:");
alert("The prime three char of ur name is marked at console section");
console.log(txt.slice(0, 3));
//02-values<0
var txt = null;
txt = prompt("Enter ur name:");
alert("The last three char of ur name except last char, is marked at console section");
console.log(txt.slice(-4,-1));
//03=simple-value
var txt = null;
txt = prompt("Enter ur name:");
alert("except first char of ur name ,the rest is marked at console section");
console.log(txt.slice(1));
//04
//String substring() & String Substr()
//01-String substring()
var str = "Apple, Banana, Kiwi";
var part = str.substring(7, 13);
//02-String substr()
//Error-404
/*
var str ='ali,reza,amini';
var slice= str.substr(4,4);
*/
//05
//toUpperCase() & toLowerCase()
//01-toUpperCase
var text = null;
text =prompt('Enter ur name;');
alert("all chars of ur name will convert to upper case at console section");
console.log(text.toUpperCase());
//02-tolowerCase()
var text = null;
text =prompt('Enter ur name;');
alert("all chars of ur name will convert to lower case at console section");
console.log(text.toLowerCase());
//06
//String.Length
var txt=null;
txt=prompt('Enter ur name:');
alert('The lenght of ur name is marked at console section');
console.log(txt.length);
//07
//String.concat()
var name01 = null;
var name02 = null;
name01 = prompt("Enter ur name;");
name02 = prompt("Enter ur surename;");
var fullName = name01.concat(" ", name02);
console.log(Fullname);
//07-e-string-methodes

//08-s-
/*
All-of-the-projects-were-published-on-my-githubpanel-visit-via-links-below.
#illia-amini
#https://github.com/illia-amini/javascr-test.git
*/

//08-e-

//09-s-code-with-mosh
/*
untill- -videos-is-watched-by-illiaamini.
*/
//ex01
//this is my first js code,code with mosh
console.log('Hello World');
//ex02
//by-default-all-of-the-primary-value-of-var-is-undefined-in-console-section-unless-u-define-any-value.
let course ='Mosh';
console.log(course);
//ex03
const firstName ='code-with'; lastName = 'Mosh'; age = 30;
console.log(firstName,' * ',lastName,' * ',age);
//ex04
let $num;
console.info(typeof($num));
//undeifiend-is-primetive-value type
//09-e-code-with-mosh

//10-s-jsbook
//the-js-book-is-read-by-illiaamini-till-page-15th.
//exercise of jsbook;

//01
var array1=[1,45,23,12,1,-5];
//index....[0,1,2,3,4,5]
console.log(array1[1]);
//returns 45
//02
var arr2D=[[7,25],[5,24],[65,23,14]];
console.log(arr2D[1][0]);
//returns-5

//10-e-jsbook

//
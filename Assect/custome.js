//Hm-01;
//instrouction-below:
//Camelcase-written;

/*
.1-ex; write a code that insert nums to the end of index2. use push() & normal way.
     array=[1,2,[45,56,43,],3,4]
.2-10 ex for each datatype.
.3-console.table(), write with students ex.
.4-study and write a code for console 5 or 6 at last. 
.5-javascript reffrence; w3schools, math section 10 code.
.6-javascript reffrence; w3schools, array section 5 code. 
.7-javascript reffrence; w3schools, string array section 3/5 code. 
.8-upload ur project on ur github pannel.
.9-code with mosh, as much as we've learned at the class.
.10-study the textbooks untill page 15.
*/

//01-s,multidimensional-Array

var Array01=[1,2,[45,56,43],3,4];
Array01[2][3]='add a random num here';
console.log(Array01);

//01-e,multidimensional-Array

//02-s-Datatype

//1-num
var Age = 22;//int
var Mathexam = 90.2;//float
var Cputemp = 26;//int
var Ceratine = 12.6;//float
var Fingers = 10;//int
var Bananaprice = 75.4;//float
var Days = 7;//int
var Airpollution = 100.2;//float
var Continents = 7;//int
var Petrollitre; 25.6//float
//2-str
var Name = 'Ali';//str
var Surename = 'Amini';//str
var Fathername= 'Reza';//str
var email = 'illiaamini2002ir@gmail.come';//str
var Pass ='12345';//str
var Dateofbirth = '26/06/2002';//str
var Sex = 'Male';//str
var Single = 'True';//str
var Major = 'Electrical&Electronic engineering';//str
var Uni = 'Lyon Univercity';//str
//3-bool
var Isodd = true ;//bool#1
var Iseven = false ;//bool#0
var Istrue = true //bool#1
var Isfalse = false ;//bool#0
var Ismarried = true ;//bool#1
var Isday= false ;//bool#0
var Isnight= true ;//bool#1
var Isexpensive= false;//bool#0
var Ischeap= true;//bool#1
var Isbig= false ;//bool#0
//4-array;
//#use-[],brackets.
var Array01 =[1,3,5,7,9] ;//array#odd-num
var Array02 = [2,4,6,8,];//array#even-num
var Array03 =[2,3,5,7] ;//array#prime-num
var Array04 =['ali','reza','amini'] ;//array#str
var Array05 =['alireza','amini','22'] ;//array#str
var Array06 =['html','css','js'] ;//array#str
var Array07 =['bool','str','num','object','array'] ;//array#str
var Array08 =['true','false','0','1','ali'] ;//array#str
var Array09 =[1,2,3[4,5,6],7,8,[9,10]] ;//array#multidiemeinsion-2d
var Array10 =[1,2,3,[4,5,6,[7,8,9]],10] ;//array#multidiemeinsion-3d
//5-object;
//#use-{},curely brackets.
var Object01 = {Age:22,Firstname:'Illia',Lastname:'Amini' };//object#bio
var Object02 = {Birth:2002,Gender:'Male'};//object#bio-02
var Object03 = {Favsport:'Archery',Favsport02:'Socer',Trophy:3};//object#bio-3
var Object04 = {Edu:'Enginear',Uni:'Lyon uni',Books:0};//object#bio-04
var Object05 = {Weigth:80.5,Height:188.8,Skin:'white'};//object#bio-05
var Object06 = {Favmovie:'Nobody',Favseries:'Thlo',Timewatched:3};//object#bio-06
var Object07 = {Favfood:'Nypizza',Favfood02:'Kebab',Eatinweek:2};//object#bio-07
var Object08 = {Married:false,Programmer:true,Student:true};//object
var Object09 = [
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
var Object10 = [
        Mybio=
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

var Students = [
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
console.table(Students);

//03-e-consol.table()

//04-s-consol

//04-e-consol

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
var Minnum = null;
Minnum = Math.min(1,232332,-3,2332,4554);
console.log(Minnum);
//02-Math.max()
var Maxnum = null;
Maxnum =Math.max(1,23,43353,-1,34)
console.log(Maxnum);
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

//06-s-array-syntax

//06-e-array-syntax

//07-s-string-methodes

//01
//String charAt() & String charCodeAt()
//01-String charAt()
var Text = null;
Text = prompt("Enter ur name;");
alert("The First char of ur name will print at console section");
console.log(Text.charAt(0));
//02-String charCodeAt()
var Text = null;
Text = prompt("Enter ur name;");
alert("The First char's code of ur name will print at console section");
console.log(Text.charCodeAt(0));
//String at()

//03
//String slice()

//04
//String substring()

//05
//toUpperCase() & toLowercase()

//06
//String.Length
var Txt=null;
Txt=prompt('Enter ur name:');
alert('The lenght of ur name is marked at console section')
console.log(Txt.length);

//07-e-string-methodes

//08-s-
/*
All-of-the-projects-were-published-on-my-githubpanel-visit-via-links-below.
#illia-amini
#https://github.com/illia-amini/javascr-test.git
*/
//08-e-

//09-s-
/*
untill- -videos-is-watched-by-illiaamini.
*/
//09-e-

//10-s-
/*
the-given-book-is-read-by-illiaamini.
*/
//10-e-

//
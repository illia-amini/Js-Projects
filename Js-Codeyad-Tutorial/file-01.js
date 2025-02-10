/*
js-syntax (;).
js defeintion.
*/
console.log('Connected...');

//<----------------------->

/*
js-Varaibles (var).
define a varaible in js
*/
var fName='Ali';var lName='Amini'
console.log(fName);
console.log(lName);
document.write(fName,lName)/* it will write  on html page */
window.alert(fName);
/* 
js-comment(/**).
it will not read by js
*/

//<----------------------->

/* 
js-datatype(num,str,obj,boolean).
all types of varaibles in js.
in js varaibles define from left to right if its str it behaves with others like str and vice versa,
*/
var number=22;//number
var name='Ali';//str
var c01=23 + 'ali';/* it will print 23 ali, js will behave like str with 23 and str + str */
var c02=45-23+'ALI'/* first it will apply math compration,then put the result next to the str */
var c02= 'ALI' + 45-23/*it will print NAn,first it reads from left to right,  */
var c02= 'ALI' + 45+23/*it will print Ali4523, js can not define yhat 45+23 is either a math comp otr str, then in order to rule sit behaves like a str to it  */
/*
what object means?
obj is,anything which has a some features it is called obj
for ex; a car, a phone and..., they have many of features which included. 
How to define in js: {}
*/
var person01={//obj
    firstName :'Ali',
    lastName:'Amini',
    age:22,
    gender:'male',
}
document.write(person01.firstName + ' ' + person01.lastName);

/* 
what boolean means?
its a varaible , that saves 0 or 1 inside itself ,either true or false,
which use with (is) , and normally use in if and swtitch.
*/
var num1=10;
var num2=10;
var isComplete;//boolean
isComplete=false
var isEqual;
isEqual=(num1==num2);//it wiil return true

//<----------------------->

/*
js-Arrays([]).
whenever we use aaray that, we want to save some var in a list,
we should use array.Arrays has index that starts from 0,
in js, array is called list.
*/

var colors=['blue','red','black']//this list has 2 indexes
console.log(colors)//it wiil return the  arr and its indexes, if u want to see specific index write its num inside of the [] like, colors[0]

//another methode to defiene an array,
var names=new Array('ali','mohamad','milad','amir');
console.log(names[0])//it will return ali, becuse its the zero undex of array.

//array can have diffrent types of var
var myArr=['ali',22,true,'Arak']
console.log(myArr);//it returns myArr completly without problem.

//<----------------------->

//Func in Array;
//1-reverse();
colors.reverse();//it will reverse the aaray index.
//2-shift();
colors.shift();// it reruns the the 0 index of array and replace it with the 1 index of array.
//3-unshift();
colors.unshift('white');//it returns the white as a 0 index of array.and push the other to further.it add from the first.
//4-pup();
colors.pup();//it will delete the the last element of array.
//5-push();
colors.push('dark');//it will add dark from the last. 
//6-slice();
var newColors=colors.slice();//copy from our array, and paste into other var,
//7-indexOf();
var result=colors.indexOf('blue',0)//whwenever u want search a data in array we use of this func, we write the data, then we mention from which number of index search for it
console.log(result)//it will return 0,which means this data is in 0 index of array
//8-join();
var oldArry=colors.join(' | ');//it wiil join all the elemnts of aaray into string,and the inside of the () u can define what shape or space u want to put between the elements.
console.log(oldArry);

//<----------------------->

//conditional statements;in js
//1-if & else:
var a,b;
var isEqual;
a=5;
b=5;
if(a==b){//== jsut check in the value,not datatype
    isEqual=true
    console.log(a+b);

}else{
    isEqual=false
    console.log(a-b);

}
console.log(isEqual)

//ex-02
var c, b;
var isEqual;
a = 5;
b = "5";
if (a === b) {// === also checks the datatype besiede the value.
    isEqual = true;
    console.log(a + b);
    } else {
        var isEqual = false;
        console.log(a - b);
      }
console.log(isEqual);

//<----------------------->

//Operation in conditon statement.
//1-Not(!=,!===)
//2-And (&);both conditon are true,it will print true
//3-Or(|);either on of them is true  it return true,

//<----------------------->

//trnimory condition(?:),its tripple condition statment
var d,e;
var isEqual;
a=50;
b=5;
a==b ? isEqual=true : isEqual=false;

//<----------------------->

//2-switch & case & break & default:
//Normally it is used for nested if & else & else if,thre is another option called switch.
var today=new Date().getDate();//this func called up to date func
var day;
console.log(today);//returns typeof as a number means date.
switch(today){
    case 0:
        day='Sunday';
        break;
    case 1:
        day='Monday';
        break;
    case 2:
        day='Thusday';
        break;
    case 3:
        day='Wedsnday';
        break;
    case 4:
        day='Thursday';
        break;
    case 5:
        day='Friday';
        break;
    case 6:
        day='Saturday';
        break;
        default://whenever u not defien a var in switch u should define this
            day='ur value is not defiened'
}

//<----------------------->

//Fuctions;
//There are orders,which we define or already defined in js ,to make the sitution to define orders,
//How to define? => function name(){ order here}
//If u hover ur mouse onto the func u see (void) => means empty,why? beacuse it applies sm and wont return value of recuuring, in ex03

//1-Named Func: function has a var name

function findBiggestFraction(){//This way of coding is not satisfiyin, in order to, u better define some arguments for the func, which u have arguments and parameters which func will put one by one parameters in arguments and apply the orders , in ex02
    console.log('The func is running!');//named func whenever will run,that u CALLLLE THE FUNC
    a>b ? console.log('a;'+a) : console.log('b:'+b);// ?=if & :=else

}
var a=3/4;//if u  write the var after the func call, it wont run beacuse js is a script lang.
var b=5/7;

findBiggestFraction();//This How u Call any Named func

//ex-02***Much more better,

function findSmallestFraction(c,d){//These ara called arguments
c<d ? console.log('c'+c) : console.log('d'+d);
}
var firstFraction=3/5;
var secondFraction=3/6;
findSmallestFraction(firstFraction,secondFraction);//thse are called parameter
findSmallestFraction(3/64,6/7);//u can value also in this way.

//ex03***much more and more better

function largestNumber(e, f) {
    e > f ? (result = ["firstNum", e]) : (result = ["secondeNum", f]);
    return result;
  }
  var newResult = largestNumber(1, 2);
  console.log(`largest number  is ${result}`)

//<----------------------->

//2-Anynoumus func: the func has no name, which it must define in a var or in the events its called anymouse func

var smallestNumber=function(a,b){// There is no name for anymouse func,it defiens inside of the var or in events,
a<b ? result=['firstnum',a] : result=['secondeNum',b];
return result;
}
console.log(smallestNumber(1,2));//in anymouse func whenever i want to call, unlike the m=named func u sould just call the naem of the varaible not the name of the func.*imp
//*imp* if u dont give any value or parameter,it will return the main func, its necssery at leats put the () at the end of the callinfg anymouse func

//<----------------------->

//3-invoke func:the func that immediatly apply as soon as u defined the func, normalluy used for specific events taht u want to use for specific time or events not in genral,(function(arguments){})(parameters)]

var theBiggestNumber=(function (c,d){
c>d ? result=['firstnumber',c]:result=['SecondeNumber',d];
return result;
})(7,5)//Parameter are wirtten here
console.log(`The largest number is ${result}`);
console.log(theBiggestNumber);//also u can return like this,

//<----------------------->

//ECMAScript;there are some edition which haapens on js to upadte and debug this progrramming languge called ECMA SCRIPT.
//First version on 1997.
//Now ES14,published on 2023 for js latest version.

//<----------------------->

//Local & Global variables;
var varaible1='Varaible1';// this is Global varaible, global varaible its not defiend in function, its easy to acces to it
 function myFunction(){
    var varaible2='Varaible2';// this Local varaible,its defiened in func,its not eaddsy to aces to it
    console.log(varaible2);//to acess to local var,
 }
 console.log(varaible1);//returns the value of varaible1,in order to its global variabkle
 console.log(varaible2);//returns not define, in order to its a local varaible 
 myFunction();//to show varaible2

//<----------------------->

//Const & let
//1-Const:whenever u defien a var , via const u cant not convert the value of const in our codes at all,
const result=2;
console.log(result);//returns 2
result=3;//it will error

//<----------------------->

//2-Let:*better then all var, beacuse its Block Scope.
//Block Scope;its block scope,what deos t mean?> it means in nested body if u use let in the case that in the rest of the code the var which defiend via let it wont affect the order of the other section, and each scope will effect seperatly but if u define via var in the case a scope effects on the varaible till the end effect will remain,
//ex01
function logScope(){
    var localVar=2;
    if(localVar==2){
        var localVar='diffrent var'
        console.log('Nested local var '+ localVar)
    }
    console.log(localVar);
}
logScope();

//<----------------------->

//ex02
function logScope() {
    let localVar = 2;
    if (localVar == 2) {
      let localVar = "diffrent var";
      console.log("local var " + localVar);//returns diffrent var
    }
    console.log('localvar:'+localVar);//returns 2
  }
  logScope(); 

//<----------------------->

//Object{};
      //ex01
      let person01 = {
        firstname: "Ali",
        lastName: "Amini",
        age: 22,
      };
      console.log(person01); //type is object
      console.log(person01.age);

      //<----------------------->

      //ex02
      //Another methode to define object, new object() => new means sample, it means u already have an object give a sample of it
      let person02 = new Object( //in this case use = instead of :
        (firstname = "Amir"),
        (lastName = "Amini"),
        (age = 23)
      );
      console.log(person02); //type is string
      console.log(person02.firstname);

      //<----------------------->

      //ex03
      let course = {
        title: "Js",
        teacher: "Ali",
        level: 1,
        isActive: true,
        view: 0,
        updateView: function () {//u can define func in objec,specificlly anymouse func or invoke
          return ++course.view; //++ = add 1 to view,whenever u called the course
        },
      };
      console.log(course.view);//view is 0
      course.updateView();//view upadted to 1
      console.log(course);//view is 1

      //<----------------------->

      //Object constructor;> means to create a func that create object with same shap but diffrent info. use this* imp

      function Course(title, teacher, level, isActive, views, upadateView) {
        //to define object constrouctor we use first word as capital, here Course for ex.
        (this.title = title),
          (this.teacher = teacher),
          (this.level = level),
          (this.isActive = isActive),
          (this.views = views),
          (this.upadateView = function () {
            return ++Course.views;
          });
      }
      var Cours1 = new Course("Js", "Ali Amini", 1, true, 0);
      var Cours2 = new Course("Pyhton", "Amir rohi", 10, false, 2);
      console.log(Cours1);
      console.log(Cours2);

    //<----------------------->

    //For loop:
    let cars=['benz','bmw','porsche','peykan','pride'];
    for(let i=0;i<=cars.length;i++){
      console.log(cars[i])
    }
    //<----------------------->

    //For of & For in:

    //<----------------------->

    //While:

     //<----------------------->
     
        

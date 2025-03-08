/*
js-syntax (;).
js defeintion.
*/
console.log("Connected...");

//<----------------------->

/*
js-Varaibles (var).
define a varaible in js
*/
var fName = "Ali";
var lName = "Amini";
console.log(fName);
console.log(lName);
document.write(fName, lName); /* it will write  on html page */
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
var number = 22; //number
var name = "Ali"; //str
var c01 =
  23 +
  "ali"; /* it will print 23 ali, js will behave like str with 23 and str + str */
var c02 =
  45 -
  23 +
  "ALI"; /* first it will apply math compration,then put the result next to the str */
var c02 =
  "ALI" + 45 - 23; /*it will print NAn,first it reads from left to right,  */
var c02 =
  "ALI" +
  45 +
  23; /*it will print Ali4523, js can not define yhat 45+23 is either a math comp otr str, then in order to rule sit behaves like a str to it  */
/*
what object means?
obj is,anything which has a some features it is called obj
for ex; a car, a phone and..., they have many of features which included. 
How to define in js: {}
*/
var person01 = {
  //obj
  firstName: "Ali",
  lastName: "Amini",
  age: 22,
  gender: "male",
};
document.write(person01.firstName + " " + person01.lastName);

/* 
what boolean means?
its a varaible , that saves 0 or 1 inside itself ,either true or false,
which use with (is) , and normally use in if and swtitch.
*/
var num1 = 10;
var num2 = 10;
var isComplete; //boolean
isComplete = false;
var isEqual;
isEqual = num1 == num2; //it wiil return true

//<----------------------->

/*
js-Arrays([]).
whenever we use aaray that, we want to save some var in a list,
we should use array.Arrays has index that starts from 0,
in js, array is called list.
*/

var colors = ["blue", "red", "black"]; //this list has 2 indexes
console.log(colors); //it wiil return the  arr and its indexes, if u want to see specific index write its num inside of the [] like, colors[0]

//another methode to defiene an array,
var names = new Array("ali", "mohamad", "milad", "amir");
console.log(names[0]); //it will return ali, becuse its the zero undex of array.

//array can have diffrent types of var
var myArr = ["ali", 22, true, "Arak"];
console.log(myArr); //it returns myArr completly without problem.

//<----------------------->

//Func in Array;
//1-reverse();
colors.reverse(); //it will reverse the aaray index.
//2-shift();
colors.shift(); // it reruns the the 0 index of array and replace it with the 1 index of array.
//3-unshift();
colors.unshift("white"); //it returns the white as a 0 index of array.and push the other to further.it add from the first.
//4-pup();
colors.pup(); //it will delete the the last element of array.
//5-push();
colors.push("dark"); //it will add dark from the last.
//6-slice();
var newColors = colors.slice(); //copy from our array, and paste into other var,
//7-indexOf();
var result = colors.indexOf("blue", 0); //whwenever u want search a data in array we use of this func, we write the data, then we mention from which number of index search for it
console.log(result); //it will return 0,which means this data is in 0 index of array
//8-join();
var oldArry = colors.join(" | "); //it wiil join all the elemnts of aaray into string,and the inside of the () u can define what shape or space u want to put between the elements.
console.log(oldArry);

//<----------------------->

//conditional statements;in js
//1-if & else:
var a, b;
var isEqual;
a = 5;
b = 5;
if (a == b) {
  //== jsut check in the value,not datatype
  isEqual = true;
  console.log(a + b);
} else {
  isEqual = false;
  console.log(a - b);
}
console.log(isEqual);

//ex-02
var c, b;
var isEqual;
a = 5;
b = "5";
if (a === b) {
  // === also checks the datatype besiede the value.
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
var d, e;
var isEqual;
a = 50;
b = 5;
a == b ? (isEqual = true) : (isEqual = false);

//<----------------------->

//2-switch & case & break & default:
//Normally it is used for nested if & else & else if,thre is another option called switch.
var today = new Date().getDate(); //this func called up to date func
var day;
console.log(today); //returns typeof as a number means date.
switch (today) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Thusday";
    break;
  case 3:
    day = "Wedsnday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default: //whenever u not defien a var in switch u should define this
    day = "ur value is not defiened";
}

//<----------------------->

//Fuctions;
//There are orders,which we define or already defined in js ,to make the sitution to define orders,
//How to define? => function name(){ order here}
//If u hover ur mouse onto the func u see (void) => means empty,why? beacuse it applies sm and wont return value of recuuring, in ex03

//1-Named Func: function has a var name

function findBiggestFraction() {
  //This way of coding is not satisfiyin, in order to, u better define some arguments for the func, which u have arguments and parameters which func will put one by one parameters in arguments and apply the orders , in ex02
  console.log("The func is running!"); //named func whenever will run,that u CALLLLE THE FUNC
  a > b ? console.log("a;" + a) : console.log("b:" + b); // ?=if & :=else
}
var a = 3 / 4; //if u  write the var after the func call, it wont run beacuse js is a script lang.
var b = 5 / 7;

findBiggestFraction(); //This How u Call any Named func

//ex-02***Much more better,

function findSmallestFraction(c, d) {
  //These ara called arguments
  c < d ? console.log("c" + c) : console.log("d" + d);
}
var firstFraction = 3 / 5;
var secondFraction = 3 / 6;
findSmallestFraction(firstFraction, secondFraction); //thse are called parameter
findSmallestFraction(3 / 64, 6 / 7); //u can value also in this way.

//ex03***much more and more better

function largestNumber(e, f) {
  e > f ? (result = ["firstNum", e]) : (result = ["secondeNum", f]);
  return result;
}
var newResult = largestNumber(1, 2);
console.log(`largest number  is ${result}`);

//<----------------------->

//2-Anynoumus func: the func has no name, which it must define in a var or in the events its called anymouse func

var smallestNumber = function (a, b) {
  // There is no name for anymouse func,it defiens inside of the var or in events,
  a < b ? (result = ["firstnum", a]) : (result = ["secondeNum", b]);
  return result;
};
console.log(smallestNumber(1, 2)); //in anymouse func whenever i want to call, unlike the m=named func u sould just call the naem of the varaible not the name of the func.*imp
//*imp* if u dont give any value or parameter,it will return the main func, its necssery at leats put the () at the end of the callinfg anymouse func

//<----------------------->

//3-invoke func:the func that immediatly apply as soon as u defined the func, normalluy used for specific events taht u want to use for specific time or events not in genral,(function(arguments){})(parameters)]

var theBiggestNumber = (function (c, d) {
  c > d ? (result = ["firstnumber", c]) : (result = ["SecondeNumber", d]);
  return result;
})(7, 5); //Parameter are wirtten here
console.log(`The largest number is ${result}`);
console.log(theBiggestNumber); //also u can return like this,

//<----------------------->

//ECMAScript;there are some edition which haapens on js to upadte and debug this progrramming languge called ECMA SCRIPT.
//First version on 1997.
//Now ES14,published on 2023 for js latest version.

//<----------------------->

//Local & Global variables;
var varaible1 = "Varaible1"; // this is Global varaible, global varaible its not defiend in function, its easy to acces to it
function myFunction() {
  var varaible2 = "Varaible2"; // this Local varaible,its defiened in func,its not eaddsy to aces to it
  console.log(varaible2); //to acess to local var,
}
console.log(varaible1); //returns the value of varaible1,in order to its global variabkle
console.log(varaible2); //returns not define, in order to its a local varaible
myFunction(); //to show varaible2

//<----------------------->

//Const & let
//1-Const:whenever u defien a var , via const u cant not convert the value of const in our codes at all,
const result = 2;
console.log(result); //returns 2
result = 3; //it will error

//<----------------------->

//2-Let:*better then all var, beacuse its Block Scope.
//Block Scope;its block scope,what deos t mean?> it means in nested body if u use let in the case that in the rest of the code the var which defiend via let it wont affect the order of the other section, and each scope will effect seperatly but if u define via var in the case a scope effects on the varaible till the end effect will remain,
//ex01
function logScope() {
  var localVar = 2;
  if (localVar == 2) {
    var localVar = "diffrent var";
    console.log("Nested local var " + localVar);
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
    console.log("local var " + localVar); //returns diffrent var
  }
  console.log("localvar:" + localVar); //returns 2
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
  updateView: function () {
    //u can define func in objec,specificlly anymouse func or invoke
    return ++course.view; //++ = add 1 to view,whenever u called the course
  },
};
console.log(course.view); //view is 0
course.updateView(); //view upadted to 1
console.log(course); //view is 1

//<----------------------->

//Object constructor;> means to create a func that create object with same shap but diffrent info. use this* imp

function course(title, teacher, level, isActive, views, upadateView) {
  //to define object constrouctor we use first word as capital, here Course for ex.
  (this.title = title),
    (this.teacher = teacher),
    (this.level = level),
    (this.isActive = isActive),
    (this.views = views),
    (this.upadateView = function () {
      return ++course.views;
    });
}
var Cours1 = new Course("Js", "Ali Amini", 1, true, 0);
var Cours2 = new Course("Pyhton", "Amir rohi", 10, false, 2);
console.log(Cours1);
console.log(Cours2);

//<----------------------->

//For loop:
let cars = ["benz", "bmw", "porsche", "peykan", "pride"];
for (let i = 0; i <= cars.length; i++) {
  console.log(cars[i]);
}
//<----------------------->

//For of & For in:
//1-for in: wiil give use the key of obj,and in array wiould return the index(number) as key
const people = {
  firstName: "Ali",
  lastName: "Amini",
  age: 22,
  isActive: true,
};
for (item in people) {
  //each object has two imp features 1-key & 2-value, key is waht we define here firstName,lastNmae,age, whatever before:
  //and whateer is after the : its called value
  //if u use for in and write item in consol log u will see just the keys u defien.
  //but if u write the obj name and item inside [] u will see the value
  console.log(people[item]); //this shape will return the value.
}
const people2 = {
  firstName: "Ali",
  lastName: "Amini",
  age: 22,
  isActive: true,
};
for (value of people2) {
  console.log(value);
}
//<----------------------->

//2-for of: its just used in array,the acees to value of the array not index
let cars2 = ["benz", "bmw", "porsche", "peykan", "pride"];
for (value of cars2) {
  console.log(value);
}

//<----------------------->

//While:untill the conditio is true while will work,
const myCars = ["benz", "bmw", "pride", "peykan", "207"];
let i = 0;
while (myCars[i]) {
  console.log(myCars[i]);
  i++;
}

//<----------------------->

//do-while;first it run the order then condtion will be check.even the sitution will not match with condition at least order will apply once,
let y = 0;
do {
  console.log(y); //returns 0
  y++; //returns 1
} while (y > 10);

//<----------------------->

//break;whenever it reaches to breaks it wont continue
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}

//<----------------------->

//continue;whenever it reaches to continue it hidde the specific condtion and then continue,
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

//<----------------------->

//Dom:
//Bom VS Dom:
//Bom: borwser object model; all the browser and tabs are objects in the page,and the objects named bom. also bom means to model defiened as object for browser,
//Dom: document object model; all html tags in bom is called dom with we can acess to the via dom,means connection between js and html.We have a tree of dom,and each element is a called a node like tag of head and body and ...
//How to acess dom in page? document.getelementby id/class/tag('').inner.html / text => it will return a node
//1-getElementById('');

//<----------------------->

//ex;
// <p id="demo">Hello world!</p>
// <script>
//   document.getElementById("demo").innerHTML = "Hello Ali";
// </script>

//<----------------------->

//ex02;via varaible
// <p id="demo">Hello world!</p>
// <script>
//   const element = document.getElementById("demo");
//   element.innerHTML = "Hello dom";
// element.innerHTML = "date;" + Date(); via func
// </script>

//<----------------------->

//2-getElementByClassname();//will return html collection:its array or data type for html tags to return some html tags in same time.
//u shold chose a tage which has  attribute of class name,

//<----------------------->

//3-getEelemnetByTagName('');//will return all tags in html collections.it mark the tag

//<----------------------->

//4-querySelector('');u can use css selectors to access the element ex also it wont return as html collection; queryselectore('#id / .class / ... ')
//will retuen  ONLY THE FIRST element respect to css selectors u chosee in the case u have many tags with same featurs only THE FIRST ONES WILL RETURN NOT ALL.
//if u want to returns all use querySelectorAll() u can return all. return as node list or html colection,

//<----------------------->

//Dom in class:

//.outterHtml=//u can see the tag of html and the content of tag in consol section,ex <h2>hello</h2/>
//these proprities which u can access to elemnt of html are divided into two types 1-Read Only & 2-Normal, normal u can convert the content of tag but read only is just for reading, this pro is normal
//U can chage the class name or any attribute of tags via above func
//U can acces to the tags which have same class names.bt .classList will return html collection as list, to acess to any index use [0,1,...] in front of the class list. this pro is read only
//if u want to make some changes u sholud use of func like add() to add or remove() to delete toggle() first time add true seconde time remove false, any class u want.
//ex
{
  /* <h2 class="main-title">Hello world!</h2>
    <script>
      const element = (document.querySelector(".main-title").className =
        "test");
      console.log(element);
    </script> */
}

//this topic name is propreities of elemnts some of them used to chnage the value of elemnts some of them is read only.

//<----------------------->

//Dom in Html Attribut:

//there are some func to get accsess to html attribuite
//1-hasAttribiutte();
//ex
{
  /* <a href="#" id="demo"></a>
<script>
  const element = document.getElementById("demo").hasAttribute("href");
  console.log(element);//it will check if tag a has attribute of href it will retun true or false.
</script> */
}

//2-setAttribute(); it takes two value 1-qualifyNmae(str)ex;class,id, 2-name(str)
//if ur tag has already have the attribute it will change, otherwise it will add to the tag
//if u console log it will return undefiend,if u want to see the result copy from ( .document .getElementById("demo")) on console section,
//ex-02
{
  /* <a href="#" id="demo"></a>
    <script>
      const element = document
        .getElementById("demo")
        .setAttribute("class", "test"); //it wont have returning value,to visit the result copy from .documnt... to conole section and see the finall result
    </script> */
}

//3-removeAttribute;
// //it will remove the attribute and its value as well,
//its same with setAttribute
//ex
//<a href="#" id="demo" class="test1">click me</a>
{
  /* <script>
const element = document
  .querySelector("#demo")
  .removeAttribute("class", "test2");
console.log(element);
</script> */
}

//4-attributtes;
//to check whatever attributea a html tags included,return as a node list and starts from 0
//ex
{
  /* <a href="#" id="demo" class="test1" style="display: block">click me</a>
<script>
  const element = document.querySelector("#demo");
  console.log(element.attributes);
</script> */
}
//full ex
{
  /* <div class="container">
      <a href="#" target="_blank">Click me</a>
    </div>
    <script>
      const element = document.querySelector(".container a");
      if (element.hasAttribute("target")) {
        console.log(element.getAttribute("target")); //it will return if the attribute exsisit,
      } else {
        console.log(element.setAttribute("target", "_blank"));
      }
      console.log(element.attributes);
    </script> */
}

//<----------------------->

//.Add element to Dom;

//1-crateElement('str');it will create a node.
//2-createTextNode('str'); it will add a text to our node
//3-appendChild(varaible); it will append text node to node, and node to another node/*imp* do not put '' in append child()
//ex
{
  /* <ul id="chos"></ul> */
}
// function liName() {//define a named func
//   let node = document.createElement("li");
//   let txtnode = document.createTextNode("Ali");
//   node.appendChild(txtnode);
//   document.querySelector("#chos").appendChild(node);
// }
// liName();

//pro ex;
{
  /* <ul id="chos"></ul>
<script>
  const myArr = ["ali", "mohamad", "reza", "arda"];
  function liName() {
    //define a named func
    for (const item of myArr) {
      let node = document.createElement("li");
      let txtnode = document.createTextNode(item);
      node.appendChild(txtnode);
      document.querySelector("#chos").appendChild(node);
    }
  }
  liName();
</script> */
}

//pro ex;
{
  /* <div class="container">
      <a href="#" target="_blank">Click me</a>
    </div>
    <script>
      const element = document.querySelector(".container a");
      element.removeChild(element.childNodes[1]);
      element.parentElement.removeChild(element);
      function pName() {
        let node = document.createElement("p");
        let txtnode = document.createTextNode("This is a paragraph");
        node.appendChild(txtnode);
        document.querySelector(".container").appendChild(node);
      }
      pName();
  
    </script> */
}

//<----------------------->

//Change in inlinline css;*imp*
//make changes in style of css via js.
//there are 3 ways to make some changes in ur inline css.
//1-style.property = value; //it will change the value of style
//2-style.cssText = "property:value;"; //it will change the value of style also u can write all ur css style in str in 1 line.
//3-setAttribute("style","property:value;"); //it will change the value of style
//ex
{
  /* <p id="demo" style="color: red">Hello world!</p>
<script>
  const element = document.getElementById("demo");
  element.style.color = "blue";
  element.style.cssText = "color: green";
  element.setAttribute("style", "color: yellow");
</script> */
}

//ex2;via cssText
{
  /* <a href="#" style="display: block; width: 100%; color: orange" id="demo"
      >Click me!</a
    >
    <script>
      const element = (document.getElementById("demo").style.cssText =
        "color:purple; border:1px red solid; background-color:orange;"); //it will retun cssstyle declaration and node list
      console.log(element);
    </script> */
}

//ex3;via setAttribute
{
  /* <a href="#" style="display: block; width: 100%; color: orange" id="demo"
      >Click me!</a
    >
    <script>
      const element = document.getElementById("demo").setAttribute("style", "color: yellow");
      console.log(element);
    </script> */
}

//tip; in inline css u should use camel case, in the case u want to use more than one word in css, u should use the first word in small letter and the seconde word in capital letter.
//ex; backgroundColor
//tip; i inline css whenever u use this form, it will overwrite the previous style, in the case u want to add more than one style u should use of cssText.

//<----------------------->

//remove element from Dom;
//1-remove(); it will remove the element from dom
//2-removeChild(); it will remove the child from the parent
//ex
{
  /* <a href="#" id="demo">Click me!</a>
    <script>
      const element = document.getElementById("demo");
      element.remove();
    </script> */
}
//ex2 removeChild
{
  /* <div class="container">
      <a href="#" target="_blank">Click me</a>
    </div>
    <script>
      const element = document.querySelector(".container a");
      element.parentElement.removeChild(element);
    </script> */
}

//<----------------------->

//Events in Dom;
//Events; whatever happens in the browser is called events, like click,hover,scroll,resize,load,unload,change,submit,reset,select,blur,focus,keydown,keyup,keypress,load,resize,scroll,unload,click,dblclick,mouseenter,mouseleave,mouseover,mouseout,mousemove,mousedown,mouseup,submit,reset,change,select,blur,focus,keydown,keyup,keypress
//How to use events in js? => 1-define the event 2-define the func 3-call the func
//Events are exsits for dom and bom. in dom we have 3 types of events 1-html events 2-dom events 3-user events
//1-html events; are the events which are defined in html tags, like onclick,onmouseover,onmouseout,onload,onunload,onchange,onsubmit,onreset,onselect,onblur,onfocus,onkeydown,onkeyup,onkeypress
//2-dom events; are the events which are defined in js, like addEventListener(),removeEventListener(),dispatchEvent()
//3-user events; are the events which are defined by users, like createEvent(),initEvent(),preventDefault(),stopPropagation(),stopImmediatePropagation()
//ex-01
{
  /* <button>Click me!</button>
<script>
  const Hi = document.querySelector("button");//First defien a varaible
  function Open(e) {//here e is a symbole of definetion of preventDefaualt func. why? in order to prevent the default action of the event
    e.preventDefault();//prevent the default action of the event
    Hi.classList.toggle("btn");//toggle the class of the button,toggle means if the class is not present then add the class and if the class is present then remove the class
    alert("Hello, World!");
  }
  Hi.onclick = Open;//call the function and event */
}

//Events Object; whenever u want to use the event in the func u should use of event object, in order to use the event object u should define the event in the func and then use of it in the func.
//ex
{
  /* <button>Click me!</button>
<script>
  const Hi = document.querySelector("button");
  function Open(e) {
    e.preventDefault();
    Hi.classList.toggle("btn");
    alert("Hello, World!");
  }
  Hi.onclick = Open;
</script> */
}

//<----------------------->

//Inline events; in the case u want to use the event in html tags, u should use of inline events, like onclick,onmouseover,onmouseout,onload,onunload,onchange,onsubmit,onreset,onselect,onblur,onfocus,onkeydown,onkeyup,onkeypress

//examples;
{
  /* <input
type="text"
onfocus="highlightInput(this)"
onblur="fillInput(this)"
/>
<button>Click me</button>
<hr />
<select onchange="alert('U change the value')">
<option value="">Select option</option>
<option value="">Male</option>
<option value="">Female</option>
</select>
<hr />
<div id="Hover">Hover me</div>
<script>
const HOVER = document.getElementById("Hover");
Hover.style.cssText =
  "cursor: pointer; text-align: center; width: 100px; height: 100px; background-color: blue";
Hover.onmousemove = function () {
  Hover.style.backgroundColor = "red";
};
Hover.onmouseout = function () {
  Hover.style.backgroundColor = "blue";
};
const FOCUS = document.querySelector("input");
function highlightInput(element) {
  element.style.backgroundColor = "yellow";
}
function fillInput(element) {
  element.style.backgroundColor = "red";
  alert("You are leaving the input field");
}
</script> */
}

//<----------------------->

//Event Listeners; in the case u want to use the event in js, u should use of event listeners, like addEventListener(),removeEventListener(),dispatchEvent()

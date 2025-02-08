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


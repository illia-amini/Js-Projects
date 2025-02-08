/*
js-syntax (;).
js defeintion.
*/
console.log('Connected...');
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
/* 
js-datatype(num,str,obj,...).
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

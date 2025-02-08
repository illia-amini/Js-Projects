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
js-datatype(int,str,float).
all types of varaibles in js.
in js varaibles define from left to right if its str it behaves with others like str and vice versa,
*/
var number=22;
var name='Ali';
var c01=23 + 'ali';/* it will print 23 ali, js will behave like str with 23 and str + str */
var c02=45-23+'ALI'/* first it will apply math compration,then put the result next to the str */
var c02= 'ALI' + 45-23/*it will print NAn,first it reads from left to right,  */
var c02= 'ALI' + 45+23/*it will print Ali4523, js can not define yhat 45+23 is either a math comp otr str, then in order to rule sit behaves like a str to it  */

const display=document.getElementById('display');


//Funcrtions definitions
function appendToDisplay(input){
display.value+=input
}
function calculate(){
    try{
        //eval()=> take expression and evalute them
        //try & catch dos not work
        display.value=eval(display.value)
    }
    catch(error){
        display.value='Error';
    };
}
function clearDisplay(){
    display.value= '';
}
// first script;
//info:when user type the first word it will start to count.

//1-definninng varaibels

const theTime=document.querySelector('.timer');//getting access to our division
let timer=[0,0,0,0];//the time values, defined as array,minnuet,seconde,... ltr.

//2-define func to apply logic to our timer,

function timerCounneter() {//this funnction needs to be called in regular time in row to print nnew time in our docs.
    //define primary time
    // let currentTime= timer[0] + ':' + timer[1] + ':' + timer[2],,,,  it wass primary version the latest version is written below,
    let currentTime= leadingZero(timer[0]) + ':' + leadingZero(timer[1]) + ':' +leadingZero(timer[2])
    let interval;// it is for last season, to put setinnterval & clearinterval in this vvaraibel,beacuse it is used in two diffrent funnc,
    theTime.innerHTML=currentTime;//putting in html doc => div.timer .

    //operations & logics ***imp***
    timer[3]++ //it meanss each 10 ms that this funnc will be called, add a unnit to our 1ms, or 3rd index of timer or the last ones,
    timer[0]=Math.floor((timer[3]/100)/60)// why divide to 100? we want to exchange 1ms to 1 seconde and then divide to 60 to reach to 1 min ,from smaller to unite to bigger unite use divisionn or / .,and vice versa
    timer[1]=Math.floor(timer[3]/100)-(timer[0]*60) // firstly we calc seconnde like upper ex, BUT BUT BUT THERE IS A LITTLE TIp, we know seconde has max 60 value, and if we dont minues the seconds from total seconds it will pass from 60 like 61 62 63 ...
    timer[2]=Math.floor((timer[3])-(timer[1]*100)-(timer[0]*6000))
}
// setInterval((timerCounneter),10);//each 10s this func will be called // in sseconde seaseon the place is moved

//Seconde scripts;
//info; we want to put two zero for minute => 00

//1-Func defintionn;

 function leadingZero(time) {// time here means, this func recieve a arguments or innput.
    if (time<=9) {
        time='0'+time; // add a zero behind a sinnngle num for ex; 05,06,09,...
    }
    return time;// return the value at the end
 }
 // use func in line 14.


 //2-Events defeintion. ***imp***
 //info; Evennt & logic are added.

 let timerRunnig=false; // the logic of this, we want to control more on our timer if user enter a words and thenn delete it, it wonnt effecct onn timer speed,
 const testArea=document.querySelector('#test-area'); // the logic of this; to define the cliennt that usser want to type,alls to conntrl more if user delete what they prompt, annd thenn delete to not effect on timer spped
 function start() {
    let textPrompt=testArea.value.length; // to get acess what user entered
    if (textPrompt==0 && !timerRunnig) { //*** imp *** ;we have two logic here. for textprompt it will check if user ennter a words then delete it set interval dunc willl not recall again annd againn beaccuse it will effect onn timer speed. herer !TIMER RUUNIG MEANNS => timeer runnnig==
        timerRunnig=true; // *** imp ***; and timer ruuning logic for if user ennter then delete ennter then delete they single word. it winot add to timer speed.
        interval=setInterval((timerCounneter),10);//each 10s this func will be called,
    }
 }
testArea.addEventListener('keypress',start); // defeine event by keypress & start func

//3-FinishTimer;
//info;compare what use r enter with main txt.

const originTxt=document.querySelector('#origin-text p').innerHTML;// to get access to waht is innside of the box
const testWrapper=document.querySelector('.test-wrapper');//the box of typinng are

function spellCheck() {// *** imp *** to check user txt with original text and its reaction.
    let userTxt=testArea.value//what user is entering
    let originTxtMatch=originTxt.substring(0,userTxt.length);//*** substring funnc will come annd sepearate from start to end point,
    if (userTxt==originTxt) {
        testWrapper.style.borderColor='green';
        clearInterval(interval);//stop timer
    }else{
        if (userTxt==originTxtMatch) {
              testWrapper.style.borderColor='yellow';
        }else{
            testWrapper.style.borderColor='red';
        }
    }
}

testArea.addEventListener('keyup',spellCheck);//keyup is like keypress , buy onnly diffrent is when user leave the btn.

// Restart button;

const reset=document.querySelector('#reset')
function restart() {
    clearInterval(interval);
    interval=null;
    timer-[0,0,0,0];
    timerRunnig=false;

    testArea.value='';
    theTime.innerHTML='00:00:00';
    testWrapper.style.borderColor='gray';
}
reset.addEventListener('click',restart)

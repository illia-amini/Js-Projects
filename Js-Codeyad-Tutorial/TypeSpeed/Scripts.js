// first script;
//info:when user type the first word it will start to count.

//1-definninng varaibels

const theTime=document.querySelector('.timer');//getting access to our division
let timer=[0,0,0,0];//the time values, defined as array,minnuet,seconde,... ltr.

//2-define func to apply logic to our timer,

function timerCounneter() {//this funnction needs to be called in regular time in row to print nnew time in our docs.
    //define primary time
    let currentTime= timer[0] + ':' + timer[1] + ':' + timer[2]
    theTime.innerHTML=currentTime;//putting in html doc => div.timer .

    //operations & logics ***imp***
    timer[3]++ //it meanss each 10 ms that this funnc will be called, add a unnit to our 1ms, or 3rd index of timer or the last ones,
    timer[0]=Math.floor((timer[3]/100)/60)// why divide to 100? we want to exchange 1ms to 1 seconde and then divide to 60 to reach to 1 min ,from smaller to unite to bigger unite use divisionn or / .,and vice versa
    timer[1]=Math.floor(timer[3]/100)-(timer[0]*60) // firstly we calc seconnde like upper ex, BUT BUT BUT THERE IS A LITTLE TIp, we know seconde has max 60 value, and if we dont minues the seconds from total seconds it will pass from 60 like 61 62 63 ...
    timer[2]=Math.floor((timer[3])-(timer[1]*100)-(timer[0]*6000))
}
setInterval((timerCounneter),10);//each 10s this func will be called,

//Seconde scripts;

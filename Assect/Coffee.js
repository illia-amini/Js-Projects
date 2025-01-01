
function $coffee(){
    let $userName=prompt('Enter ur name;');
    confirm(`Hello,${$userName},\nWelcome to ur pannel!`);
    alert('Tell us,ur Coffee Situtation First:\n1-Empty\n2-Half-full\n3-Full');          
    let $userCoffeeNum=Number(prompt('here;'));
    if ($userCoffeeNum == 1){
        return('No No!!!,U shouldnt start now\nFirst get ur coffee,\nRobusta preferably ;)');
    }else if($userCoffeeNum == 2){
        return('Hmmmmm!!!;( Not Bad,\nBut better to take a coffee first\nArabica perferably ;)');
    }else if($userCoffeeNum == 3){
        return(`Awesome,U can start ${$userName},\nGood Luck with Coding;)`);
    }else{
        return('Invalid Number!!!,Try again');
    }
}
$coffee()
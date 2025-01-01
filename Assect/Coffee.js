/*
************************************************************
A coffee code,                                             *
Written by Ali Amini,                                      *
Nice idea for coffee shope or any Coffe saler worldwide,   *
Wish u like it. :) :) :) :).                               *
************************************************************
*/

function $coffee() {
    let $userName = prompt("Enter ur name;");
    confirm(`Hello,${$userName},\nWelcome to ur pannel!`);
    alert(
      "Tell us,ur Coffee Situtation First:\n1-Empty\n2-Half-full\n3-Full"
    );
    let $userCoffeeNum = Number(prompt("here;"));
    while (true) {
      if ($userCoffeeNum == 1) {
        confirm(
          "No No!!!,U shouldnt start now\nFirst get ur coffee,\nRobusta preferably ;)"
        );
        break;
      } else if ($userCoffeeNum == 2) {
        confirm(
          "Hmmmmm!!!;Not Bad,\nBut better to take a coffee first\nArabica perferably ;)"
        );
        break;
      } else if ($userCoffeeNum == 3) {
        confirm(
          `Awesome,U can start ${$userName},\nGood Luck with Coding;)`
        );
        break;
      } else {
        confirm("Invalid Number!!!,Try again");
        break;
      }
    }
  }
  $coffee();
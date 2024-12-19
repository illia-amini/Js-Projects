//A-simple-Password-code-with-js
var $userName = prompt("Enter ur Username;"); //recive user's usname.
      var $userPass = prompt("Enter ur Password;"); //recive user's pass.
      if ($userName == "illia_amini" && $userPass == "2002.ir") {
        alert(`Welcome to your account,\n${$userName}`); //welcome notf.
        alert("4 ur saftey plz choose one of the operation below,"); //user choose op.
        alert(
          `1-Math\n2-Geomatri\n3-Leapyear\n4-Max or Min\n5-Quadratic Eq\n6-Km to m\n7-Calcius to farenheit\n8-Even or odd\n9-Squre root\n10-Temp`
        ); //user options.
        var $userFirstChoose = parseInt(prompt("Number of Op:")); //Number given.
        switch ($userFirstChoose) {
          case 1: {
            var $userNum01 = Number(prompt("Enter ur first number:")); //recive first num of user.
            var $userNum02 = parseInt(prompt("Enter ur second number:")); //recive seconde num of user.
            var $userOp = prompt("Enter operation sign:"); //opeartion is selected by user.
            if ($userOp == "+") {
              //first condition.
              confirm(
                `${$userNum01} + ${$userNum02} = ${$userNum01 + $userNum02} `
              ); //returns the result in backtik template.
            } else if ($userOp == "-") {
              //seconde condition.
              confirm(
                `${$userNum01} - ${$userNum02} = ${$userNum01 - $userNum02} `
              ); //returns the result in backtik template.
            } else if ($userOp == "*") {
              //third condition.
              confirm(
                `${$userNum01} * ${$userNum02} = ${$userNum01 * $userNum02} `
              ); //returns the result in backtik template.
            } else if ($userOp == "/") {
              //fourth condition
              confirm(
                `${$userNum01} / ${$userNum02} = ${$userNum01 / $userNum02} `
              ); //returns the result in backtik template.
            } else if ($userOp == "**") {
              //fifth condition
              confirm(
                `${$userNum01} ** ${$userNum02} = ${$userNum01 ** $userNum02} `
              ); //returns the result in backtik template.
            } else if ($userOp == "%") {
              //sixth condition
              confirm(
                `${$userNum01} % ${$userNum02} = ${$userNum01 % $userNum02} `
              );
            } else {
              confirm("invalid operation");
            }
            break;
          }
          case 2: {
            var $rectangelStatus = parseInt(prompt("1-Area or 2-Perimeter")); //user choose here.
            switch ($rectangelStatus) {
              case 1: {
                var $userWidthNum = Number(prompt("Enter ur Width:")); //recieve width.
                var $userLengthNum = parseInt(prompt("Enter ur length:")); //recieve length.
                alert(
                  `The area of ur rectangel is;\n${$userWidthNum} * ${$userLengthNum} = ${
                    $userWidthNum * $userLengthNum
                  }`
                ); //returns the are of rectangel.
                break;
              }
              case 2: {
                var $userWidthNum = Number(prompt("Enter ur Width:")); //recieve width.
                var $userLengthNum = parseInt(prompt("Enter ur length:")); //recieve length.
                alert(
                  `The perimeter of ur rectangel is;\n(${$userWidthNum} * ${$userWidthNum})/2 = ${
                    ($userWidthNum * $userLengthNum) / 2
                  }`
                ); //returns the peremeit of rectangele.
                break;
              }
              default:
                alert("Plz choose either area of pereimeter");
            }
            break;
          }
          case 3: {
            var $userYear = Number(prompt("Enter ur year:")); //recive a year num from user.
            if ($userYear % 400 == 0 && $userYear % 100 == 0) {
              //check if the year is century year and leap year at the same time.
              alert(`${$userYear},is a leap year`);
            } else if ($userYear % 4 == 0 && $userYear % 100 != 0) {
              //check if the year is a leap year
              alert(`${$userYear},is a leap year`);
            } else {
              confirm(`${$userYear},is not a leap year`); //check if its not a leap yeaar.
            }
            break;
          }
          case 4: {
            alert("1-Max or 2-Min"); //user choose.
            var $userChoose02 = parseInt(prompt("Number of Op:")); //Op is select here.
            if (!($userChoose02 != 1)) {
              var $userMaxNum01 = Number(prompt("Enter ur First number:")); //recive first num of user.
              var $userMaxNum02 = parseInt(prompt("Enter ur Second number:")); //recive scond num of user.
              var $userMaxNum03 = Number(prompt("Enter ur Third number:")); //recive third num of user.
              var $largesttNum = $userMaxNum01;
              if ($largesttNum <= $userMaxNum02) {
                //first conditionl is checkead.
                $largesttNum = $userMaxNum02;
              }
              if ($largesttNum <= $userMaxNum03) {
                //seconde conditionl is checkead.
                $largesttNum = $userMaxNum03;
              }
              confirm(`The max number is: ${$largesttNum}`); //returns the result in normal template.
            } else if (!($userChoose02 != 2)) {
              var $userMinNum04 = parseInt(prompt("Enter ur First number:")); //recive first num of user.
              var $userMinNum05 = Number(prompt("Enter ur Second number:")); //recive second num of user.
              var $userMinNum06 = parseInt(prompt("Enter ur Third number:")); //recive third num of user.
              alert(
                `Hmm,The weakest number is;\n${Math.min(
                  $userMinNum04,
                  $userMinNum05,
                  $userMinNum06
                )}`
              ); //returns the result in backtik template.
            } else {
              confirm("Invalid number!!!");
            }
            break;
          }
          case 5: {
            // program to solve quadratic equation
            let root1, root2;

            // take input from the user
            let a = prompt("Enter the first number: ");
            let b = prompt("Enter the second number: ");
            let c = prompt("Enter the third number: ");

            // calculate discriminant
            let discriminant = b * b - 4 * a * c;

            // condition for real and different roots
            if (discriminant > 0) {
              root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
              root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

              // result
              alert(
                `The roots of quadratic equation are ${root1} and ${root2}`
              );
            }

            // condition for real and equal roots
            else if (discriminant == 0) {
              root1 = root2 = -b / (2 * a);

              // result
              alert(
                `The roots of quadratic equation are ${root1} and ${root2}`
              );
            }

            // if roots are not real
            else {
              let realPart = (-b / (2 * a)).toFixed(2);
              let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

              // result
              alert(
                `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
              );
            }
            break;
          }
          case 6: {
            var $userKmNum = parseInt(prompt("Enter ur length in km:")); //recive a num from user.
            var $kmToMeter = $userKmNum * 10 ** 3; //convert km to meter.
            alert(`ur km length (${$userKmNum}), to Meter is: ${$kmToMeter} m`); //returns the result in backtik template.
            break;
          }
          case 7: {
            var $userCelsiusNum = Number(prompt("Enter ur temp in calcius:")); //recive a num from user.
            alert(
              `ur celsisus (${$userCelsiusNum}), to fahrenheit is: ${
                $userCelsiusNum * 1.8 + 32
              }f`
            ); //returns the result in backtik template.
            break;
          }
          case 8: {
            var $userTypeNum = parseInt(prompt("Enter ur number:")); //recive a num from user.
            var $userNumStatus = $userTypeNum % 2 != 0 ? "odd" : "even";
            confirm($userNumStatus); //returns the result in normal template.
          }
          case 9: {
            var $userSqrtNum01 = parseInt(prompt("Enter ur Number:")); //recive a num from user.
            alert(
              `the squre root of ${$userSqrtNum01} is:\n${
                $userSqrtNum01 ** 0.5
              }`
            ); //returns the result in backtik template.
            break;
          }
          case 10: {
            var $userTempText01 = prompt("Enter ur First text:"); //recive first str of user.
            var $userTempText02 = prompt("Enter ur Second text:"); //recive second str of user.
            var $temp = null; //define a temp.
            $temp = $userTempText01;
            $userTempText01 = $userTempText02;
            $userTempText02 = $temp; //convert operations.
            alert(
              `New texts are ready,\nur first text is: ${$userTempText01}\nurseconde text is: ${$userTempText02}`
            ); //returns the result in backtik template.
            break;
          }
        } //over with switch cases
      } else {
        alert("Wrong Password or Username"); //wrong pass or usname.
      }
//w{ritten-by-illia.amini
//mind-of-king-,-hear-of-warrior
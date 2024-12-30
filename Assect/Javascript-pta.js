 /*
      pattern;
      
      console log javascript as pattern below:

      j
      ja
      jav
      java
      javas
      javasc
      javascr
      javascri
      javascrip
      javascript
      javascript
      javascrip
      javascri
      javascr
      javasc
      javas
      java
      jav
      ja
      j
      */

      //upper pattern's code

      var $java = "javascript";

      var $count = [];

      for (let i of $java) {
        $count += i;
        console.log($count);
      }

      //lower pattern's code

      // ?? is how to star from end char to first char ?? 
      // for (let i of $java) {
      //   $count -= i;
      //   console.log($count);
      // }
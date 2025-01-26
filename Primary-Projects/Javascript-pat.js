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
      var $count = '';
      for (let i of $java) {
        $count += i;
        console.log($count);
      }
      //lower pattern's code
      for (let i = $java.length-1;i>=0;i--) {
        $count = $java.slice(0,i);
        console.log($count);
      }

      //Written-by-illia.amini
      //Mind-of-king-,-Heart-of-warrior
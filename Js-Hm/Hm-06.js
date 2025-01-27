//Hm-06;

//instrouction-below:
//camelCase-written;

/*
.1-10 ex of class in js methode & proprities (required)
.2-Setter & getter.(optional)
.3-Create 3 buttons,with dynamic pic.(required)
.4-timer & chornometer.(required)
.5-solve js examples untill 50.(required)
.6-Aos.(Animation on scroll)(required)
.7-swiffer slider.(required)
*/
//1-Class-ex-s
//1-Class-ex-e
//2-Setter & Getter-s
/*
Getters & Setters allow u to define OA(Object Accessories)(Computed Properties)
1-Getter (The get keyword):
.lang proprety:to get the value of the languge proprety
ex;
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  }
};

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang;
ex;
const person = {
        firstName: "Ali",
        lastName: "Amini",
        age: 22,
        languge: "Fa",
        get lang() {
          return this.languge;
        },
      };
      console.log(person.lang);

2-Setter(To Set keyword)
.lang proprety; to set the value of the languge proprety.
ex;
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  }
};

// Set an object property using a setter:
person.lang = "en";

// Display data from the object:
document.getElementById("demo").innerHTML = person.language;

why do we perfer to use getter & setter?
1-gives simpler syntax
2-it can secuer better data quality.
3-it allows equal syntax for propreties and methode.
4-it is useful for doing things behind-the-scenes.
*/

//2-Setter & Getter-e
//5 & 6 examples  are in written in thier own files.
//Written-by-illia.amini
//Mind-of-king-,-Heart-of-warrior 
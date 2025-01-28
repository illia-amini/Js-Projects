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

Object.defineProperty()***IDK

All ex of setter & getter

 //Setter
      const person = {
        firstName: "Ali",
        lastName: "Amini",
        age: 22,
        languge: "",
        set lang(lang) {
          this.languge = lang;
        },
      };
      person.lang = "Fa";
      console.log(person.languge);
      //Getter
      const person2 = {
        firstName: "Ali",
        lastName: "Amini",
        age: 22,
        languge: "Fa",
        get lang() {
          return this.languge;
        },
      };
      console.log(person2.lang);
      //Function & Proprety
      //1-Function
      const person3 = {
        firstName: "Ali",
        lastName: "Amini",
        age: 22,
        languge: "En",
        fullName: function () {
          return this.firstName + " " + this.lastName;
        },
      };
      console.log(person3.fullName); //it returns a function and u cant visit the proprities.
      //2-Proprety
      const person4 = {
        firstName: "Ali",
        lastName: "Amini",
        age: 22,
        languge: "En",
        get fullName() {
          return this.firstName + " " + this.lastName;
        },
      };
      console.log(person4.fullName);
      //Data Quality - Getter
      const person5 = {
        firstName: "Ali",
        lastName: "Amini",
        age: 22,
        languge: "fa",
        get lang() {
          return this.languge.toUpperCase();
        },
      };
      console.log(person5.lang);
      console.log(person5); //!!!! why we see lang proprety in object as lang!!!
      //Datat Quality - Setter
      const person6 = {
        firstName: "Ali",
        lastName: "Amini",
        age: 22,
        languge: "fa",
        set lang(lang) {
          this.languge = lang.toUpperCase();
        },
      };
      person6.lang = "fa";
      console.log(person6.languge);
*/

//2-Setter & Getter-e

//3-3-btn-s
//3-3-btn-e
//4- examples  are in written in thier own files.
//5-10-ex-s
//5-10-ex-e
//6-Aos-s
//6-Aos-e
//7-swiffer-slider-s
//7-swiffer-slider-e
//Written-by-illia.amini
//Mind-of-king-,-Heart-of-warrior 
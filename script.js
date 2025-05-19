// +====================================================================================+
// 1. Concept of var variable................

/**  Stack Algorithm
 *   +==================+
 *   +        9         +   var num1 = 5; data go to first cell of memory stack;
 *   +==================+   var num1 = 6; data go to second cell of memory stack;
 *   +==================+   var num1 = 9; data go to third cell of memory stack;
 *   +        6         +
 *   +==================+
 *   +==================+
 *   +        5         +
 *   +==================+
 **
 */
var num1 = 5;
var num1 = 6; // 5, 6 are garbage data
var num1 = 9;
// If I print of num1 variable it will be show the data 9 number.
console.log(num1);
// +====================================================================================+

// +====================================================================================+
// 2. Concept of let variable................
/**
 * let do detect compile time error & do re-declare data in the memory stack.
 *
 *   +==================+            let number = 5;
 *   +        5         + <--------- First time declare korar por memory celly assign korche,
 *   +==================+
 *
 *
 *   +==================+            number = 10;
 *   +       10         + <--------- Second time declare korar por memory ager celly re-declare kora hoise.
 *   +==================+
 */
let number = 5;
number = 10; // Re-declare kora hoiche.
console.log(number);
// +====================================================================================+

// +====================================================================================+
// 3. Concept of const variable................
/**
 * const : Fixed variable, same name variable declare kora jay na & same namey re-declare o kora jay na, R    jodi re-declare kora koy code execute hoye run-time error dekhaby.
 */
const distacnt = 300;
// distacnt = 400;
console.log(distacnt); // run-time error
// +====================================================================================+

// +====================================================================================+
// 4. Variable naming................
/**
 * Variable naming er jonno dui dhoroner limitation ache,
 * i) Variable name must be letter, digit and $, _
 * ii) Variable name er age kono number deoa jaby na and 2ta word er majy - dawa jaby na like (my-name).
 */
var bdt;
let dollar$;
var bd_One;
let $ = 5;
var _ = 5;
console.log($ + _);
// +====================================================================================+

// +====================================================================================+
// 4. Assignment Operator................
let one = 1;
one += one;
console.log(one);

var two = 2;
two -= two;
console.log(two);

let three = 3;
three /= three;
console.log(three);

let four = 4;
four %= four;
console.log(four);

let five = 5;
five **= five;
console.log(five);
// +====================================================================================+


// +====================================================================================+
// 4. Logical Assignment Operators................
/**
 *    &&, ||
 */
let num = 90;
num = 100;
if (num == num && num + 5 === num + 5) {
  console.log("True");
} else {
  console.log("False");
}



var ten = 10;
var ten = 20 - ten;
if (ten != 20 || ten + 1 === ten + 10) {
  console.log("True");
} else {
  console.log("False");
}
// +====================================================================================+



// +====================================================================================+
// 5. Object and Array................
let array = [2024, "MERN", ['a', 'b', 'c', {
    name: "Rafi",
    id: 1160,
    city: "BD"
}, "Al-Amin Sir"]]

// Al-Amin Sir
console.log(array[2][4]);

// MERN
console.log(array[1]);

// c
console.log(array[2][2]);

// Rafi
console.log(array[2][3].name);
// +====================================================================================+



// +====================================================================================+
// 5. String Methods................

// String length;
let name = "MD Sabbir Hosain Rafi";
console.log(name.length);

// String CharAt();
let sirName = "Al-Amin Sir";
console.log(sirName.charAt(0));

// String slice()
let myName = "MD Sabbir Hosain Rafi";
console.log(myName.slice(0,9));
// slice(0,9) myName variable y jei string value ase tar 0 number index er theke and 9 number index string 
// value er vitore data show korbe.


// String toUpperCase();
let country1 = "Bangladesh";
console.log(country1.toUpperCase());

// String toLowerCase();
let country2 = "Italy";
console.log(country2.toLowerCase());

// String concat()
let firstName = "MD Sabbir Hosain";
let lastName = "Rafi";
console.log(firstName.concat(" ", lastName)); // Multiple sring value marge kore.

// String trimStart()
let phoneNumber = "     0190      ";
console.log(phoneNumber.trim()); // Space remove kore dy

// String repeat()
let abc = "123445";
console.log(abc.repeat(2)); // String type data koto bar repate korbo oita repeat(method er vitore bolty hobe).

// Replacing String
let fruits = "Apple, Banana, Mango";
console.log(fruits);
console.log(fruits.replace("Banana", "Lichi")); // String er vitore value replace kore dy replace("Jeitar bodoly replace korbo", "Replace kore new value oikhany assign kore");

// String ReplaceAll()
let bioData = "Hi this is MD Sabbir Hosain Rafi";
console.log(bioData.replaceAll("Hosain Rafi", ""));

// String split()
let data = "a,b,c,d,e,f,g,h";
let myArray = data.split(",") // Array ty convert korche
console.log(myArray);

// String parseInt()
let id = "12345";
console.log(parseInt(id));
// +====================================================================================+



// +====================================================================================+
// 6. Number Methods................

// toString() Method
let idNumber = 12345;
console.log(idNumber.toString());
// +====================================================================================+
/*Exercise: Level 1
1) Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
2) Print the string on the browser console using console.log()
3) Print the length of the string on the browser console using console.log()
4) Change all the string characters to capital letters using toUpperCase() method
5) Change all the string characters to lowercase letters using toLowerCase() method
6) Cut (slice) out the first word of the string using substr() or substring() method
7) Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
8) Check if the string contains a word Script using includes() method
9) Split the string into an array using split() method
10) Split the string 30 Days Of JavaScript at the space using split() method
11) 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
12) Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
13) What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
14) What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
15) Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
16) Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
17) Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
18) Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
19) Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
20) Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
21) Use startsWith() method with the string 30 Days Of JavaScript and make the result true
22) Use endsWith() method with the string 30 Days Of JavaScript and make the result true
23) Use match() method to find all the a’s in 30 Days Of JavaScript
24) Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
25) Use repeat() method to print 30 Days Of JavaScript 2 times */

//SOLUTIONS TO LEVEL ONE
// solution 1
let challenge = "30 Days of JavaScript";

// solution 2
console.log(challenge);

// solution 3
let stringLength = challenge.length;
console.log(stringLength);

// solution 4
let stringToUpperCase = challenge.toUpperCase();
console.log(stringToUpperCase);

// solution 5
let stringToLowerCase = challenge.toLowerCase();
console.log(stringToLowerCase);

// solution 6
let firstWord = challenge.substring(0, 1);
console.log(firstWord);

// solution 7
let slicedWord = challenge.substring(3, 21);
console.log(slicedWord);

// solution 8
let word = "Script";
let checkWord = challenge.includes(word);
console.log(checkWord);

// solution 9
let stringToArray = challenge.split();
console.log(stringToArray);

// solution 10
let spacedArray = challenge.split(" ");
console.log(spacedArray);

// solution 11
let techCompanies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let company = techCompanies.split(" ");
console.log(company);

// solution 12
let replaceWord = challenge.replace("JavaScript", "Python");
console.log(replaceWord);

// solution 13
let char = challenge[15];
console.log(char);

// solution 14
let charCode = challenge.charCodeAt("J");
console.log(charCode);

// solution 15
let checkIndexOf = challenge.indexOf("a");
console.log(checkIndexOf);

// solution 16
let checkLastIndexOf = challenge.lastIndexOf("a");
console.log(checkLastIndexOf);

// solution 17
let firstOccurence =
  "You cannot end a sentence with because because because is a conjunction";
let checkFirstOccurence = firstOccurence.indexOf("because");
console.log(checkFirstOccurence);

// solution 18
let lastOccurence =
  "You cannot end a sentence with because because because is a conjunction";
let checkLastOccurence = lastOccurence.indexOf("because");
console.log(checkLastOccurence);

// solution 19
let searchOccurence =
  "You cannot end a sentence with because because because is a conjunction";
let occurrence = searchOccurence.search("because");
console.log(occurrence);

// solution 20
let unTrimmedValue = " 30 Days Of JavaScript ";
let trimmedValue = unTrimmedValue.trim();
console.log(trimmedValue);

// solution 21
let startWith = challenge.startsWith("30");
console.log(startWith);

// solution 22
let endWith = challenge.endsWith("30");
console.log(endWith);

// solution 23
let matchedValue = challenge.match("a");
console.log(matchedValue);

// solution 24
let firstSentence = "30 days of ";
let secondSentence = "JavaScript";
let joinWord = firstSentence.concat(secondSentence);
console.log(joinWord);

// solution 25
let wordToRepeat = challenge;
let repeatedWord = wordToRepeat.repeat(2);
console.log(repeatedWord);

/*Exercise: Level 2
Using console.log() print out the following statement:

1) The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
Using console.log() print out the following quote by Mother Teresa:

2) "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

3) Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

4) Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

5) Check if 'on' is found in both python and jargon

6) I hope this course is not full of jargon. Check if jargon is in the sentence.

7) Generate a random number between 0 and 100 inclusively.

8) Generate a random number between 50 and 100 inclusively.

9) Generate a random number between 0 and 255 inclusively.

10) Access the 'JavaScript' string characters using a random number.

11) Use console.log() and escape characters to print the following pattern.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
12) Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
*/

console.log("");
console.log("");
console.log("");
console.log("EXERCISE================2 SOLUTIONS");
// solution 1
let quoteByJohnHolmes =
  "There is no exercise better for the heart than reaching down and lifting people up.";
console.log(quoteByJohnHolmes);

// solution 2
let quoteByMotherTeresa =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(quoteByMotherTeresa);

// solution 3
let string10 = "10";
let number = 10;
let checks = string10 == number ? "yes" : "No";
console.log(checks);

// solution 4
let parseNum = Math.round(parseFloat("9.8"));
console.log(parseNum);

// solution 5
let word1 = "python";
let word2 = "jargon";
console.log(word1.includes("on"), word2.includes("on"));

// solution 6
let jargonCheck = "I hope this course is not full of jargon.";
console.log(jargonCheck.includes("jargon"));

// solution 7, 8, 9 same
let min = 0;
let max = 100;
let generateRandomNumber = Math.floor(Math.random() * (max - min) + min);
console.log(generateRandomNumber);

// solution 10
let access = "Javascript";
let wordAccess = access.length;
let randomWord = Math.ceil(Math.random() * wordAccess);
console.log(access[randomWord]);

// solution 11
console.log("1 1 1 1 1\n 2 1 2 4 8\n 3 1 3 9 27 4\n 1 4 16 64\n 5 1 5 25 125");

// solution 12
let wordSen =
  "You cannot end a sentence with because because because is a conjunction";

let cutwo = wordSen.substr(30, 25);
console.log(cutwo);

/* Exercises: Level 3
1) 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

2) Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

3) Clean the following text and find the most frequent word (hint, use replace and regular expressions).

    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

4) Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
*/

console.log("");
console.log("");
console.log("");
console.log("EXERCISE================3 SOLUTIONS");

// solution 1
let stringCount =
  "1) 'love is the best thing in this world. Some found their love and some are still looking for their love.";
var wordCount = stringCount.match(/(love)/g).length;
console.log(wordCount);

// solution 2
let latWord =
  "You cannot end a sentence with because because because is a conjunction";
console.log(latWord.match("because"));

// solution 3
const sentenceRe =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

console.log(sentenceRe.replace(/[%&^$#@!;]/g, ""));

// solution 4

let message =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let regex = /\d+/g;

let matches = message.match(regex);

console.log(matches);
let totalIncome = Number(matches[0]) + Number(matches[1]) + Number(matches[2]);
console.log(totalIncome);

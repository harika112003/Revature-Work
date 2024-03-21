//print the location of "my" in a string "I am enjoying my training".
let s="I am enjoying my training";
console.log("Location of 'my' in string :"+ s.indexOf("my"));
 
//print the location of "m" in a string "I am enjoying my training".
let s1="I am enjoying my training";
let arr=[];
for(let i=0;i<s1.length;s++){
    if(s1[i]=="m"){
        arr.push(i);
    }
}
console.log("Location of m in string:"+ arr);

//extract the complete string from index 3 of the string "I am enjoying my training". and store in a variable
let s2="I am enjoying my training";
let s3=s2.slice(3,);
console.log("New String:"+s3);
 
//extract string from index 0 to 4 from the string "I am enjoying my training". and store in a variable.
let s4=s1.slice(0,5);
console.log("New String:"+s4);
 
//replace "training" with "journey" in "I am enjoying my training". and store in a variable.
let s5=s2.replace("training","journey");
console.log("New String:"+s5);
 
//Print all the characters of a string using for loop.can use charAt() or str[];
for(let j =0;j<=s2.length;j++){
    console.log(s2.charAt(j));
}
 
//store string str="a,b,c" into an array.
let str="a,b,c";
let a =str.split(",");
console.log(a);
 
//remove white spaces from the string str="abc     ".
let string="abc    ";
string.split(' ').join('');
console.log(b);
 
//Add two strings using the concat() function. and print them. make sure there is space between concatenated elements.
let str1="Hello";
let str2="Harika";
str1=str1.concat(" "+str2);
console.log("Concatenated String:"+str1);

//Remove 'e' from the following string:```javascript const str = "abcedgedcve";```
let str3="abcedgedcve";
const chre=/[e]/gi;
str3=str3.replace(chre,'');
console.log("String after removing e:"+str3);
 
// Q2. Convert the following string into an array:
// ```javascript
// const str = "Hello there I am jack";
// ```
const str4="Hello there I am jack";
const arr1=str4.split('');
console.log(arr1);
 
// Check if the given string is a palindrome or not:
// ```javascript
// const str = "racecar";
const strg="racecar";
let ms=strg.split('').reverse().join('');
if(ms==strg){
    console.log("palindrome");
}
else{
    console.log("Not a palindrome");
}

// Q5. Write a function to check if a given string is a valid email address:
// ```javascript
// const email1 = "example@example.com";
// const email2 = "invalid@email";
//```
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
const email1 = "example@example.com";
const email2 = "invalid@email";

console.log(isValidEmail(email1));
console.log(isValidEmail(email2)); 


// Q10. Check if a string starts with a specific substring:
// ```javascript
// const str = "Hello, World!";
// const substr = "Hello";
// ```
const sr = "Hello, World!";
const substr = "Hello";

if (sr.startsWith(substr)) {
    console.log(`"${sr}" starts with "${substr}".`);
} else {
    console.log(`"${sr}" does not start with "${substr}".`);
}


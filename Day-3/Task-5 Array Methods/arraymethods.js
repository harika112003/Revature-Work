//Q1. Find number 2 in the following array. If 2 is present, print its index in the array. If 2 is not present, display the message "Element not found in array".
const arr = [1, 2, 3, 4, 5, 6];
 if (arr.includes(2)){
    ind=arr.indexOf(2);
    console.log(`Found at index ${ind}`);
 }
 else{
    console.log("Not found");
 }

 
 
//Q2. Remove "apple" from the following array:
const fruits = ["banana", "mango", "apple", "kiwi"];
fruits.splice(2,1);
console.log(fruits);
 
 
//Q3. Reverse the order of the elements in the following array:
const num= [23, 45, 12, 67, 89, 34];
num.reverse()
console.log(num);
 
 
//Q4. Find the maximum value in the following array:
const num1 = [23, 45, 12, 67, 89, 34];
console.log(Math.max(...num1));
 
 
//Q5. Create a function that takes an array of numbers and returns the second-largest number in the array:
const n = [10, 5, 8, 20, 15, 12];
n.sort();
console.log(`Second max of array: ${n[2]}`);


//Method-2
const num2 = [10, 5, 8, 20, 15, 12];
m=Math.max(...num2);
min=Math.min(...num2);
var ans;

for(let ele of num2){
    if(ele>=min && ele!=m){
    ans=ele;
    min=ele;
    }
    else{
        continue;
    }
}
console.log(`Second max of array: ${ans}`);

 
//Q6. Create a function that takes an array of numbers and returns the sum of all even numbers in the array:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sum=0;
for(let ele of numbers){
sum+=ele;
}
console.log(`Sum of array: ${sum}`);
 
 
//Q7. Create a students array which contains objects of students with properties name and age. Add 3 student objects to it.
let student_details=[];
student_details.push({name:"Harika",age:20});
student_details.push({name:"abc",age:21});
student_details.push({name:"abc1",age:22});
console.log(student_details);

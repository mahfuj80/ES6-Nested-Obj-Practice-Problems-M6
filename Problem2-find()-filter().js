/* 
You are given an array say: [33, 50, 79, 78, 90, 101, 30]. Now return/ get all the elements which are divisible by 10 using array.filter() method.

Now do the same task of question 2. But do this using array.find() method. Then compare the output of question 2 & question 3.
*/

const arr = [33, 50, 79, 78, 90, 101, 30];
const arr1 = arr.filter(n => n % 10 === 0);
console.log(arr1);
const arr2 = arr.find(n => n % 10 === 0);
console.log(arr2);
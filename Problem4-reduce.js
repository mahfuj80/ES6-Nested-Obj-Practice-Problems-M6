/*
const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 }

    1) Follow above array of objects. So, you have 3 objects as array element. Can you find out the total sum from here?
    20+15+22 = 57 . The output will be 57;

    What are you thinking? Yeah! Do it with for loop. I know you can do it.

    But! Wait!! Wait!!! Do the same task using array.reduce() method.
]; 
*/
const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 }
];
let sum = 0;
for (const item of people) {
    sum = sum + item.age;
}
console.log(sum);

const total = people.reduce((a, c) => a + c.age, 0);

console.log(total);
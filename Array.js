//Array of numbers
const numbers = [1, 2, 3, 4, 5, 6]

//Array of String
const fruits = ['Apple', 'Banana', 'cherry']

console.log(numbers);
console.log(numbers.length);
console.log(numbers[4]);

console.log(fruits);
console.log(fruits.length);
console.log(fruits[2]);

//Array of Arrays
const employee = [
    ['John', 20],
    ['Alice', 32],
    ['Roma', 24],
    ['Lisa', 21]
]
console.log(employee[0][0]);
console.log(employee[3][1]);


//Task1
const city = [
    ['mumbai', 3748365],
    ['pune',
        ['new', 38485],
        ['old', 857833]
    ],
    ['Kolhapur',47583]
]
console.log(city[1][1][0]);

//task2
const student=[
    ['Iram',7],
    ['Rabiya',
        [14,66],
        [56,39]
    ]
]
console.log(student[1][2][0]);

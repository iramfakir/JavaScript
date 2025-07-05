//For Loop
let i;
let names = ['Iram', 'Rabiya', 'Sana'];
for (i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//example of for loop
let b, c;
for (b = 1; b <= 5; b++) {
    let stars = '';
    for (c = 1; c <= b; c++) {
        stars += '*'

    }
    console.log(stars)
}

//piramid
let rows=3;
for(let y=1; y<=rows; y++){
    let space='';
    let star=''
    //add space
    for(let z=1; z<=rows-y; z++ ){
        space+= " "
    }
    //add stars
    for(let k=1; k<=y; k++){
       star+="*"
    }
    console.log(space + star);
}   

//piramid
let n = 5;
for (let i = 1; i <= n; i++) {
    let str = "* ";
    let space = '  ';
    console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1));
}

//piramid
let row = 5;

for (let m = 0; m < row; m++) {
    let str = '';

    // spaces
    for (let n = 0; n < row - m - 1; n++) {
        str += ' ';
    }

    // stars
    for (let k = 0; k < 2 * m + 1; k++) {
        str += '* ';
    }

    console.log(str);
}


//While Loop
let j = 1;
while (j <= 10) {
    console.log('Numbers:', j);
    j++;
}


//Do While Loop
let a = 1;
do {
    console.log('number:', a++);
} while (a <= 10);

//For....of loop
const fruit = ['Mango', 'Apple', 'Banana'];
for (const frru of fruit) {
    console.log('Fruit:', frru);
}


//For...in loop
const student = {
    name: 'Iram', Age: 19, City: 'Ichal'
};
for (const key in student) {
    console.log(key + ':' + student[key]);
}

//foreach
const fruits = ['Mango', 'Apple', 'Banana', 'Kiwi'];
fruits.forEach((fru) => {
    console.log('Fruits', fru);
})


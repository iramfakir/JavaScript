//Arithmetic Operators
let a= 10;
let b=3;
console.log('Addition:',a+b);
console.log('Subtraction:',a-b);
console.log('Multiplication:',a*b);
console.log('Division:',a/b);
console.log('Modulus:',a%b);
console.log('Increment:',++a);
console.log('Decrement:',--b);
console.log('Exponentiation:',a**b);
 
//Task1
console.log('(a+b)^2=',(a+b)^2);
//Task2
console.log('a*b+a-b/a^2=',a*b-a-b/a^2);

//Assignment Operators
let c=5;
console.log('Assignment:',c=3);
console.log('Addition assignment:',c+=10);
console.log('Subtraction assignment :',c-=10);
console.log('Multiplication assignment:',c*=10);
console.log('Division assignment:',c/=10);
console.log('Modulus assignment:',c%=10);
console.log('Exponentiation assignment :',c**=10);


//Comparison Operators
let d=10;
let e=15;
let age=20;
let result=(age>=18? 'Adult':'Minor');
console.log(result);
console.log('Equal to:',d==e);
console.log('Strict equal to:',d===e);
console.log('Not equal to:',d!=e);
console.log('Strict not equal to:',d!==e);
console.log('Greater than:',d>e);
console.log('Less than:',d<e);
console.log('Greater than or equal to:',d>=e);
console.log('Less than or equal to:',d<=e);


//Logical Operators
let f=45;
let g=34;
console.log('Logical AND:', f>10 && g<10);
console.log('Logical OR :',f>10 || g<10);
console.log('Logical NOT :',!(f>10));


//Bitwise Operators
let h=35;
console.log('Bitwise AND:',h&2);
console.log('Bitwise OR:',h|2);
console.log('Bitwise XOR:',h^2);
console.log('Bitwise NOT:',~2);
console.log('Bitwise Left Shift',h<<2);
console.log('Bitwise Right Shift:',h>>2);
console.log('Zero-fill Right Shift:',h>>>2);


//Ternary (Conditional) Operator
let i=50;
console.log('Ternary Operation:',i<=50? 'Condition is true':'Condition is false');
console.log('Ternary Operation:',i==60? 'Condition is true':'Condition is false');

//String Operators
let j='Iram ';
let k='Fakir';
console.log('Concatenation:',j+k);
console.log('Concatenation assignment:',j+=k);


//Type Operators
let l='Iram';
let m=[4,'Iram'];
console.log('typeof: ',typeof l);
console.log('instanceof: ', m instanceof Array);


//Miscellaneous Operators
let n=(1,2,3,4);
console.log('Comma:',n);

let o={name:'Iram', age:'19'};
delete o.age;
console.log('After Delete:',o);

let p={name:'Iram', roll_no:7};
console.log('name' in p);
console.log('7' in p);


//Task1
console.log('Calcuted:',(a+b*f>30) && (c^2*20/10<=100));

//Task2
console.log('Calculated:',(c*5) || (i/5) == 10 );
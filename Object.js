//Normal Object

const person = {
    name: 'Iram',
    age: 19,
    city: 'Ichalkaranji',
}

console.log(person.name);
console.log(person.age);
console.log(person.city);

console.log('Name:', person.name, ',', 'Age:', person.age, ',', 'City:', person.city);



//Array Object
const student = [
    { name: 'Iram', age: 19, city: 'Kolhapur' },
    { name: 'Rabiya', age: 20, city: 'Kabnoor' },
    { name: 'Sana', age: 18, city: 'Chandoor' },
]
console.log(student.length);
console.log(student[0].name);


//Nested Object
const Student = {
    name: 'Iram Fakir',
    department: {
        name: 'IT',
        Location: 'First Floor'
    }
};
console.log(Student.department.Location);



const Key = 'name';
const value = 'Iram';
const obj = {
    [Key]: value
}
console.log(obj);


const College={
    clgname:'SIT',
    dept : [
        {names:'CO', Loc:'First Floor'},
        {names:'CSIT', Loc:'Second Floor'},
        {names:'Mecanical',Loc:'Third Floor'}
    ],
    colname:'DKTE',
    stud : [
        {rollno:3, marks:34},
        {rollno:6, marks:67},
    ]
}
console.log(College.dept[0].names);
console.log(College.stud[1]);


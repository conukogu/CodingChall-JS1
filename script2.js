let x=63;
let y=42;

function min (x, y)
{
    return Math.min(x,y);
    console.log(`The minimum between ${x} and ${y} is ${Math.min(x,y)}`);
}

min(x,y);

var students = [
    {firstName:"Jane", lastName:"Doe", age:29},
    {firstName:"Jyn", lastName:"Dove", age:56},
    {firstName:"John", lastName:"Deer", age:16}
];

console.log(`Hello my name is ${students[1].firstName} ${students[1].lastName} and I am ${students[1].age} years old`);

let m = window.prompt("Enter a number from 1 to 12");

while(m<1 || m>12 || isNaN(m) == true || Number.isInteger(parseFloat(m)) == false)
{
    alert("Error! You typed an invalid number!") 
    m = window.prompt ("Please enter a number from 1 to 12.");
}

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(`The corresponding month is ${months[m-1]}`)

tomH=9;
tomM=8;

jerryH=10;
jerryM=45;

function BMI (m, h)
{
    //convert g to lbs before equation
    m *= 0.002205;
    return m/Math.pow(h, 2);
}

var stat = Boolean(BMI(tomM, tomH) > BMI(jerryM, jerryH));
console.log(`Is Tom's BMI higher than Jerry's? It seems that the answer is ${stat}!`)
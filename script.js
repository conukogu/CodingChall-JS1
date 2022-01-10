console.log ("Guten Morgen. Ich bin Chioma.")
alert("Welcome to the Page!");

var x=10;
var y=7;

console.log(`The difference between ${x} and ${y} is ${x-y}`);

a=window.prompt("Type a name.");
b=window.prompt("Type another name.");

if (Math.max(a.length,b.length)===a.length && a.length-b.length===1)
{console.log(`The name ${a} is longer than ${b} by ${a.length-b.length} character`)}

else if (Math.max(a.length,b.length)===a.length && a.length-b.length>1)
{console.log(`The name ${a} is longer than ${b} by ${a.length-b.length} characters`)}

else if (Math.max(a.length,b.length)===b.legth && b.length-a.length===1)
{console.log(`The name ${b} is longer than ${a} by ${b.length-a.length} character`)}

else if (Math.max(a.length,b.length)===b.length && b.length-a.length>1)
{console.log(`The name ${b} is longer than ${a} by ${b.length-a.length} characters`)}

else 
{console.log(`The name ${a} and ${b} are the same length of characters`)};


c=window.prompt("Enter a word");

if(c==c.toLowerCase())
{console.log("You're whispering. Please speak up!")}
else if(c==c.toUpperCase())
{console.log("You're to loud! There's no need to shout.")}
else
{console.log("Thank you for speaking normally")}


function add (x, y)
{
    return x+y;
}

function subtract (x, y)
{
    return x-y;
}

function multiply (x, y)
{
    return x*y;
}

function divide (x, y)
{
    return x/y;
}


g=window.prompt("Enter a number");


while (isNaN(g)==true)
{
    g=window.prompt("The entered value was not a number. Please enter a number.");
}

h=window.prompt("Please enter one of the following operators \n Type '+' for addition \n Type '-' for subtraction \n Type '*' for multiplication \n Type '/' for division");

i=window.prompt("Enter another number");

while (isNaN(i)==true)
{
    i=window.prompt("The entered value was not a number. Please enter a number.");
}

z=0

while (z===0)
{
    if (h==="+") 
    {
    console.log(`${g} + ${i} = ${add(g,i)}`)
    z=1
    }
    else if (h==="-") 
    {
    console.log(`${g} - ${i} = ${subtract(g,i)}`)
    z=2
    }
    else if (h==="*") 
    {
    console.log(`${g} * ${i} = ${multiply(g,i)}`)
    z=3
    }
    else if (h==="/") 
    {
    console.log(`${g} / ${i} = ${divide(g,i)}`)
    z=4
    }
    else
    {
    h=window.prompt("ERROR! Please enter a valid operator! \n(Your options are: \naddition[+] \nsubtraction[-] \nmultiplication[*] \ndivision[/]")
    }
}



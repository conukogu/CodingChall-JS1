console.log ("Guten Morgen. Ich bin Chioma.")
alert("Welcome to the Page!");

var x=10;
var y=7;

console.log(`The difference between ${x} and ${y} is ${x-y}`);

a=window.prompt("Type a name.");
b=window.prompt("Type another name.");

if (Math.max(a.length,b.length)===a.length && a.length-b.length===1){
    console.log(`The name ${a} is longer than ${b} by ${a.length-b.length} character`)
    document.getElementById("name").innerHTML=`The name ${a} is longer than ${b} by ${a.length-b.length} character`
}


else if (Math.max(a.length,b.length)===a.length && a.length-b.length>1){
    console.log(`The name ${a} is longer than ${b} by ${a.length-b.length} characters`)
    document.getElementById("name").innerHTML=`The name ${a} is longer than ${b} by ${a.length-b.length} characters`
}

else if (Math.max(a.length,b.length)===b.legth && b.length-a.length===1){
    console.log(`The name ${b} is longer than ${a} by ${b.length-a.length} character`)
    document.getElementById("name").innerHTML=`The name ${b} is longer than ${a} by ${b.length-a.length} character`
}

else if (Math.max(a.length,b.length)===b.length && b.length-a.length>1){
    console.log(`The name ${b} is longer than ${a} by ${b.length-a.length} characters`)
    document.getElementById("name").innerHTML=`The name ${b} is longer than ${a} by ${b.length-a.length} characters`
}

else {
    console.log(`The name ${a} and ${b} are the same length of characters`)
    document.getElementById("name").innerHTML=`The name ${a} and ${b} are the same length of characters`
};


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
    }}

    //Time to review Arrays!

    //Arrays can be innitialized in two ways:
    //The first is var NAME=[];
    //The second is var NAME=new Array();
    //Arrays can hold all a lot of types of info.
    var numbers = [19, 17, 3, 7, 21, 23, 6];

    var names = ["Patrick", "Zendaya", "Daniel", "Chioma", "Iman"];

    var games = new Array ("MW2", "Overwatch", "2K15", "Sims3");

    console.log(numbers[4]); //This will print 21 bc the #21 is the 4th numeral in the array. Remeber that arrays start counting at 0;

    var myPod = ["Brenden", "Puran", "Chioma", "Yasmine", "Giselle"];

    console.log(`There are ${myPod.length} people inside of ${myPod[2]}'s group.`)

    var roster=window.prompt("Type in a name");

    // if (myPod.includes(roster)===true) <---Superior method imho
    
    if (myPod.indexOf(roster)!=-1){
        console.log(`${roster} is a member of my Pod group`)    
    }

    else {
        console.log(`${roster} is NOT a member of my Pod group`)    
    }


    /* Reggie's NOTES!

    var numbers = [19, 17, 3, 7, 21, 23, 6]

var names = ["Patrick", "Zendaya", "Daniel", "Chioma", "Iman"]

var games = new Array("MW2", "Overwatch", "2K15", "Sims3", "Crash Bandicoot")

var anime = ["Re:Zero", "Demon Slayer", "Naruto", "Death Note", "Black Clover"]



var checkNames = names.indexOf("Iman")

if(checkNames !== -1){
    console.log("They are in this class")
} else{
    console.log("They are not in this class")
}

function checkNames(name){

    var nameCheck = names.indexOf(name)

    if(nameCheck !== -1){
    console.log(`${name} is in this class`)
} else{
    console.log(`${name} is not in this class`)
}
}

checkNames("Chioma")

if (names.includes("Patrick")){
    console.log("Brian is my pod leader");
} else{
    console.log("Brian is not my pod leader");
}


for(var i=0; i<numbers.length; i++){

    sum += numbers[i]

}
console.log(sum)*/

function pathgy (x1, x2)
{
function square (x)
{
   Math.pow(x, 2) 
   return x;
} 

x1=square(x1);
x2-square(x2);

let x3=x1+x2;

x3=Math.sqrt(x3);
return x3;
}

l=5;
m=5;

console.log(pathgy(l,m));
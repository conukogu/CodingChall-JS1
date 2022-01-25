function exercise(activity){
    console.log(`Today's exercise: ${activity}`)
  }
  var swim = exercise('swimming');
  var run = exercise('running');

var sharePizza = cutPizzaSlices(8)

var slices;



var sharePizza = function (n) {
  n = slices / n;
  return n;
}



function cutPizzaSlices(n) {
  slices = n;
}




console.log(sharePizza(2));

console.log(sharePizza(3));


var public = function () {

  var pii = {
    name: "Dr. Doofenshmirtz",
    ssn: "224-22-0009"
  }

  var getName = function () {
    return pii.name;
  }

  return getName();
}


console.log(public());

class Person {

  constructor(name1, job, age) {
    this.name1 = name1;
    this.job = job;
    this.age = age;
  }

  exercise() {
    console.log("Running is pain. Just walk bro!")
  }

  fetchJob() {
    console.log(`${this.name1} works as a ${this.job}`)
  }
}

var Tester = new Person("John Doe", "Fall-guy", "4000")

Tester.exercise();
Tester.fetchJob();



class Programmer extends Person {
  constructor(name1, job, age, lang) {
    super(name1, job, age);
    this.languages = lang;
    this.busy=true;
  }

  completeTask() {
/*console.log(`${this.name1} works as a ${this.job} and he speaks ${this.languages}`)*/
this.busy=false;
  }

  acceptNewTask(){
    this.busy=false;
  }

  offerNewTask(){
    if (this.busy===true){
      console.log(`${this.name1} can't accept any new responsibilities right now`)}
      else
      {
        console.log(`${this.name1} would love to take on a new responsibility!`)
      }
    }

    learnLanguage(tounges){
      this.languages+= ","+tounges; 
    }

    listLanguages(){
      console.log(this.languages)
    }

  }


const Tester2 = new Programmer("Jolly", "Scavenger", "5006", "Klingon")

Tester2.learnLanguage(["Elvish", "The Arcane Tounge", "French", "High Dwarvish"]);
Tester2.listLanguages();

Tester2.offerNewTask();
Tester2.acceptNewTask();
Tester2.offerNewTask();
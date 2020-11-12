//Person Constructor
const Person = function (name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
}

Person.prototype.exercise = function () {
    console.log("I work out everyday!")
}

Person.prototype.fetchJob = function () {
    console.log(`${this.name} is a ${this.job}`)
}


const carlo = new Person("Carlo", "Software Developer", 23)


// Programmer Constructer
const Programmer = function (name, job, age, language) {
    Person.call(this, name, job, age)
    this.language = language;
    this.busy = true;
    this.learnedLang = [language]
}

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;

// Programmer Methods
Programmer.prototype.completeTask = function () {
    this.busy = false;
}

Programmer.prototype.acceptNewTask = function () {
    this.busy = true;
}

Programmer.prototype.offerNewTask =  function () {
    console.log(this.busy ? `${this.name} can't accept any new tasks right now` : `${this.name} would love to take on a new responsibility.`)
}

Programmer.prototype.learnLanguage = function(a) {
    this.learnedLang.push(a)
}

Programmer.prototype.listLanguages = function () {
    console.log(this.learnedLang)
}



let ted = new Programmer("Ted", "Worker", 43, "java")
let fred = new Programmer("Fred", "Back-end developer", 25, "Javascript")

ted.learnLanguage("js")
ted.listLanguages()
console.log(ted)
fred.completeTask();
console.log(fred)

ted.offerNewTask();
fred.offerNewTask();


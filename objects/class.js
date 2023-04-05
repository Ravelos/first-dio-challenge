class Person{
  name;
  age;
  birthyear;

  // This tells us what happens when the class is instanciated
  constructor(name,age){
    this.name = name;
    this.age = age;
    this.birthyear = 2023 - age;
  }

  describePerson(){
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  }
}

// const albert = new Person('Albert', 50);

// const caleb = new Person();
// caleb.age = 3;
// caleb.name = 'Caleb Daniel';

// const juan = new Person();
// juan.age = 7;
// juan.name = 'Juan Pablo';

// const person = {
//   name: "Oswaldo Ravelo",
//   age: 37,

//   describe: function () {
//     console.log(`My name is ${this.name} and my age is ${this.age}`);
//   },
// };

// person.name = 'Tito';
// person.age = 40;

// person.describe();

// const attribute = 'age';

// console.log(person[attribute]);
// console.log(person['name']);

// // This is a more dynamic way to access the attribute
// person['name'] = 'Andreina';
// console.log(person.name);

// person.name = 'Fernando';

// console.log(person.name);

// console.log(caleb);
// console.log(juan);

// juan.describePerson();
// caleb.describePerson();
// albert.describePerson();

// console.log(albert);

function comparePeople(p1, p2){
  if(p1.age > p2.age){
    console.log(`${p1.name} is older than ${p2.name}`);
  } else if(p1.age < p2.age){
    console.log(`${p2.name} is older than ${p1.name}`);
  }else{
    console.log(`${p1.name} and ${p2.name} are the same age`);
  }
}

const tito = new Person('Tito', 42);
const oswaldo = new Person('Oswaldo', 37);

comparePeople(tito, oswaldo);
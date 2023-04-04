const person = {
  name: "Oswaldo Ravelo",
  age: 37,

  describe: function () {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  },
};

person.describe();


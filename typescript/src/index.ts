type hero = {
  name: string;
  nick: string;
};

function printObject(person: hero) {
  console.log(person);
}

printObject({
  name: "Bruce Wayne",
  nick: "Batman",
});

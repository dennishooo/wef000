let me = {
  name: "dennis",
};

function greet() {
  console.log(`hi, im ${this.name}`);
}

me.__proto__.greet = greet;

me.greet();

function MakePerson(name, age) {
  (this.name = name),
    (this.age = age),
    (this.getOld = function () {
      // console.log("getting old...", this.age);

      this.age++;
      // console.log("getting old...", this.age);
    }),
    (getYoung = () => {
      this.age--;
    });
  return { name, age, getOld };
}

let dennis = MakePerson("dennis", 10);

console.log(dennis);
dennis.getOld();
dennis.getOld();
dennis.getOld();
console.log(dennis);

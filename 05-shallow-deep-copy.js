let james = {
  alias: "james",
  girlfriends: [
    {
      name: "polly",
      tech: ["js", "ts"],
    },
  ],
  age: 80,
};

let markus = JSON.parse(JSON.stringify(james));
let frank = { ...james };

frank.girlfriends[0].name = "maggie";

console.dir(frank, { depth: 3 });
console.dir(james, { depth: 3 });
console.dir(markus, { depth: 3 });

let { alias, ...other } = james;

console.log(alias);
console.log(other);

let that = { ...other };

// shallow copy would affect the original object
that.girlfriends.name = "eunice";

console.log(that.girlfriends);
console.log(other.girlfriends);
console.dir(james, { depth: 3 });
console.dir(frank, { depth: 3 });

let partialJames = {};
for (let prop in james) {
  partialJames[prop] = james[prop];
}

partialJames.alias = "half james";
partialJames.girlfriends.push({ name: "mandy" });

console.log(partialJames);
console.log(james);

let james = {
  name: "james",
};

let peter = james;

peter.name = "peter";

console.log(peter);
console.log(peter === james);

let mary = {
  name: "peter",
};

console.log(mary === peter);

let ann = { ...mary };

console.log(ann);

console.log(ann === mary);

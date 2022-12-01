function greet() {
  // run when reached
  let name = getName();
  let day = getDay();
  console.log(`hi, ${name}, ${day}`);
}

function getName() {
  let title = getTitle();
  return `${title} james`;
}

function getTitle() {
  return "mr";
}

function getDay() {
  return "it's sunday!";
}

// 1. add to call stack and carry out
greet();

// delete after finished
let a = {}

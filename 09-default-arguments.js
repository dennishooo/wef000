// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

function count() {
  let start = 1000000000;
  console.log("start", start);
  for (let argument of arguments) {
    console.log(argument);
    start += argument;
  }
  return start;
  // console.log(arguments[2]);
}

console.log("total", count(123, 435, 34545, 14, 3534, 542, 1343, 4));

function getObj({ age = 10, name }) {
  return { age, name };
}

console.log(getObj({ name: "gary" }));

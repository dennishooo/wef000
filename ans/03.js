const prompt = require("prompt-sync")();

const START = 0;
const END = 10;

function getAns(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let ans = getAns(START, END);
let min = START;
let max = END;
let attempts = 0;

let attempt;

while (attempt != ans && attempts < 3) {
  console.log(`the value is between ${min} and ${max}`);
  attempt = parseInt(prompt("please input a value? "));
  if (isNaN(attempt))
    attempt = parseInt(
      prompt(`wrong input! please input a number between ${min} and ${max}? `)
    );
  if ((attempt < min) | (attempt > max))
    attempt = parseInt(
      prompt(`wrong range! please input a number between ${min} and ${max}? `)
    );
  if (attempt > ans) max = attempt;
  else min = attempt;
  attempts++;
}

if (attempts < 3) console.log(`congrat! the ans is ${ans}!`);
else console.log("you've lost! dumb ass!");

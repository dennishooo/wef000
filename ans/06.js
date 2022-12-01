const MAX_MARK_SIX = 20;

function checkMarkSix(prizes, guesses) {
  let matches = 0;
  for (let guess of guesses) {
    if (prizes.includes(guess)) matches++;
  }
  return matches >= 2;
}

// console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [1, 3])); // returns: true
// console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [2, 3])); // returns: false
// console.log(checkMarkSix([2, 4, 10, 15, 14, 19], [2, 19])); // returns: true

function randomPick(num) {
  let guesses = new Set();
  while (guesses.size < num) {
    guesses.add(Math.floor(Math.random() * MAX_MARK_SIX + 1));
  }
  return Array.from(guesses);
}

function quickPicks(prizes, num) {
  let result = [];
  for (let i = 0; i < num; i++) {
    let bid = randomPick(2);
    let win = checkMarkSix(prizes, bid);
    result.push({ bid, win });
    setTimeout(() => {
      console.log("your pick: ", bid);
      console.log(win ? "WIN" : "LOSE");
    }, interval);
    interval += 1000;
  }
  console.log("the mark six result is ", prizes.join(", "));
  return result;
}
let interval = 1000;

quickPicks([1, 3, 5, 7, 9, 11], 10);

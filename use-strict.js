// "use strict";

let msg;

// direct assignment of variable
hi = "hi";

// duplicated declaration of field
let james = {
  name: "james",
  name: "mary",
};

// cant delete a non existed variable
// delete dennis;

//simple call's this not in global
alias = "gg";
let auntie = { alias: "aunt mary" };
function hiAuntie() {
  console.log("hi", this.alias);
}
hiAuntie();

hiAuntie.call(auntie);

function sayHi() {
  "use strict";
  msg = "hi";
  console.log(msg);
}

sayHi();

console.log(james);

//hoisting
console.log(phone);
// let phone = "67708791"; // cannot access 'phone' before initialization
phone = "67708791"; //  phone is not defined

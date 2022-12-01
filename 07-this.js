// Arrow functions don't have their own bindings to this, arguments or super, and should not be used as methods.
// Arrow functions don't have access to the new.target keyword.
// Arrow functions aren't suitable for call, apply and bind methods, which generally rely on establishing a scope.
// Arrow functions cannot be used as constructors.
// Arrow functions cannot use yield, within its body.

let wtf = "gg";

let dennis = {
  name: "dennis",
  greet: () => {
    console.log(this);
  },
  getThis() {
    console.log(this);
  },
};

dennis.shout = () => {
  console.log(this);
};

let cry = function () {
  console.log(this);
}.bind(wtf);

dennis.cry = cry;

// let d = dennis.greet;
// d.call(dennis);

// let c = d.bind(dennis);

// c();

dennis.getThis();
dennis.greet();
dennis.shout();
dennis.cry();

// arrow function's this is bound with window

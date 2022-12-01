function buyItem(money) {
  // console.log("basic", this);
  let myMoney = money;
  return (price) => {
    // console.log("returning", this);
    let that = this;
    myMoney -= price;
    return { myMoney, that };
  };
}

let reemo = buyItem(1000);
let beeno = buyItem(10000);

console.log(reemo(30));

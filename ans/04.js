function reverseString(str) {
  let ans = [];
  for (let char of str) {
    ans.unshift(char);
  }
  return ans.join("");
}

console.log(reverseString("asfafu934ifqfwef/sdx./vf.;vfddf"));


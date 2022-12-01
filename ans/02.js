function isLeapYear(year) {
  // % 4 == / % 400 == 0 % 100 != 0
  if (year % 100 === 0 && year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  else return false;
}

function main() {
  console.log(isLeapYear(1997));
  console.log(isLeapYear(1996));
  console.log(isLeapYear(1900));
  console.log(isLeapYear(1700));
  console.log(isLeapYear(1800));
  console.log(isLeapYear(800));
  console.log(isLeapYear(1200));

  console.log(isLeapYear(2000));
}

main();

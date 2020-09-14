import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8");
const a = +input;

console.log(lucasNumber(a));

function lucasNumber(n: number): BigInt {
  if (n === 0) {
    return 2n;
  } else if (n === 1) {
    return 1n;
  } else {
    return lucasNumber(n - 1) + lucasNumber(n - 2);
  }
}

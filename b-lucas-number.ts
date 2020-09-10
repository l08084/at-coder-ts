import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8");
const a = +input;

console.log(lucasNumber(a));

function lucasNumber(n: number): number {
  if (n === 0) {
    return 2;
  } else if (n === 1) {
    return 1;
  } else {
    return lucasNumber(n - 1) + lucasNumber(n - 2);
  }
}

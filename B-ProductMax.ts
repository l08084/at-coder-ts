import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8");
const a = +input.split(" ")[0];
const b = +input.split(" ")[1];
const c = +input.split(" ")[2];
const d = +input.split(" ")[3];

let x = a;
let y = c;
let tempMax = x * y;

for (let i = a; i <= b; i++) {
  x = i;
  for (let j = c; j <= d; j++) {
    y = j;
    if (x * y > tempMax) {
      tempMax = x * y;
    }
  }
}

console.log(`${tempMax}`);

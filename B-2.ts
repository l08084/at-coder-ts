import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8");
const a = +input.split(" ")[0];
const b = +input.split(" ")[1];
const c = +input.split(" ")[2];
const d = +input.split(" ")[3];

let x = b;
let y = d;

if (a < 0 && c < 0) {
  if (a * c > b * d) {
    x = a;
    y = c;
  }
} else if (b < 0 && d >= 0) {
  x = b;
  y = c;
} else if (b >= 0 && d < 0) {
  x = a;
  y = d;
}
console.log(x * y);

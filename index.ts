import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8");
const a: BigInt = BigInt(+input.split(" ")[0]);
const b: BigInt = BigInt(+input.split(" ")[1]);
const c: BigInt = BigInt(+input.split(" ")[2]);
const d: BigInt = BigInt(+input.split(" ")[3]);

// const a = -1000000000;
// const b = 0;
// const c = -1000000000;
// const d = 0;

let x = a;
let y = c;
let tempMax: BigInt = BigInt(x) * BigInt(y);

for (let i: BigInt = a; i <= b; i = BigInt(i) + BigInt(1)) {
  x = i;
  for (let j: BigInt = c; j <= d; j = BigInt(j) + BigInt(1)) {
    y = j;
    if (BigInt(x) * BigInt(y) > BigInt(tempMax)) {
      tempMax = BigInt(x) * BigInt(y);
    }
  }
}

console.log(`${tempMax}`);

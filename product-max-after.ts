import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8");
const a = +input.split(" ")[0];
const b = +input.split(" ")[1];
const c = +input.split(" ")[2];
const d = +input.split(" ")[3];

const ac = BigInt(a) * BigInt(c);
const ad = BigInt(a) * BigInt(d);
const bc = BigInt(b) * BigInt(c);
const bd = BigInt(b) * BigInt(d);

let max: BigInt;

if (ac >= ad && ac >= bc && ac >= bd) {
  max = ac;
} else if (ad >= ac && ad >= bc && ad >= bd) {
  max = ad;
} else if (bc >= ac && bc >= ad && bc >= bd) {
  max = bc;
} else if (bd >= ac && bd >= ad && bd >= bc) {
  max = bd;
}

console.log(`${max}`);

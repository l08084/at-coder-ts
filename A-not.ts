import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8");
const x = +input;

console.log(x === 0 ? 1 : 0);

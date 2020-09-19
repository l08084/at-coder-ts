import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8");
const S = input;

const end = input.slice(-1);

if (end === "s") {
  console.log(`${S}es`);
} else {
  console.log(`${S}s`);
}

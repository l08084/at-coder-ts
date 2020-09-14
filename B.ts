import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8");
const a = +input.split(" ")[0];
const b = +input.split(" ")[1];
const c = +input.split(" ")[2];
const d = +input.split(" ")[3];

let x, y;

if (a >= 0 && b >= 0 && c >= 0 && d >= 0) {
  if (a >= b) {
    x = a;
  } else {
    x = b;
  }

  if (c >= d) {
    y = c;
  } else {
    y = d;
  }
} else if (a >= 0 && b >= 0 && c < 0 && d < 0) {
  if (a < b) {
    x = a;
  } else {
    x = b;
  }

  if (c >= d) {
    y = c;
  } else {
    y = d;
  }
} else if (a < 0 && b < 0 && c >= 0 && d >= 0) {
  if (a >= b) {
    x = a;
  } else {
    x = b;
  }

  if (c < d) {
    y = c;
  } else {
    y = d;
  }
} else {
  if (a >= b) {
    x = a;
  } else {
    x = b;
  }

  if (c >= d) {
    y = c;
  } else {
    y = d;
  }
}
console.log(x * y);

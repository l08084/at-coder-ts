import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8");
const N = +input;

const L: BigInt[] = Array(N + 1);

if (N === 1) {
  L[N] = BigInt(1);
} else {
  L[0] = BigInt(2);
  L[1] = BigInt(1);

  for (let i = 2; i <= N; i++) {
    L[i] = BigInt(L[i - 1]) + BigInt(L[i - 2]);
  }
}

console.log(String(L[N]));

const hasPassport = true;
if (hasPassport) {
  console.log("kamu boleh ke luar negeri");
} else {
  console.log("kamu TIDAK boleh ke luar negeri");
}
console.log(hasPassport);

//comparation operator
//sama dengan (===)
const stock = 0;
if (stock === 0) {
  console.log("Produk habis");
} else {
  console.log("produk tersedia");
}
//Tidak sama dengan (!==)
const x = 1;
const y = 2;
if (x !== y) {
  console.log("Benar");
} else {
  console.log("Salah");
}
//Lebih dari >
const a = 10;
const b = 5;
if (a > b) {
  console.log("Benar");
} else {
  console.log("salah");
}
//Kurang dari <
const c = 8;
const d = 4;
if (c < d) {
  console.log("Benar");
} else {
  console.log("Salah");
}
//Lebih dari atau sama dengan >=
const f = -1;
const g = 2;
if (f <= g) {
  console.log("Benar");
} else {
  console.log("Salah");
}
//Kurang dari atau sama dengan <=
const h = 0.5;
const i = 0;
if (0.5 <= 0) {
  console.log("Benar");
} else {
  console.log("Salah");
}
//conditional string
const value1 = "abc" === "abc";
console.log(value1);
const value2 = false !== true;
console.log(value2);
const value3 = "cab" === "cba";
console.log(value3);
const value4 = false === false;
console.log(value4);

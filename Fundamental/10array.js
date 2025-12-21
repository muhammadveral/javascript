const usernames = ["andi", "ardi", "yanto", "dimas"];
const text = "ada " + usernames.length + " username aktif";
console.log(text);
//mengambil index dari array yang ada dalam variable
console.log(usernames[1]);

//mencari array yang ada dalam variable dengan menggunakan variabel.includes()
const searchUser = usernames.includes("ardi");
if (searchUser) {
  console.log("Username tersedia");
} else {
  console.log("Username tidak tersedia");
}
console.log("----------------------------------------");
const favoritFood = ["mie ayam", "nasi goreng", "kwetiaw", "sate"];
const text2 = "aku mempunyai " + favoritFood.length + " makanan favorit";
console.log(text2);
console.log("yang pertama adalah " + favoritFood[0]);
console.log("yang kedua adalah " + favoritFood[1]);
console.log("yang ketiga adalah " + favoritFood[2]);
console.log("yang ke-empat adalah " + favoritFood[3]);

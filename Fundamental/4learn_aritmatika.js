const apel = 5000;
const total_apel = 3;
const pisang = 10000;
const total_pisang = 2;
const diskon = 15000;
const diskon_persen = 0.1;
const text_apel = "harga pembelian 3 apel adalah " + apel * total_apel;
const text_pisang = "harga pembelian 2 pisang adalah " + pisang * total_pisang;
const text_diskon =
  "diskon dari pembelian " +
  total_apel +
  " apel" +
  " dan " +
  total_pisang +
  " pisang adalah " +
  diskon;
const price = "total belanja = " + (apel * total_apel + pisang * total_pisang);
const numberprice = apel * total_apel + pisang * total_pisang;
const price_diskon_persen =
  // ada baiknya string tidak dicampur dikarenakan apabila dicampur bisa menyebabkan eror NaN dalam pemanggilan
  "[potongan 10%] = " +
  (apel * total_apel + pisang * total_pisang) * diskon_persen;
const numberdiscount =
  (apel * total_apel + pisang * total_pisang) * diskon_persen;
const priceall = numberprice - numberdiscount;
console.log(text_apel);
console.log(text_pisang);
console.log(price);
console.log(price_diskon_persen);
console.log(priceall);

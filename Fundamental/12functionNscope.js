function tellYourName(yourName, addreess) {
  console.log(
    "perkenalkan nama saya adalah " +
      yourName +
      "dan saya tinggal di " +
      addreess
  );
}
tellYourName("andika", "pengkol");
tellYourName("ahmad", "saripan");
tellYourName("veral", "pengkol");

console.log("--------------------");

function numberic(number) {
  if (number < 0) {
    console.log("NEGATIF");
  } else if (number > 0) {
    console.log("POSITIF");
  } else {
    console.log("NETRAL");
  }
}
numberic(-10);
numberic(0);
numberic(10);
console.log("--------------------");

function add(x, y) {
  const z = x + y;
  console.log(x + " ditambah " + y + " sama dengan " + z);
}
add(8, 2);
console.log("--------------------");
function getNumber(a, b) {
  const c = a * b;
  return c;
}
const result = getNumber(2, 4);

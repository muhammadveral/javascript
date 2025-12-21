const students = {
  Azka: 75,
  Bagas: 65,
  Veral: 50,
  Yafi: 85,
  Ahmad: 70,
  Azzam: 100,
  Isnal: 85,
  Ardi: 80,
  Roy: 85,
  Dandi: 50,
};
function checkScored(data) {
  return Object.entries(data).map(([nama, nilai]) => {
    return `Nama: ${nama} 
    Nilai: ${nilai}`;
  });
}
const hasil = checkScored(students);
console.log(hasil);

function predikat(data) {
  return Object.entries(data).map(([nama, nilai]) => {
    let grade;
    if (nilai >= 85) {
      grade = "A";
    } else if (nilai >= 75) {
      grade = "B";
    } else if (nilai >= 65) {
      grade = "C";
    } else {
      grade = "D";
    }
    return `--nama: ${nama}-- --Nilai:${nilai}-- --Predikat:${grade}--`;
  });
}
const hasilPredikat = predikat(students);
console.log(hasilPredikat);

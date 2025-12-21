const yourStudent = {
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
//AMBIL DATA OBJECT KESELURUHAN MENJADI ARRAY
function cekNilai(data) {
  return Object.entries(data).map(([orang, nilai]) => {
    return `${orang} mendapatkan nilai ${nilai}`;
  });
}

//PREDIKAT NILAI

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
const hasilPredikat = predikat(yourStudent);
console.log(hasilPredikat);

//CEK DATA YANG MENJADI ARRAY UNTUK MENGETAHUI KELULUSAN
function cekKKM(data) {
  return Object.entries(data).map(([orang, nilai]) => {
    const status = nilai >= 75 ? "LULUS" : "TIDAK LULUS";
    return `NAMA: ${orang} --NILAI: ${nilai} --STATUS: (${status})`;
  });
}
const hasilCekKKM = cekKKM(yourStudent);
console.log(hasilCekKKM);
//PELAJARAN SELANJUTNYA ADALAH MEMBEDAKAN SISWA YANG LULUS DAN TIDAK LULUS
function cekLulus(data, kkm = 75) {
  return Object.values(data).reduce((total, nilai) => {
    return nilai >= kkm ? total + 1 : total;
  }, 0);
}
//HITUNG JUMLAH SISWA YANG LULUS
const jumlahSiswa = Object.keys(yourStudent).length;
console.log("Jumlah siswa keseluruhan :", jumlahSiswa);
const jumlahLulus = cekLulus(yourStudent);
console.log("Jumlah siswa yang lulus: ", jumlahLulus);
const jumlahTidakLulus = jumlahSiswa - jumlahLulus;
console.log("Jumlah siswa yang tidak lulus: ", jumlahTidakLulus);
console.log("-----------------------");
//CARI NILAI TERTINGGI, TERENDAH, DAN RATA"
function nilaiTertinggi(data) {
  const semuaNilai = Object.values(data);
  const max = Math.max(...semuaNilai);
  const siswa = Object.entries(data)
    .filter(([orang, nilai]) => nilai === max)
    .map(([orang, nilai]) => orang);
  return { max, siswa };
}
const hasilTertinggi = nilaiTertinggi(yourStudent);
console.log("nilai tertinggi: ", hasilTertinggi.max);
console.log("Siswa yang mendapatkan nilai tertinggi: ", hasilTertinggi.siswa);

function nilaiTerendah(data) {
  const semuaNilai = Object.values(data);
  const min = Math.min(...semuaNilai);
  const siswa = Object.entries(data)
    .filter(([orang, nilai]) => nilai === min)
    .map(([orang, nilai]) => orang);
  return { min, siswa };
}
const hasilTerendah = nilaiTerendah(yourStudent);
console.log("nilai terendah: ", hasilTerendah.min);
console.log("Siswa yang mendapatkan nilai terendah: ", hasilTerendah.siswa);

const dataSnack = [
  {
    nama: "Roti Pisang",
    produkAwal: 20,
    hargaPenyetor: 3500,
    hargaJual: 4000,
  },
];
const dataTransaksi = [];

function transaksiDataSnack(nama, jumlahTerjual) {
  const snack = dataSnack.find((item) => item.nama === nama);
  if (!snack) {
    console.log("ERROR: Data tidak tersedia!");
    return;
  }
  if (jumlahTerjual <= 0) {
    console.log("ERROR: Jumlah tidak Valid");
    return;
  }
  if (snack.produkAwal < jumlahTerjual) {
    console.log("ERROR: Stock tidak cukup!");
    return;
  }
  snack.produkAwal -= jumlahTerjual;
  const labaPerSnack = snack.hargaJual - snack.hargaPenyetor;
  const labaTransaksi = labaPerSnack * jumlahTerjual;
  const operasionalUangMasuk = snack.hargaJual * jumlahTerjual;
  const operasionalUangKeluar = snack.hargaPenyetor * jumlahTerjual;

  const transaksi = {
    nama,
    jumlahTerjual,
    operasionalUangMasuk,
    operasionalUangKeluar,
    laba: labaTransaksi,
    tanggal: new Date().toISOString().split("T")[0],
  };
  dataTransaksi.push(transaksi);
}

const dataKasKeluar = [];
function uangKeluar(keterangan, nominal) {
  if (nominal <= 0) {
    console.log("ERROR: Nominal tidak valid");
    return;
  }
  const arusKeluar = {
    nominal,
    keterangan,
    tanggal: new Date().toISOString().split("T")[0],
  };
  dataKasKeluar.push(arusKeluar);
}
uangKeluar("Bayar listrik", 205000);
uangKeluar("Jumat berkah", 50000);
//mengambil data uang keluar dari const= dataKasKeluar[] dan menyimpan di laporanMingguan()
//menghitung pendapatan bersih mingguan dari laporan harian di input ke laporanmingguan
//mengumpulkan keuntungan setiap produk
//cara menghitung laporan harian bersih dengan mengurangi labaTotal dengan nominal pengeluaran
function laporanMingguan() {
  const awal = new Date();
  const akhir = new Date();
  akhir.setDate(awal.getDate() - 6);

  const tanggalAwal = new Date().toISOString().split("T")[0];
  const tanggalAkhir = new Date().toISOString().split("T")[0];

  const laporan = {};
  dataTransaksi.forEach((transaksi) => {
    if (transaksi.tanggal < tanggalAwal || transaksi.tanggal > tanggalAkhir)
      return;
    if (!laporan[transaksi.nama]) {
      laporan[transaksi.nama] = {
        nama: transaksi.nama,
        jumlahTransaksi: 0,
        jumlahTerjual: 0,
        labaTotal: 0,
      };
    }
    laporan[transaksi.nama].jumlahTransaksi += 1;
    laporan[transaksi.nama].jumlahTerjual += transaksi.jumlahTerjual;
    laporan[transaksi.nama].labaTotal += transaksi.laba;
  });
  return Object.values(laporan);
}
transaksiDataSnack("Roti Pisang", 4);
transaksiDataSnack("Roti Pisang", 14);
transaksiDataSnack("Roti Pisang", 2);

console.table(dataTransaksi);
console.table(dataKasKeluar);
console.table(laporanMingguan());

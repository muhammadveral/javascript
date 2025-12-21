function checkPassword(inputPassword) {
  const truePassword = "IniPassword";

  if (!inputPassword) {
    console.log("PASSWORD BELUM TERISI");
    return "PASSWORD BELUM TERISI";
  }
  if (inputPassword === truePassword) {
    console.log("PASSWORD BENAR");
    return "PASSWORD BENAR";
  } else if (inputPassword.length < 8) {
    console.log("PASSWORD TERKOREKSI KURANG PANJANG");
    return "PASSWORD TERKOREKSI KURANG PANJANG";
  } else {
    console.log("PASSWORD SALAH");
    return "PASSWORD SALAH";
  }
}
checkPassword("INIADALAHPASSWORD");

const users = [
  { username: "admin1", password: "password1" },
  { username: "admin2", password: "password2" },
  { username: "admin3", password: "password3" },
];

function login(username, password) {
  const user = users.find((u) => u.username === username);

  if (!user) {
    console.log("User tidak ditemukan");
    return !user;
  } else if (user.password !== password) {
    console.log("Password salah!");
    return "Password salah!";
  } else {
    console.log("Login Success");
    return "Login Success";
  }
}
login("admin", "password2");
login("admin1", "password1");
login("admin2", "passwordsalah");

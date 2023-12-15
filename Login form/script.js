function loadData() {
  let username = document.getElementById("uname").value;
  let password = document.getElementById("pass").value;

  let user_record = new Array();

  user_record = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (
    user_record.some((e) => {
      return e.username == username && e.password == password;
    })
  ) {
    alert("Login successful !!");
    let current_user = user_record.filter((e) => {
      return e.username == username && e.password == password;
    })[0];

    localStorage.setItem("username", current_user.username);
    localStorage.setItem("password", current_user.password);
    window.location.href = "profile.html";
  } else {
    alert("Login Failed !! Enter correct credentials.");
  }
}

function saveData() {
  let name = document.getElementById("name").value;
  let username = document.getElementById("uname").value;
  let password = document.getElementById("pass").value;

  let user_records = new Array();

  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  if (
    user_records.some((e) => {
      return username.length < 8 || password.length < 8;
    })
  ) {
    alert("Length of username/password should be atleast 8 characters !!");
  }
  if (
    user_records.some((e) => {
      return e.username == username;
    })
  ) {
    alert("User already exists in system !! Sign in to continue.");
  } else {
    user_records.push({
      "name": name,
      "username": username,
      "password": password
    });
    localStorage.setItem("users", JSON.stringify(user_records));
  }
}

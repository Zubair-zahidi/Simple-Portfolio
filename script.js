document.getElementById('star').style.visibility = "hidden";
document.getElementById('stars').style.visibility = "hidden";

function afghan() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "Zubair" && password === "Kardan") {
    window.location.href = "portfolio.html"; 
  } else {
    document.getElementById("error-message").innerText =
      "* Sorry username or password is incorrect";
    document.getElementById("star").style.visibility = "visible";
    document.getElementById("stars").style.visibility = "visible";
  }
}


function togglePassword() {
  const passwordInput = document.getElementById("password");
  const icon = document.getElementById("eyeIcon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.innerText = "🙈";
  } else {
    passwordInput.type = "password";
    icon.innerText = "👁️";
  }
}

function clearError() {
  document.getElementById("error-message").innerText = "";
  document.getElementById("star").style.visibility = "hidden";
  document.getElementById("stars").style.visibility = "hidden";
}

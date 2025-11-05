document.addEventListener("DOMContentLoaded", () => {
  const welcomeScreen = document.getElementById("welcome-screen");

  // Auto remove welcome screen after fadeOut animation
  setTimeout(() => {
    welcomeScreen.style.display = "none";
  }, 5000);
});

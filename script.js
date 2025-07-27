document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  message.textContent = "";
  message.style.padding = "10px";
  message.style.marginTop = "10px";

  if (email === "" || password === "") {
    message.style.color = "red";
    message.textContent = "Please fill in all fields.";
    return;
  }

  if (email === "abc123@gmail.com" && password === "123456") {
    message.style.color = "lightgreen";
    message.textContent = "Login successful! Redirecting...";

    // ✅ Redirect after 1 second
    setTimeout(() => {
      window.location.href = "index2.html"; // Change this to your desired page
    }, 1000);
  } else {
    message.style.color = "orange";
    message.textContent = "Invalid email or password.";
  }
});



"use strict";
const error = document.getElementById("cobalt-error");
const errorCode = document.getElementById("cobalt-error-code");
const registerButton = document.getElementById("cobalt-register-sw");

if (location.pathname.startsWith(__uv$config.prefix)) {
  error.textContent = "Error: The service worker is not registered.";
  registerButton.classList.add("show");
}

registerButton.addEventListener("click", async () => {
  try {
    await registerSW();
    location.reload();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    registerButton.classList.remove("show");
  }
});

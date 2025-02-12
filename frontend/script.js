const apiUrl = "http://localhost:5000/api/auth"; // Backend URL

// Registration
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const response = await fetch(`${apiUrl}/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();
            alert(data.msg);
            if (response.ok) window.location.href = "login.html";
        });
    }

    // Login
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const response = await fetch(`${apiUrl}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            alert(data.msg);
            if (response.ok) window.location.href = "dashboard.html";
        });
    }

    // Logout
    const logoutBtn = document.getElementById("logout");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", async () => {
            await fetch(`${apiUrl}/logout`, {
                method: "POST",
                credentials: "include",
            });
            alert("Logged out successfully");
            window.location.href = "login.html";
        });
    }
});

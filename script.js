document.addEventListener("DOMContentLoaded", () => {
  // -------------------------
  // Dashboard Progress Update
  // -------------------------
  const progressFill = document.getElementById("progressFill");
  if (progressFill) {
    let progress = 70;

    setInterval(() => {
      progress = (progress + 5) % 100; // cycle progress
      progressFill.style.width = progress + "%";
      progressFill.textContent = progress + "%";
    }, 3000);
  }

  // -------------------------
  // Opportunities Feed
  // -------------------------
  const list = document.getElementById("opportunityList");
  if (list) {
    const opportunities = [
      "Hackathon: AI for Social Good - Feb 20, 2026",
      "Internship: Data Science at TechCorp - March 2026",
      "Workshop: Cloud Computing Basics - April 2026",
      "Competition: National Coding Challenge - May 2026"
    ];

    opportunities.forEach(op => {
      const li = document.createElement("li");
      li.textContent = op;
      list.appendChild(li);
    });
  }

  // -------------------------
  // Login/Signup Toggle
  // -------------------------
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const showSignup = document.getElementById("showSignup");
  const showLogin = document.getElementById("showLogin");

  if (showSignup && showLogin && loginForm && signupForm) {
    showSignup.addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("hidden");
      signupForm.classList.remove("hidden");
    });

    showLogin.addEventListener("click", (e) => {
      e.preventDefault();
      signupForm.classList.add("hidden");
      loginForm.classList.remove("hidden");
    });

    // Demo login action
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Login successful! Redirecting to dashboard...");
      window.location.href = "index.html#dashboard";
    });

    // Demo signup action
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Signup successful! Redirecting to dashboard...");
      window.location.href = "index.html#dashboard";
    });
  }
});
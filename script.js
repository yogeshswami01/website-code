function showSignup() {
  document.getElementById("loginSection").style.display = "none";
  document.getElementById("signupSection").style.display = "block";
}

function showLogin() {
  document.getElementById("signupSection").style.display = "none";
  document.getElementById("loginSection").style.display = "block";
}

function signup() {
  let user = {
    name: document.getElementById("signupName").value,
    year: document.getElementById("signupYear").value,
    contact: document.getElementById("signupContact").value,
    college: document.getElementById("signupCollege").value
  };

  localStorage.setItem("userData", JSON.stringify(user));
  closeModal();
  personalizeDashboard(user);
}

function login() {
  let name = document.getElementById("loginName").value;
  let user = JSON.parse(localStorage.getItem("userData"));

  if (user && user.name === name) {
    closeModal();
    personalizeDashboard(user);
  } else {
    alert("User not found. Please sign up.");
  }
}

function closeModal() {
  document.getElementById("authModal").style.display = "none";
}

function personalizeDashboard(user) {
  document.getElementById("dashboard").innerHTML = `
    <h2>Welcome, ${user.name}!</h2>
    <p>Year: ${user.year}</p>
    <p>Contact: ${user.contact}</p>
    <p>College: ${user.college}</p>
    <h3>Your Personalized Learning Path</h3>
    <ul>
      <li>📚 Courses tailored for ${user.year} year students</li>
      <li>💼 Opportunities near ${user.college}</li>
      <li>📊 Progress tracking linked to your profile</li>
    </ul>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  // -------------------------
  // Dashboard Progress Update
  // -------------------------

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
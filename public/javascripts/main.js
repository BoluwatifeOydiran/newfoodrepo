// Selecting the dom
const icon = document.querySelector(".icon");
const navWrapper = document.querySelector(".Nav-wrapper");
const navAuth = document.querySelector(".nav-auth");
const userLogin = document.querySelector("#user-login");
const userSignup = document.querySelector("#user-signup");

// funtions that handles the form onSubmit event handler
async function logInOnSubmit(e) {
  e.preventDefault;

  const email = this.email.value;
  const password = this.password.value;

  try {
    const result = await fetch("/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.log(error);
  }

  console.log(email, password);
}

function loginOnSubmit(e) {
  e.preventDefault;

  const email = " ";
  const password = " ";

  console.log(firstName, lastName, email, password, cPass);
}
function signUpOnSubmit(e) {
  e.preventDefault;

  const firstName = this.firstname.value;
  const lastName = this.lastname.value;
  const email = this.email.value;
  const password = this.password.value;
  const cPass = this.cpass.value;

  console.log(firstName, lastName, email, password, cPass);
}

// userLogin.addEventListener("submit", logInOnSubmit(e));
// userSignup.addEventListener("submit", signUpOnSubmit(e));

icon.addEventListener("click", () => {
  navWrapper.classList.toggle("visible");
  navAuth.classList.toggle("visible");
  console.log(navWrapper);
});

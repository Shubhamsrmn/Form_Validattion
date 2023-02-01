const inputfields = document.querySelectorAll(".inputfield");
const userNameIp = document.getElementById("UserName");
const emailIp = document.getElementById("Email");
const passwordIp = document.getElementById("Password");
const confirmPassIp = document.getElementById("confirmPassword");
const submitBtn = document.getElementById("submitbtn");
const resetBtn = document.getElementById("resetbtn");
const SubmitPop = document.querySelector(".SubmitResultPop");
const cancelbtn = document.querySelector(".cancel-btn");
const confirmbtn = document.querySelector(".confirm-btn");
submitBtn.addEventListener("click", function (ev) {
  ev.preventDefault();
  checkEmptyInput(userNameIp);
  checkEmptyInput(emailIp);
  checkEmptyInput(passwordIp);
  checkEmptyInput(confirmPassIp);
  checkPassword();
  passwordMatching();
  completeForm();
});
resetBtn.addEventListener("click", function () {
  userNameIp.style.outline = "none";
  emailIp.style.outline = "none";
  passwordIp.style.outline = "none";
  confirmPassIp.style.outline = "none";
  document.querySelector(".passwordtext").innerHTML = "";
  document.querySelector(".confirmpasstext").innerHTML = "";
});
function checkEmptyInput(input) {
  if (input.value === "") input.style.outline = "2px solid red";
  else {
    if (input === confirmPassIp) return;
    input.style.outline = "2px solid green";
  }
}
function checkPassword() {
  if (!validatePassword(passwordIp.value)) {
    passwordIp.style.outline = "2px solid red";
    document.querySelector(".passwordtext").innerHTML =
      "must contain atleast 6 characters & one capital letter & digit.";
  } else document.querySelector(".passwordtext").innerHTML = "";
}
function validatePassword(str) {
  let isDigit = false;
  let isCapital = false;
  for (const iterator of str) {
    if (iterator >= "0" && iterator <= "9") isDigit = true;
    if (/[a-zA-Z]/.test(iterator) && iterator === iterator.toUpperCase())
      isCapital = true;
  }
  return isDigit && isCapital && str.length >= 6;
}
function passwordMatching() {
  if (validatePassword(passwordIp.value)) {
    if (passwordIp.value !== confirmPassIp.value) {
      confirmPassIp.style.outline = "2px solid red";
      document.querySelector(".confirmpasstext").innerHTML =
        "password does not match.";
    } else {
      document.querySelector(".confirmpasstext").innerHTML = "";
      confirmPassIp.style.outline = "2px solid green";
    }
  }
}
function completeForm() {
  if (
    userNameIp.value.length > 0 &&
    emailIp.value.length > 0 &&
    validatePassword(passwordIp.value) &&
    passwordIp.value === confirmPassIp.value
  ) {
    document.querySelector(".container").classList.add("display-none");
    document.querySelector(".UserNameOp").innerHTML =
      userNameIp.value.toUpperCase();
    document.querySelector(".EmailOp").innerHTML = emailIp.value.toUpperCase();
    document.querySelector(".SubmitResultPop").classList.remove("display-none");
  }
}
confirmbtn.addEventListener("click", function () {
  document.querySelector(".container").classList.remove("display-none");
  document.querySelector(".SubmitResultPop").classList.add("display-none");
  resetBtn.click();
});
cancelbtn.addEventListener("click", function () {
  document.querySelector(".container").classList.remove("display-none");
  document.querySelector(".SubmitResultPop").classList.add("display-none");
});

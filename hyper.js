function setImages() {
  const container = document.getElementById("container-grad");

  for (let i = 0; i < 67; i++) {
    const img = document.createElement("img");
    img.setAttribute("src", `./images/graduates${i + 1}.png`);
    container.appendChild(img);
  }
}
setImages();
function questionListener() {
  const questions = document.getElementsByClassName("question");
  const answers = document.getElementsByClassName("answer");
  const arrows = document.getElementsByClassName("blue-arrow");

  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", () => {
      answers[i].classList.toggle("show")
      arrows[i].classList.toggle("rotate")
    });
  }
}
questionListener();
function howItWorksListener() {
  const headers = document.getElementsByClassName("how-it-works-obj");
  const paragraphs = document.getElementsByClassName("how-it-works-text");
  const pluses = document.getElementsByClassName("plus");

  for (let i = 0; i < headers.length; i++) {
    headers[i].addEventListener("click", () => {
      paragraphs[i].classList.toggle("how-it-works-show-text");
      pluses[i].classList.toggle("how-it-works-transform-pluses");
    });
  }
}
howItWorksListener();

function careerDropDownListener() {
  const careerItem = document.getElementById("career-item");
  const careerDropDown = document.getElementById("career-drop-down");

  careerItem.addEventListener("click", () => {
    careerDropDown.classList.toggle("none")
  });
}
function menuButtonListener() {
  const menuButton = document.getElementById("menu-button");
  const header = document.getElementById("header");
  const menuLines = document.getElementsByClassName("menu-line");
  const navigationBar = document.getElementById("navigation-bar");
  const logo = document.getElementById("logo");

  menuButton.addEventListener("click", () => {
      header.classList.toggle("open");
      menuButton.classList.toggle("menu-button-open");
      navigationBar.classList.toggle("navigation-bar-open");
      logo.classList.toggle("logo-open");
      for (let i = 0; i < menuLines.length; i++) {
        menuLines[i].classList.toggle(`menu-line${i + 1}-open`);
      }
  });
}
menuButtonListener();
careerDropDownListener();

function modalHandler() {
  const modalContainer = document.getElementById("modal-container");
  const exit = document.getElementById("exit-modal");
  setTimeout(() => {
    modalContainer.classList.add("show-modal");
    exit.addEventListener("click", () => {
      modalContainer.classList.remove("show-modal");
    });
  }, 10000);
}
modalHandler();

function formHandler() {
  const submitsContainer = document.getElementsByClassName("inner-submit");
  const submits = document.getElementsByClassName("submit");
  const nameInputs = document.getElementsByName("name");
  const phoneInputs = document.getElementsByName("phone");
  const emailInputs = document.getElementsByName("email");
  const emailModal = document.getElementById("email-modal-container");
  const modalContainer = document.getElementById("modal-container");

  for (let i = 0; i < submits.length; i++) {
    submits[i].disabled = true;
    submitsContainer[i].addEventListener("click", () => {
      if (
        isNameInputValid(nameInputs[i].value) &&
        isPhoneInputValid(phoneInputs[i].value) &&
        isEmaliInputValid(emailInputs[i].value)
      ) {
        modalContainer.classList.remove("show-modal");
        emailModal.classList.remove("none");
        exitEmailModalListener(emailModal);
      }
      changePlaceholders(nameInputs[i], phoneInputs[i], emailInputs[i]);
    });
  }
}
function exitEmailModalListener(emailModal) {
  const exit = document.getElementById("exit-email-modal");
  exit.addEventListener("click", () => {
    emailModal.classList.add("none");
  });
}
function changePlaceholders(nameInput, phoneInput, emailInput) {
  if (!isNameInputValid(nameInput.value))
    changePlaceholder(nameInput, "*נא להזין שם תקין")
  if (!isPhoneInputValid(phoneInput.value))
    changePlaceholder(phoneInput, "*נא להזין מספר טלפון")
  if (!isEmaliInputValid(emailInput.value))
    changePlaceholder(emailInput, "*נא להזין כתובת מייל")
}
function changePlaceholder(inputElement, errorMassage){
  inputElement.value = "";
  inputElement.setAttribute("placeholder", errorMassage);
  inputElement.classList.add("red-placeholder");
}
function isNameInputValid(nameValue) {
  return nameValue.trim().length > 1;
}
function isPhoneInputValid(phoneValue) {
  phoneValue = phoneValue.replaceAll("-", "").trim();
  if (
    phoneValue.length < 9 ||
    phoneValue.length > 10 ||
    phoneValue[0] !== "0" ||
    Number(phoneValue) === NaN
  )
    return false;
  return true;
}
function isEmaliInputValid(emailValue) {
  const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return regex.test(emailValue.trim());
}
formHandler();
export function validateForm() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let subject = document.getElementById("subject");
  let message = document.getElementById("message");
  let formErrorMsg = document.getElementsByClassName("form-error");

  let emailRegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let emailTestResult = emailRegExp.test(email.value);

  if (name.value.trim() == "") {
    name.classList.add("invalid");
    formErrorMsg[0].innerHTML = "Please enter your name";
  } else if (name.value.length < 5) {
    name.classList.add("invalid");
    formErrorMsg[0].innerHTML = "Please enter your name, min 5 characters.";
  } else {
    name.classList.remove("invalid");
    name.classList.add("valid");
    formErrorMsg[0].innerHTML = "";
  }

  if (email.value.trim() == "") {
    email.classList.add("invalid");
    formErrorMsg[1].innerHTML = "Please enter email adress";
  } else if (!emailTestResult) {
    email.classList.add("invalid");
    formErrorMsg[1].innerHTML = "Please enter valid email adress.";
  } else {
    email.classList.remove("invalid");
    email.classList.add("valid");
    formErrorMsg[1].innerHTML ="";
    
  }

  if (subject.value.trim() == "") {
    subject.classList.add("invalid");
    formErrorMsg[2].innerHTML = "Please enter subject of your message.";
  } else if (subject.value.length < 15) {
    subject.classList.add("invalid");
    formErrorMsg[2].innerHTML = "Please enter subject, min 15 characters.";
  } else {
    subject.classList.remove("invalid");
    subject.classList.add("valid");
    formErrorMsg[2].innerHTML ="";
  }

  if (message.value.trim() == "") {
    message.classList.add("invalid");
    formErrorMsg[3].innerHTML = "Please write your message.";
  } else if (message.value.length < 25) {
    message.classList.add("invalid");
    formErrorMsg[3].innerHTML = "Please write your message, min 25 characters.";
  } else {
    message.classList.remove("invalid")
    message.classList.add("valid");
    formErrorMsg[3].innerHTML ="";
  }

  let valid = false;
  
  if (message.value.length>25 && subject.value.length>15 && emailTestResult && name.value.length>5)
  {valid = true;}

  if (valid === true) {
    location.href="/contactsuccess/index.html";}

  
}

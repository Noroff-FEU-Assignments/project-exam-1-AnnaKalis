import { validateForm } from "../ui/validateForm.js";

export function setUpContactPage() {
  let form = document.getElementById("form");
  console.log(form);
  let submitButton = document.getElementById("submit-form-btn");
  console.log(submitButton);
  submitButton.addEventListener("click", function(event)

//   form.addEventListener("submit", function (event) 
  {
    console.log("Form submittet");
    event.preventDefault();
    validateForm();
  });
}

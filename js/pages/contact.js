import { validateForm } from "../ui/validateForm.js";

export function setUpContactPage() {
  let form = document.getElementById("form");

  let submitButton = document.getElementById("submit-form-btn");
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    validateForm();
  });
}

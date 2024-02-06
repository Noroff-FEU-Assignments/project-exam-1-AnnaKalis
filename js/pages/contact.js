import { validateForm } from "../ui/validateForm.js";

export function setUpContactPage() {
  let form = document.getElementById("form");
  console.log(form);
  form.addEventListener("submit", function (event) {
    console.log("Form submittet");
    event.preventDefault();
    validateForm();
  });
}

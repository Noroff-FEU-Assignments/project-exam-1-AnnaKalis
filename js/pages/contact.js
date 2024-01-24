function onSubmit (event) {
    event.preventDefault();
}

export function setUpContactPage() {
    document.forms.contact.addEventListener("submit",onSubmit)
}
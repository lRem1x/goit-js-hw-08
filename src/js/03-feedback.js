import throttle from "lodash.throttle";

const formRef = document.querySelector("form.feedback-form");
const emailRef = document.querySelector('input[type="email"]');
const textareaRef = document.querySelector('textarea')
const DATA_KEY = "feedback-form-state";

formRef.addEventListener("submit", onFormSubmit);
formRef.addEventListener("input", throttle(onFormInput, 500));
emailRef.addEventListener('input', throttle(onFormInput, 500));
textareaRef.addEventListener('input', throttle(onFormInput, 500));

onPopulateInputs()

function onFormInput(e) {
    const email = emailRef.value;
    const message = textareaRef.value;
    const data = { email: email, message: message };
    const stringData = JSON.stringify(data);
    localStorage.setItem(DATA_KEY, JSON.stringify(data));
}

function onFormSubmit(e) {
    e.preventDefault();
    const email = emailRef.value;
    const message = textareaRef.value;
    const data = { email: email, message: message };
    console.log(data);
    e.currentTarget.reset();
    localStorage.removeItem(DATA_KEY);
}

function onPopulateInputs() {
    const savedData = localStorage.getItem(DATA_KEY);
    const data = JSON.parse(savedData);
    console.log(data);
};

function onPopulateInputs() {
    const savedData = localStorage.getItem(DATA_KEY);
    if (savedData) {
        const data = JSON.parse(savedData);
        emailRef.value = data.email;
        textareaRef.value = data.message;
    }
};

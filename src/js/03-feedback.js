import throttle from 'lodash.throttle';

const ref = {
  form: document.querySelector('.feedback-form'),
//   submit: document.querySelector('button[type="submit"]'),
};

const feedbackFormState = {
    email: 'chigorv@ukr.net',
    message: 'test',
};

// const savedSettings = localStorage.getItem("settings");
// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // settings object

ref.form.addEventListener('input', throttle(handleDataInput, 500));
ref.form.addEventListener('submit', handleSubmitOutput);





// function

function handleDataInput(e) {
  console.log(e.target.name);
}

function handleSubmitOutput(e) {
  e.preventDefault();
  const { elements: {email, message}} = e.currentTarget;
    console.log({email: email.value, message: message.value});
    email.value = '';
    message.value = '';
}

// localStorage.setItem("feedback-form-state", feedback-form-state);
// localStorage.getItem("feedback-form-state");
// chigorv@ukr.net

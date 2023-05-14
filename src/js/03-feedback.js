import throttle from 'lodash.throttle';

const ref = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input[name="email"]'),
  inputMessage: document.querySelector('textarea[name="message"]'),
};
let feedbackFormState = {};
//  feedbackFormState = {
//     email: 'chigorv@ukr.net',
//     message: 'test',
// };
// localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));

feedbackFormState = JSON.parse(localStorage.getItem('feedback-form-state'));
console.log('from: ', feedbackFormState);
const { email: feedbackEmail = '', message: feedbackMmessage = '' } = feedbackFormState;
ref.inputEmail.value = feedbackEmail;
ref.inputMessage.value = feedbackMmessage;

ref.form.addEventListener('input', throttle(handleDataInput, 500));
ref.form.addEventListener('submit', handleSubmitOutput);

// function

function handleDataInput(e) {
  console.log(e.target.name);
}

function handleSubmitOutput(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;
  console.log({ email: email.value.trim(), message: message.value });
  email.value = '';
  message.value = '';
  localStorage.removeItem("feedback-form-state");
  console.log('submit', localStorage.getItem('feedback-form-state'));
}

// chigorv@ukr.net

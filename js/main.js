const form = document.querySelector('#contact-form');
const message = form.elements.message;
const count = document.querySelector('#count');
const status = document.querySelector('.form-status');

message.addEventListener('input', () => { count.value = message.value.length; });
form.addEventListener('submit', event => {
  event.preventDefault();
  status.textContent = 'お問い合わせを受け付けました。ありがとうございます。';
  form.reset();
  count.value = '0';
});

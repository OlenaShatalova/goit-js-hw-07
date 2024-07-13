const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', event => {
  event.preventDefault();

  nameOutput.textContent = event.currentTarget.value.trim() || 'Anonymous';
});

const style = document.createElement('style');
style.textContent = `
#name-input {
  width: 360px;
  height: 40px;
}
h1 {
  font-weight: 600;
  font-size: 24px;
  line-height: 1.33333;
  letter-spacing: 0.04em;
  color: #2e2f42;
}
`;

document.head.append(style);

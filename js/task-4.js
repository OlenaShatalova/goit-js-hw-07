document.querySelector('form.login-form').addEventListener('submit', event => {
  event.preventDefault();

  const elements = event.target.elements;
  const emailValue = elements.email.value.trim();
  const passwordValue = elements.password.value.trim();
  const formData = {};

  if (emailValue === '' || passwordValue === '') {
    return alert('All form fields must be filled in');
  }

  formData[elements.email.name] = emailValue;
  formData[elements.password.name] = passwordValue;

  event.target.reset();

  console.log(formData);
});

const style = document.createElement('style');
style.textContent = `
.login-form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 408px;
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
}

.login-form label {
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.04em;
  color: #2e2f42;
}

.login-form input {
  display: block;
  width: 100%;
  margin-top: 8px;
}

.login-form button {
  width: 86px;
  margin-top: 16px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}

.login-form button:hover {
  background-color: #6c8cff;
}
`;

document.head.append(style);

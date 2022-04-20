const email = document.getElementById('email');
const password = document.getElementById('pass');
const btn = document.getElementById('enviar');
const submitBtn = document.getElementById('submit-btn');
const checkAgreement = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const formEvaluate = document.getElementById('evaluation-form');
let checkBoxValue = false;

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
  email.value = '';
  password.value = '';
});

checkAgreement.addEventListener('click', () => {
  checkBoxValue = !checkBoxValue;
  if (checkBoxValue === false) {
    submitBtn.disabled = true;
    return;
  }
  submitBtn.disabled = false;
});

textArea.addEventListener('keyup', (e) => {
  const counter = document.getElementById('counter');
  counter.innerText = 500 - e.target.value.length;
});

//   const name = document.getElementById('input-name');
//   const lastName = document.getElementById('input-lastname');
//   const inputEmail = document.getElementById('input-email');
//   const house = document.getElementById('house');
//   const name = document.getElementById('name');
//   formValuete.innerHTML = '';

function addFamilyElement(name, text) {
  const p = document.createElement('p');
  p.innerText = `${name} ${text}`;
  formEvaluate.appendChild(p);
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const formData = new FormData(formEvaluate);
  const content = document.querySelectorAll('.family-checkbox input:checked');
  let saveFamilyContentData = '';
  for (let i = 0; i < content.length; i += 1) {
    saveFamilyContentData += ` ${content[i].value},`;
  }
  formEvaluate.innerHTML = '';
  const fullName = `${formData.get('name')} ${formData.get('last-name')}`;
  addFamilyElement('Nome: ', fullName);
  addFamilyElement('Email: ', formData.get('email'));
  addFamilyElement('Casa: ', formData.get('house'));
  addFamilyElement('Família: ', formData.get('family'));
  addFamilyElement('Matérias: ', saveFamilyContentData);
  addFamilyElement('Avaliação: ', formData.get('rate'));
  addFamilyElement('Observações: ', formData.get('textarea'));
});

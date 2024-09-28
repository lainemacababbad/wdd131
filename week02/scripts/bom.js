
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const li = document.createElement('li');

const deleteButton = document.createElement('button');

li.textContent = input.value;

deleteButton.textContent = '❌';

li.append(deleteButton);

button.addEventListener('click', function() {
  if (input.value !== '') {
    const newLi = document.createElement('li');
    const newDeleteButton = document.createElement('button');
    newLi.textContent = input.value;
    newDeleteButton.textContent = '❌';
    newLi.append(newDeleteButton);
    list.append(newLi);
    newDeleteButton.addEventListener('click', function () {
      list.removeChild(newLi);
      input.focus();
    });
    input.value = '';
  } else {
    alert('Please enter a chapter!');
  }
  input.focus();
});
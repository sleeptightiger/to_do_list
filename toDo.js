let newToDo = document.querySelector('#toDoInput');
const addButton = document.querySelector('#addButton');
const removeButton = document.querySelector('#removeButton');
const list = document.querySelector('ul');

addButton.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = newToDo.value;
  list.appendChild(li);
  newToDo.value = '';
});

removeButton.addEventListener('click', () => {
  const toDo = document.querySelectorAll('ul li')[0];
  list.removeChild(toDo);
  newToDo.value = '';
});

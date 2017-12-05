let newToDo = document.querySelector('#toDoInput');
const addButton = document.querySelector('#addButton');
const list = document.querySelector('ul');

addButton.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = newToDo.value;
  list.appendChild(li);
  newToDo.value = '';
});

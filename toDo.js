let newToDo = document.querySelector('#toDoInput');
const addButton = document.querySelector('#addButton');

const list = document.querySelector('ul');

addButton.addEventListener('click', () => {
  const li = document.createElement('li');

  const div = document.createElement('div');
  div.className = "toDoContainer";

  const p = document.createElement('p');
  p.textContent = newToDo.value;

  const input = document.createElement('input');
  input.type = "checkbox";

  const removeButton = document.createElement('button');
  removeButton.textContent = 'x';
  removeButton.className = "removeButton";


  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(input);
  div.appendChild(removeButton);
  list.appendChild(li);

  newToDo.value = '';

});

// removeButton.addEventListener('click', () => {
//   const toDo = document.querySelectorAll('ul li')[0];
//   list.removeChild(toDo);
//   newToDo.value = '';
// });

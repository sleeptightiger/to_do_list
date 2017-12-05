let newToDo = document.querySelector('#toDoInput');
const addButton = document.querySelector('#addButton');
const lineOut = document.querySelector('.strike');
const list = document.querySelector('ul');

addButton.addEventListener('click', () => {
  const li = document.createElement('li');

  const div = document.createElement('div');
  div.className = "toDoContainer";

  const p = document.createElement('p');
  p.textContent = newToDo.value;
  p.style.textDecoration = "none";

  const input = document.createElement('input');
  input.type = "checkbox";
  input.className = "strike";


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

list.addEventListener('change', (event) => {

  if(event.target.tagName == 'INPUT') {
    let item = event.target.parentNode.children[0];
    if(item.style.textDecoration == "none") {
      item.style.textDecoration = "line-through";
    } else {
      item.style.textDecoration = "none";
    }

  }

});

// removeButton.addEventListener('click', () => {
//   const toDo = document.querySelectorAll('ul li')[0];
//   list.removeChild(toDo);
//   newToDo.value = '';
// });

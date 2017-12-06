let newToDo = document.querySelector('#toDoInput');
const addToDo = document.querySelector('#addButton');
const lineOut = document.querySelector('.strike');
const list = document.querySelector('ul');

function attachListItemElements(li) {

  const p = document.createElement('p');
  p.textContent = newToDo.value;
  p.style.textDecoration = "none";

  const input = document.createElement('input');
  input.type = "checkbox";
  input.className = "strike";


  const removeButton = document.createElement('button');
  removeButton.textContent = 'x';
  removeButton.className = "removeButton";

  li.appendChild(p);
  li.appendChild(input);
  li.appendChild(removeButton);


}

addToDo.addEventListener('click', () => {

  const li = document.createElement('li');

  attachListItemElements(li);
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

list.addEventListener('click', (event) => {
  if(event.target.tagName == 'BUTTON') {
    let item = event.target.parentNode;
    list.removeChild(item);
  }

});

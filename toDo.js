// test for acceptible item
const isOkay = item => item != "";

// show help
const showHelp = () => {
  return `
  Type 'DONE' to stop adding items.
  Type 'SHOW' to print current list.
  Type 'HELP' to print instructions.
  `
}

// show current list
const showList = list => {
  let alert = "Here's your List: \n"
  list.forEach(item => {
    alert += `  ${item}\n`;
  });
  return alert;
}

// put new tings into the list, one at a time
const addToList = (item, list) => {
  list.push(item);
  return list;
}

// show item added and length of list
const showAdd = (item, list) => alert(`Added ${item}, your To Do List now has ${list.length} things to do.`);

// ask for, process input
const queryUser = list => {
  let toDo;
  let alert = '';
  while(true) {
    let toDo = window.prompt(alert + 'Enter Something To Do: ');
    // DONE to quit
    if(toDo === 'DONE') {
      break;
    } else if(toDo === 'SHOW') {
      alert = showList(list);
    } else if(toDo === 'HELP') {
      alert = showHelp();
    } else if(isOkay(toDo)) {
      alert = '';
      list = addToList(toDo, list);
      showAdd(toDo, list);
    } else {
      continue;
    }
  }

  return list;
}

const runApp = () => {
  let list = [];
  showHelp();
  list = queryUser(list);
  alert(showList(list));
}

//runApp();

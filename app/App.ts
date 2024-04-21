const txtToDoInput = document.querySelector('#txtToDo') as HTMLInputElement;
const divToDo = document.querySelector('#divToDo') as HTMLDivElement;

function createTask(){
    const divTask = document.createElement('div') as HTMLDivElement;
    divTask.innerHTML = txtToDoInput?.value;
    divToDo.appendChild(divTask);
}

const btnAddTask = document.querySelector('#btnAddTask') as HTMLButtonElement;
btnAddTask.onclick = createTask;
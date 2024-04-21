"use strict";
const txtToDoInput = document.querySelector('#txtToDo');
const divToDo = document.querySelector('#divToDo');
function createTask() {
    const divTask = document.createElement('div');
    divTask.innerHTML = txtToDoInput === null || txtToDoInput === void 0 ? void 0 : txtToDoInput.value;
    divToDo.appendChild(divTask);
}
const btnAddTask = document.querySelector('#btnAddTask');
btnAddTask.onclick = createTask;
//# sourceMappingURL=App.js.map
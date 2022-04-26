const taskList = document.getElementById('lista-tarefas');
const btn = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const list = document.getElementsByTagName('li');
const cleanerBtn = document.getElementById('apaga-tudo');
const completeds = document.getElementsByClassName('completed');
const completedBtn = document.getElementById('remover-finalizados');
const saveBtn = document.getElementById('salvar-tarefas');
const removeSelectedBtn = document.getElementById('remover-selecionado');
const moveUpBtn = document.getElementById('move-up');
const moveDownBtn = document.getElementById('move-down');
let atual = null;

function createElement() {
    let create = document.createElement('li');
    create.innerText = input.value;
    taskList.appendChild(create);
    input.value = '';
}
btn.addEventListener('click', createElement);

function changeTaskBgColors(event) {
    for (let i = 0; i < list.length; i += 1) {
        list[i].style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'gray';
    atual = event.target;
}
taskList.addEventListener('click', changeTaskBgColors);

function completedTasks(event) {
    if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
    }
    else {
        event.target.classList.add('completed');
    }
}
taskList.addEventListener('dblclick', completedTasks);

function cleanTasks() {
    for (let i = 0; i <= 50000; i += 1) {
        for (let index = 0; index < list.length; i += 1) {
            list[index].remove();
        }
    }
}
cleanerBtn.addEventListener('click', cleanTasks);

function removeCompletedTasks() {
    for (let i = 0; i <= 50000; i += 1) {
        for (let i = 0; i < completeds.length; i += 1) {
            completeds[i].remove();
        }
    }
}
completedBtn.addEventListener('click', removeCompletedTasks);

function saveTaskList() {
    localStorage.clear();
    const items = [];
    const classes = [];
    for (let i = 0; i < list.length; i += 1) {
        items.push(list[i].innerText);
        classes.push(list[i].className);
        localStorage.setItem('tasks', JSON.stringify(items));
        localStorage.setItem('classes', JSON.stringify(classes));
    }
}
saveBtn.addEventListener('click', saveTaskList);

function moveUp() {
    const anterior = atual.previousElementSibling;
    if (anterior == null) {
        return;
    }
    const anteriorValue = anterior.innerText;
    const anteriorClasse = anterior.className;
    const anteriorBG = anterior.style.backgroundColor;

    anterior.innerText = atual.innerText;
    anterior.className = atual.className;
    anterior.style.backgroundColor = atual.style.backgroundColor;

    atual.innerText = anteriorValue;
    atual.className = anteriorClasse;
    atual.style.backgroundColor = anteriorBG;
    
    atual = anterior;
}
moveUpBtn.addEventListener('click', moveUp);

function moveDown() {
    const proximo = atual.nextElementSibling;
    if (proximo == null) {
        return;
    }
    const proximoValue = proximo.innerText;
    const proximoClasse = proximo.className;
    const proximoBG = proximo.style.backgroundColor;
    
    proximo.innerText = atual.innerText;
    proximo.className = atual.className;
    proximo.style.backgroundColor = atual.style.backgroundColor;
    
    atual.innerText = proximoValue;
    atual.className = proximoClasse;
    atual.style.backgroundColor = proximoBG;
    
    atual = proximo;
}
moveDownBtn.addEventListener('click', moveDown);

function removeSelected() {
    for (let i = 0; i < list.length; i += 1) {
        if (list[i].style.backgroundColor == 'gray') {
            list[i].remove();
        }
    }
}
removeSelectedBtn.addEventListener('click', removeSelected);

if (localStorage.length > 0) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let classes = JSON.parse(localStorage.getItem('classes'));

    for (let i = 0; i < tasks.length; i += 1) {
        let create = document.createElement('li');
        create.innerText = tasks[i];
        create.className = classes[i];
        taskList.appendChild(create);
    }

window.onload = function () {
        // console.log(classes);
    }
}

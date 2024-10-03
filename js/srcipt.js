const inputText = document.getElementById('task');
const taskLista = document.getElementById('task-list');
const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener('click',function(){
    addtask();
})

function addtask(){
     if (inputText.value == ''){
        alert("você precia adicionar a desrição da tarefa");
     }
     else{
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        taskLista.appendChild(li);
     }

     inputText.value = ' ';
}
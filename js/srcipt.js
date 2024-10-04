const inputText = document.getElementById('task');
const taskLista = document.getElementById('task-list');
const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener('click',function(){
    addtask();
})

inputText.addEventListener('keydown' , function(e){
   if(e.code == 'Enter')
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

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
     }

     inputText.value = ' ';
     savaData();
}

// * 03/10/2024

taskLista.addEventListener('click', function(e){
   if (e.target.tagName == 'LI'){
      e.target.classList.toggle('checked');
      savaData();
   } else if (e.target.tagName == 'SPAN'){
      e.target.parentElement.remove();
      savaData();
   }
})

function savaData(){
   localStorage.setItem("task_data" , taskLista.innerHTML);
}
function loadData(){
   taskLista.innerHTML = localStorage.getItem('task_data');
}

loadData();
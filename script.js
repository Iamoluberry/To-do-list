let date = new Date;

date = date.toLocaleString()
console.log(date);

document.getElementById('date').innerHTML = date;


let input = document.getElementById("header-input");
let taskContainer = document.getElementById("task-container");
let addBtn =document.getElementById('header-button');

addBtn.onclick = function (){
    if (input.value == '') {
        alert("You've to enter a task")
    } else{
        let listItem = document.createElement("li");
        listItem.innerHTML = input.value;
        taskContainer.appendChild(listItem);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        listItem.appendChild(span)
    }
    input.value = '';
    storeToDoListData();
}


taskContainer.addEventListener('click', function(e){
   
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle("checked");
        storeToDoListData();
    }
    else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
        storeToDoListData();
    }
});


function storeToDoListData(){
    localStorage.setItem('toDoListDate', taskContainer.innerHTML);
}

function showToDoListData(){
    taskContainer.innerHTML = localStorage.getItem('toDoListDate');
}
showToDoListData();
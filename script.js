let userTask = document.querySelector(".task");
let button = document.getElementById("add-task");
console.log(addTask);

let taskContainer = document.querySelector(".task-container");


let circleId = 0;
let crossID = 0;

button.addEventListener('click', (e) =>{
    circleId++;
    crossID++;
    let taskContent = document.createElement('div')
    taskContent.setAttribute("class", "task-container")
    console.log(taskContent);
    taskContent.innerHTML = `<div id="${circleId}" class="circle">
                    <img class="tick" src="tick.svg" alt="">
                </div>
                 <li class="task-value">${userTask.value}</li>
                <img id="img${crossID}" class="cross" src="formkit--close.svg" alt="">
            </div>`
    
            
    conatiner.appendChild(taskContent);
    let taskCompleted = document.querySelector('.circle');
    console.log(taskCompleted);
    userTask.value = ""
    taskDone(taskContent)               
})

function taskDone(elem){
    taskCompleted.addEventListener('click', ()=>{
        if(taskCompleted === elem.target.id){
            console.log("Circle is clicked")
        }
    })
}

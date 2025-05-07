let userTask = document.querySelector(".task");
let button = document.getElementById("add-task");
let container = document.querySelector(".container");
console.log(button);

let taskContainer = document.querySelector(".task-container");
let taskAdded = document.querySelector(".task-added");

let circleId = 0;
let crossID = 0;

button.addEventListener("click", (e) => {
  circleId++;
  crossID++;
  let taskContent = document.createElement("div");
  taskContent.setAttribute("class", "task-container");
  taskContent.setAttribute("id", `task${crossID}`);
  console.log(taskContent);
  taskContent.innerHTML = `<div id="${circleId}" class="circle">
                <img class="tick" src="images/tick.svg" alt=""></img>
                </div>
                 <li class="task-value">${userTask.value}</li>
                <img id="img${crossID}" class="cross" src="images/formkit--close.svg" alt="">
            </div>`;

  taskAdded.appendChild(taskContent);
  console.log(taskAdded);


  userTask.value = "";
});

taskAdded.addEventListener("click", (e) => {
  if (e.target.classList.contains("cross")) {
    const taskBox = e.target.closest(".task-container");

    if (taskBox) {
      taskBox.style.display = "none";
    }
  }
  if (e.target.tagName === "LI") {
    return;
  }

  if (e.target.classList.contains("tick")) {
    const taskBox = e.target.closest(".task-container");
    // console.log(taskBox);
    if (taskBox) {
      taskBox.style.display = "none";

      const messageBox = document.querySelector(".message");
      messageBox.textContent = "1 task completed";
      messageBox.classList.add("show");

      setTimeout(() => {
        messageBox.classList.remove("show");
      }, 2000);
    }
  }

});
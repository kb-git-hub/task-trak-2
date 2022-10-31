import { hideAddTaskBtn, projectList } from "./project";
import { addTask } from "./task";
import { q } from "./utils";

export function checkWhichHomeTile(selectedTile) {
    if (selectedTile.matches("#allTasks")) {
        displayAllTasks();
    }
}

function clearContent() {
    const taskList = q("ul");
    taskList.textContent = "";
}

function displayAllTasks() {
    clearContent();
    console.log(projectList)

    projectList.forEach((project) => {
        project.taskList.forEach((task) => {
            addTask(
                task.id,
                task.name,
                task.details,
                task.date,
                task.completed,
                task.important
            );
        });
    });
    hideAddTaskBtn()
    checkNoTask()
}

function checkNoTask(){
    const ul = q('ul')
    if (!ul.textContent){
        const div = create('div')
        div.classList.add('noTask')
        div.textContent = 'No tasks'
    } else return
}

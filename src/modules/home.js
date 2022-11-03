import { hideAddTaskBtn, projectList } from "./project";
import { addTask } from "./task";
import { q , create} from "./utils";

export function checkWhichHomeTile(selectedTile) {
    if (selectedTile.matches("#allTasks")) {
        displayAllTasks();
    }
    
    else if (selectedTile.matches("#today")) {
        displayToday();
    }
    
    else if (selectedTile.matches("#thisWeek")) {
        displayThisWeek();
    }
    
    else if (selectedTile.matches("#important")) {
        displayImportant();
    }


    
}

function clearContent() {
    const taskList = q("ul");
    taskList.textContent = "";
}

function displayAllTasks() {
    clearContent();
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
    hideAddTaskBtn();
    checkNoTask();
}

function checkNoTask() {
    const ul = q("ul");
    if (!ul.textContent) {
        const div = create("div");
        div.classList.add("noTask");
        div.textContent = "No tasks";
    } else return;
}

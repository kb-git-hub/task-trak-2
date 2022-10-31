import { checkWhichHomeTile } from "./home";
import { projectList, saveToLocalStorage } from "./project";
import { revertOptionLocation } from "./projectEdit";
import { displayTask, findCurrentProjectID } from "./task";
import { q } from "./utils";

export function styleImportantTask(e) {
    e.target.classList.toggle("listHidden");
    e.target.nextSibling.classList.toggle("listHidden");
}

export function updateImportantTask(e) {
    const taskId = Number(e.target.closest("li").id);

    const selectedTask = findSelectedTask(taskId);
    selectedTask.important = !selectedTask.important;
    saveToLocalStorage();
    revertOptionLocation();
    refreshDisplay(selectedTask.projectID);
}

export function styleCompletedTask(e) {
    let uncheck = e.target;
    let taskCard = e.target.closest("li");
    let taskDetails = taskCard.querySelector(".taskDetails");
    let taskName = taskCard.querySelector(".taskName");
    taskName.classList.toggle("lineThrough");
    taskName.classList.toggle("fade");
    taskDetails.classList.toggle("lineThrough");
    taskDetails.classList.toggle("fade");
    uncheck.classList.toggle("checked");
}

export function updateCompletedTask(e) {
    let taskID = e.target.closest("li").id;

    let selectedTask = findSelectedTask(Number(taskID));
    console.log(
        "🌌 | file: taskEdit.js | line 38 | updateCompletedTask | selectedTask",
        selectedTask
    );
    selectedTask.completed = !selectedTask.completed;
    saveToLocalStorage();
}

export function findSelectedTask(taskID) {
    const projectID = getAssociatedProject(taskID);
    return projectList[projectID].taskList.find((task) => task.id === taskID);
}

function refreshDisplay(project) {
    const selectedTitle = q(".selected");
    if (selectedTitle.closest(".project")) {
        displayTask(project);
    } else if (selectedTitle.closest(".home")) {
        checkWhichHomeTile(selectedTitle);
    } else return;
}

function getAssociatedProject(taskID) {
    for (const project of projectList) {
        for (const task of project.taskList) {
            if (task.id === taskID) return task.projectID;
        }
    }
}

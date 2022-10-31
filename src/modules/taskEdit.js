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
    
    const projectID = getAssociatedProject(taskId);
    const selectedTask = findSelectedTask(taskId, projectID);
    selectedTask.important = !selectedTask.important;
    saveToLocalStorage();

    revertOptionLocation();
    refreshDisplay(selectedTask.projectID);
}

export function findSelectedTask(taskID, projectID) {
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

function getAssociatedProject(taskID){
    for(const project of projectList){
        for (const task of project.taskList) {
            if (task.id === taskID) return (task.projectID);
        }
    };
}
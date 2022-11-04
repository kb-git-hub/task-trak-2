import { checkWhichHomeTile } from "./home";
import { projectList, saveToLocalStorage } from "./project";
import { hideDropDown, revertOptionLocation } from "./projectEdit";
import { displayTask, findCurrentProjectID, processDate } from "./task";
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

export function revertEditFormLocation() {
    const editForm = q("#editTaskForm");
    const listToDo = q(".task-list");

    editForm.classList.add("hidden");
    listToDo.appendChild(editForm);
}

export function deleteTask(e){
    const listNode = e.target.closest('li')
    const id = Number(listNode.id)

    const selectedTask = findSelectedTask(id)
    console.log('🌌 | file: taskEdit.js | line 77 | deleteTask | selectedTask', selectedTask)
    let projectID = selectedTask.projectID
    
    projectList[projectID].taskList = 
    projectList[projectID].taskList.filter(task => task != selectedTask) 

    saveToLocalStorage()
    revertOptionLocation()
    listNode.remove()

}

export function showEditForm(e) {
    let editContainerNode = e.target.parentNode.parentNode;
    hideDropDown(editContainerNode);
    relocateEditListForm(e);
}

function relocateEditListForm(e) {
    const listNode = e.target.closest("li");
    const ul = listNode.parentNode;

    const editListForm = q("#editTaskForm");
    const taskTitle = listNode.querySelector(".taskName").textContent;
    const taskDetails = listNode.querySelector(".taskDetails").textContent;
    const taskDate = listNode.querySelector(".date").textContent;

    const titleInput = editListForm.querySelector("#editTaskTitle");
    const detailInput = editListForm.querySelector("#editTaskDetails");
    const dateInput = editListForm.querySelector("#editTaskInputDate");

    titleInput.value = taskTitle;
    detailInput.value = taskDetails;
    dateInput.value = taskDate;

    listNode.classList.add("hidden");
    editListForm.classList.remove("hidden");
    ul.insertBefore(editListForm, listNode);
}


export function processEditTask(e){
    e.preventDefault()
    const titleInput = editTaskForm.querySelector("#editTaskTitle").value;
    const detailInput = editTaskForm.querySelector("#editTaskDetails").value;
    const dateInput = editTaskForm.querySelector("#editTaskInputDate").value;
    const taskID = Number(findHiddenTask().id)
    const selectedTask = findSelectedTask(taskID)
    selectedTask.name = titleInput
    selectedTask.details = detailInput
    selectedTask.date = processDate(dateInput)
    saveToLocalStorage()

    revertEditFormLocation()
    revertOptionLocation()
    showHiddenTask()

    let projectID = selectedTask.projectID
    refreshDisplay(projectID)
    
}

export function findHiddenTask(){
    return q('li.hidden')
}

export function showHiddenTask(){
     q('li.hidden').classList.remove('hidden')
}

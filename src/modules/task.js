import { projectList, saveToLocalStorage } from "./project";
import { styleImportantTask, updateImportantTask } from "./taskEdit";
import { createSpanIcon, q, create } from "./utils";

export const createTaskListeners = () => {
    const addTask = q("#addTaskBtn");
    addTask.addEventListener("click", showNewTaskForm);

    const cancelTask = q(".taskCancelBtn");
    cancelTask.addEventListener("click", hideNewTaskForm);

    const submitTask = q("#addTaskForm");
    submitTask.addEventListener("submit", createNewTask);

    const todoList = q(".task-list");
    todoList.addEventListener("click", checkListEvent);
};

// IF CLICK EVENT MATCHES A CERTAIN BUTTON -PERFORM FUNCTION
function checkListEvent(e) {
    let isStarIcon = e.target.matches(".star-outline");
    let isCheckIcon = e.target.matches(".unchecked");

    let isEditSubmitBtn = e.target.matches(".editTaskSubmitBtn");
    let isEditTaskCancel = e.target.matches(".editTaskCancelBtn");

    let isEditBtn = e.target.matches("#taskEdit");
    let isDeleteBtn = e.target.matches("#taskDelete");

    if (isStarIcon) {
        styleImportantTask(e);
        updateImportantTask(e);
    }
}

function showNewTaskForm() {
    const addTaskForm = q("#addTaskForm");
    addTaskForm.classList.remove("hidden");
    q("#taskTitle").focus();
}

function hideNewTaskForm() {
    //TASK FORM INPUT RESET
    q("#taskTitle").value = "";
    q("#taskInputDetail").value = "";
    q("#taskInputDate").value = "";

    const addTaskForm = q("#addTaskForm");
    addTaskForm.classList.add("hidden");
}

export const updateTitle = (title) => {
    const titleHeading = q(".title");
    titleHeading.textContent = title.textContent;
};

let defaultID = 0;
export let id = Number(localStorage.getItem("currentID")) || defaultID;

function createNewTask(e) {
    e.preventDefault();

    let projectID = findCurrentProjectID();
    let taskID = id;
    let name = q("#taskTitle").value;
    let details = q("#taskInputDetail").value;
    let date = q("#taskInputDate").value;
    let formattedDate = processDate(date);

    const newTask = new Task(projectID, taskID, name, details, formattedDate);

    let projectToAppendTask = projectList[projectID];
    projectToAppendTask.taskList.push(newTask);
    id++;
    saveToLocalStorage();

    addTask(taskID, name, details, formattedDate);
    hideNewTaskForm();
}

function addTask(taskID, name, details, date, completed, important) {
    const ul = q("ul");
    const li = create("li");
    li.id = taskID;
    ul.appendChild(li);

    const checkedStatus = create("div");
    checkedStatus.classList.add("unchecked");
    li.appendChild(checkedStatus);

    const taskCard = create("div");
    taskCard.classList.add("task-card");
    li.appendChild(taskCard);

    if (completed) {
        checkedStatus.classList.toggle("checked");
        taskCard.classList.toggle("lineThrough");
        taskCard.classList.toggle("fade");
    }

    // A task wouldn't start completed
    const taskName = create("div");
    taskName.classList.add("taskName");
    taskName.textContent = name;
    taskCard.appendChild(taskName);

    const taskDetails = create("div");
    taskDetails.classList.add("taskDetails");
    taskDetails.textContent = details;
    taskCard.appendChild(taskDetails);

    const taskDate = create("div");
    taskDate.classList.add("date");
    taskDate.textContent = date;
    li.appendChild(taskDate);
    //TASK CARD RIGHT SIDE
    const taskCardRightSide = create("div");
    taskCardRightSide.classList.add("task-right");
    li.appendChild(taskCardRightSide);

    const starOutline = createSpanIcon("star_outline");
    starOutline.classList.add("star-outline");
    taskCardRightSide.appendChild(starOutline);

    const star = createSpanIcon("star");
    star.classList.add("important");
    taskCardRightSide.appendChild(star);

    if (important) starOutline.classList.add("listHidden");
    else star.classList.add("listHidden");

    // EDIT CONTAINER
    const editContainer = create("div");
    editContainer.dataset.dropdown = "";
    editContainer.classList.add("editContainer");
    taskCardRightSide.appendChild(editContainer);

    const threeDots = createSpanIcon("more_vert");
    threeDots.dataset.dropdownButton = "";
    editContainer.appendChild(threeDots);
}

export function displayTask(projectID) {
    const ul = q("ul");
    ul.textContent = "";
    projectList[projectID].taskList.forEach((task) => {
        addTask(
            task.id,
            task.name,
            task.details,
            task.date,
            task.completed,
            task.important
        );
    });
}

function findCurrentProjectID() {
    const currentProject = q(".selected");
    return currentProject.dataset.project;
}

function processDate(date) {
    if (date) return date;
    else return "No Due Date";
}

export class Task {
    constructor(projectID, id, name, details, date) {
        (this.projectID = projectID), (this.id = id);
        this.name = name;
        this.details = details;
        this.date = date;
        this.completed = false;
        this.important = false;
    }
}

import { hideAddTaskBtn, projectList } from "./project";
import { addTask } from "./task";
import { q, create } from "./utils";
import { addDays, format, isEqual, isWithinInterval } from "date-fns";
import parseISO from "date-fns/parseISO";


export function checkWhichHomeTile(selectedTile) {
    if (selectedTile.matches("#allTasks")) {
        displayAllTasks();
    } else if (selectedTile.matches("#today")) {
        displayToday();
    } else if (selectedTile.matches("#thisWeek")) {
        displayThisWeek();
    } else if (selectedTile.matches("#important")) {
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
            addTask(task.id, task.name, task.details, task.date, task.completed, task.important);
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
        ul.appendChild(div);
    } else return;
}

function displayToday() {
    clearContent()
    let today = Date.parse(format(new Date(), 'yyyy-MM-dd'))

    projectList.forEach(project=>{
        project.taskList.forEach(task=>{
            let date = Date.parse(task.date)
            if (isEqual(today, date)) addTask(task.id, task.name, task.details, task.date, task.completed, task.important)
            else return
        })
    })
    checkNoTask()
}


function displayThisWeek(){
    clearContent()
    projectList.forEach(project=>{
        project.taskList.forEach(task=>{
            let date = Date.parse(task.date)
            if (checkNextWeek(date)) addTask(task.id, task.name, task.details, task.date, task.completed, task.important)
            else return
        })
    })
    checkNoTask()
}

function checkNextWeek(taskDate){
    let nextWeek = addDays(new Date(), 8)
    let today = new Date()

    return isWithinInterval(taskDate,
        {
        start: today,
        end: nextWeek
    })
}
import { projectList, saveToLocalStorage } from "./project";
import { q } from "./utils";

export function styleImportantTask(e) {
    e.target.classList.toggle("listHidden");
    e.target.nextSibling.classList.toggle("listHidden");
}

export function updateImportantTask(e) {
    const taskId = Number(e.target.closest("li").id);

    const selectedTask = findSelectedTask(taskId);
    console.log(selectedTask)
    selectedTask.important = !selectedTask.important
    saveToLocalStorage()

    revertOptionLocation()
    refreshDisplay(selectedTask.dataProject)
}

export function findSelectedTask(taskID) {
    for (const project of projectList)
        return project.taskList.find((task) => task.id === taskID);
}

import { projectList, saveToLocalStorage } from "./project";
import { createSpanIcon, q } from "./utils"


export const createTaskListeners = () =>{
    const addTaskBtn  = q('#addTaskBtn')
    addTaskBtn.addEventListener('click', showNewTaskForm)
}





function showNewTaskForm(){
    const addTaskForm = q('#addTaskForm')
    addTaskForm.classList.remove('hidden')
    q('#taskTitle').focus()

}


export const updateTitle = title =>{
    const titleHeading = q('.title')
    titleHeading.textContent = title.textContent
}
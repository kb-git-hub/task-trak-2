import { projectList, saveToLocalStorage } from "./project";
import { updateTitle } from "./task";
import { q } from "./utils";

export function revertOptionLocation(){
    // LEFT SIDE
    const projectOption = q('#projectOption')
    projectOption.classList.add('hidden')

    const project = q('.project')
    project.appendChild(projectOption)

    // RIGHT SIDE
    const taskOption = q('#taskOption')
    // taskOption.classList.add('hidden')
    const taskList = q('.task-list')
    taskList.appendChild(taskOption)
}
import { projectList, saveToLocalStorage } from "./project";
import { updateTitle } from "./task";
import { q, qA } from "./utils";


//EVENT LISTENER FOR EDITING PROJECTS
export function editContainerListeners(){
    document.addEventListener('click', showDropDown)


}



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

//DISPLAY dropDOWN of EDIT CONTAINER - ANIMATION
function showDropDown(e){
    const isDropDownBtn = e.target.matches('[data-dropdown-button]')
    let currentDropDown
    if (!isDropDownBtn && e.target.closest('[data-dropdown')) return

    if (isDropDownBtn){
        relocateOption(e)
        currentDropDown = e.target.closest('[data-dropdown]')
        setTimeout(()=>{
            currentDropDown.classList.toggle('active')
        },100) // this makes opacity change for the dropdown


    }

}

// Relocates Options Pop up for both projects and task List items
export function relocateOption(e){
    const editContainer = e.target.closest('.editContainer')

     if (e.target.closest('.tile')){    // Pop up append to leftSide Projects
        const projectOptions = q('#projectOption')
        console.log(projectOptions);
        projectOptions.classList.remove('hidden')
        editContainer.appendChild(projectOptions)
     } else if (e.target.closest('li')){
        const taskOption = q('.taskOption')
        taskOption.classList.remove('hidden')
        editContainer.appendChild(taskOption)
     }
}
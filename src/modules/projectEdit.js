import { projectList, saveToLocalStorage } from "./project";
import { updateTitle } from "./task";
import { q, qA } from "./utils";


//EVENT LISTENER FOR EDITING PROJECTS
export function editContainerListeners(){
    //LISTEN FOR EDIT PROJECT EDIT CONTAINER
    document.addEventListener('click', showDropDown)

    //LISTEN FOR RENAME OR DELETE PROJECT
    const projOption = q('#projectOption')
    projOption.firstElementChild.addEventListener('click', showRenameProjForm)
    projOption.lastElementChild.addEventListener('click', deleteProject)

    //RenaameForm rename and cancel buttons
    const formRenameBtn = q('.rename-renameBtn')
    formRenameBtn.addEventListener('click', e =>{
        e.preventDefault()
        processRenameInput()
    })

    const formCancelBtn = q('.rename-cancelBtn')
    formCancelBtn.addEventListener('click', ()=> {
        revertRenameFormLocation()
        displayRenamedProject()
    })

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
            currentDropDown.classList.add('active')
        },100) // this makes opacity change for the dropdown
    }
    // click another dropdown to make other dissapear
    qA('[data-dropdown].active').forEach(dropdown =>{
        if (dropdown === currentDropDown)return
        dropdown.classList.remove('active') //close dropdown before opening a new dropdown
    })

}

// Relocates Options Pop up for both projects and task List items
export function relocateOption(e){
    const editContainer = e.target.closest('.editContainer')

     if (e.target.closest('.tile')){    // Pop up append to leftSide Projects
        const projectOptions = q('#projectOption')
        projectOptions.classList.remove('hidden')
        editContainer.appendChild(projectOptions)
     } else if (e.target.closest('li')){
        const taskOption = q('#taskOption')
        taskOption.classList.remove('hidden')
        editContainer.appendChild(taskOption)
     }
}

//Process Renamed Input
function processRenameInput(e){
    const selectedTile = q('.project .tile.hidden')
    const newName = q('#projectRenameInput').value
    const projectName = selectedTile.querySelector('.projectName')
    projectName.textContent = newName 
    
    const projectNum = selectedTile.dataset.project
    projectList[projectNum].name = newName
    saveToLocalStorage()

    displayRenamedProject()
    updateTitle(newName) // Update title in Right hand column
    revertRenameFormLocation() // put form back in original position
}
//Rename or delete project
function showRenameProjForm(e){
    let editContainerNode = e.target.parentNode.parentNode
    let tileNode = editContainerNode.parentNode
    hideDropDown(editContainerNode)

    let openForm = checkOpenForm()
    if (openForm){
        revertRenameFormLocation()
        displayRenamedProject()
    }
    relocateProjectRenameForm(tileNode)
    animateProjectRenameForm()

    q('#projectRenameInput').focus()
    tileNode.classList.add('hidden')
}

function deleteProject(e){
    let tile = e.target.closest('.tile')
    let index = Number(tile.dataset.project)
    
    if(tile.classList.contains('selected')){
        const today = q('#today')
        const nameNode = today.querySelector('[data-name]') //Select Tile will fail if a tile isn't selected
        today.classList.add('selected')
        updateTitle(nameNode.textContent)
    }

    revertOptionLocation(e)
    tile.remove()
    sortArray()
    projectList.splice(index, 1)
    saveToLocalStorage()
}

function sortArray(){
    let i = 0
    const tiles = document.querySelectorAll('.project .tile')
    tiles.forEach(tile =>{
        let dataNum = tile.dataset.project // index number
        tile.dataset.project = i
        projectList[dataNum].projectID = i //update projectID
        i++
    })
}

export function hideDropDown(editContainerNode){
    editContainerNode.classList.remove('active')
}

function checkOpenForm(){
    const openForm = q('#renameForm')
    if (!openForm.classList.contains('hidden')) return true
}

// Revert form back to its orginal posting under .project
function revertRenameFormLocation(){
    const renameForm = q('#renameForm')
    const originalLocation = q('.project')
    
    renameForm.classList.add('hidden')
    originalLocation.appendChild(renameForm)
}

function displayRenamedProject(){
    const hiddenTile = q('div.hidden')
    hiddenTile.classList.remove('hidden')
}

function relocateProjectRenameForm(tileNode){
    let projectContainer = tileNode.parentNode
    const renameForm = q('#renameForm')
    const nameNode = tileNode.querySelector('.projectName')
    const input = renameForm.querySelector('#projectRenameInput')
    input.value = nameNode.textContent
    
    projectContainer.insertBefore(renameForm, tileNode)

}

function animateProjectRenameForm(){
    const form = q('#renameForm')
    setTimeout(()=>{
        form.classList.remove('hidden')
    },100)

}
import { q, qA, create, createSpanIcon } from "./utils";

// CREATE EVENT LISTENERS FOR NEW PROJECT FUNCTIONS
export const createProjectListeners = () =>{
    const projectSubmitBtn = q('.projectSubmitBtn')
    projectSubmitBtn.addEventListener('click', processProjectInput)
    
    const projectCancelBtn = q('.projectCancelBtn')
    projectCancelBtn.addEventListener('click', hideProjectCreationForm)
    
    const projectCreateBtn = q('#addProject')
    projectCreateBtn.addEventListener('click', showProjectCreationForm)
    
    const leftPanel = q('.leftPanel')
    leftPanel.addEventListener('click', checkTile)    

    displayProject(projectList)
} 


// RETRIEVE LOCAL STORAGE OBJECTS OR START WITH EMPTY PROJECT ARRAY
let emptyProjectList = []
let projectList = localStorage.getItem('projectStorage')
projectList = JSON.parse(projectList || JSON.stringify(emptyProjectList))


// PROCESS PROJECT INPUT and CREATE NEW PROJECT
function processProjectInput(e){
    e.preventDefault()
    let projectName = q('#projectInput').value
    let projectID = assignProjectID()
    const newProject = new Project(projectName, projectID)

    projectList.push(newProject)
    saveToLocalStorage()

    addProject(projectID, newProject.name)
    hideProjectCreationForm()
}

// ADD PROJECT TO DOM
function addProject(projectID, projectNameInput){
    const project = q('.project')
    const projectForm = q('#projectForm')

    const projectContainer = create('div')
    projectContainer.setAttribute('data-project', projectID)
    projectContainer.classList.add('tile')
    project.insertBefore(projectContainer, projectForm)

    // MENU ICON
    const menuIcon = createSpanIcon('menu')    
    menuIcon.setAttribute('data-drag', '')
    projectContainer.appendChild(menuIcon)

    // NAME
    const projectInfo = create('div')
    projectInfo.classList.add('projectInfo')
    projectContainer.appendChild(projectInfo)
    const projectName = create('div')
    projectName.textContent = projectNameInput
    projectInfo.appendChild(projectName)

    //EDIT
    const editDiv = create('div')
    editDiv.classList.add('editContainer')
    editDiv.setAttribute('data-dropdown','')
    projectContainer.appendChild(editDiv)
    const editIcon = createSpanIcon('more_vert')
    editIcon.setAttribute('data-dropdown-button','')
    editDiv.appendChild(editIcon)



    //dragstartendEvent !!!!!!!!!!!!

}


function checkTile(){}
function selectTile(){}

function displayProject(array){
    array.forEach(project=>{
        addProject(project.ID, project.name)
    })
}

// DETERMINE PROJECT ID BASED ON PROJECT LIST LENGTH
function assignProjectID(){
    const projects = qA('[data-project]')
    const newProjectID = projects.length
    return newProjectID
}

function saveToLocalStorage(){
    localStorage.setItem('projectStorage', JSON.stringify(projectList))
    // localStorage.setItem('currentID', (id).toString())
}

function showProjectCreationForm(){
    const projectForm = q('#projectForm')
    projectForm.classList.remove('hidden')
    q('#projectInput').focus()
}

function hideProjectCreationForm(){
    const projectForm = q('#projectForm')
    projectForm.classList.add('hidden')
    q('#projectInput').value = ''
}

// HIDE TASK BUTTON
function hideAddTaskBtn(){
    const taskBtn = q('#addTaskBtn')
    taskBtn.classList.add('hidden')
}

function showAddTaskBtn(){
    const taskBtn = q('#addTaskBtn')
    taskBtn.classList.remove('hidden')
}




// PROJECT CLASS
export class Project{
    constructor(name, projectID){
        this.name = name
        this.taskList = []
        this.taskCount = this.taskList.length
        this.projectID = projectID
    }
}
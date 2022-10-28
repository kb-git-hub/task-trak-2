import { q, qA, create } from "./utils";

// CREATE EVENT LISTENERS FOR NEW PROJECT FUNCTIONS
export const createProjectListeners = () =>{
    const projectSubmit = q('.projectSubmitBtn')
    projectSubmit.addEventListener('click', processProjectInput)
    
    const projectCancel = q('.projectCancelBtn')
    projectCancel.addEventListener('click', hideProjectCreationForm)
    
    const projectCreate = q('#addProject')
    projectCreate.addEventListener('click', showProjectCreationForm)
    
    const leftPanel = q('.leftPanel')
    leftPanel.addEventListener('click', checkTile)    

    displayProject(projectList)
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

// RETRIEVE LOCAL STORAGE OBJECTS OR START WITH EMPTY PROJECT ARRAY
let defaultProjectList = []
let projectList = localStorage.getItem('myProjectList')
projectList = JSON.parse(projectList || JSON.stringify(defaultProjectList))





// PROCESS PROJECT INPUT and CREATE NEW PROJECT
function processProjectInput(e){
    e.preventDefault()
    let projectName = q('#projectInput').value
    let projectID = assignProjectID()
    const newProject = new Project(projectName, projectID)


    projectlist




}


// DETERMINE PROJECT ID BASED ON PROJECT LIST LENGTH
function assignProjectID(){
    const projects = qA('[data-project]')
    const newProjectID = projects.length
    return newProjectID
}








function checkTile(){}
function displayProject(input){}



//PROJECT CLASS  - I dont know what that datathing is
export class Project{
    constructor(name, projectID){
        this.name = name
        this.taskList = []
        this.taskCount = this.taskList.length
        this.projectID
    }
}


export default class Project {
    constructor(name) {
        this.name = name,
        this.projectTasks = []
    }

    setName = (name) => {
        this.name = name
    }
    getProjectName = () => {
        return this.name
    }
    setProjectTasks = (tasks) => {
        this.projectTasks = tasks
    }
    getProjectTasks = () => {
        return this.projectTasks
    }
    //RETURNS TASK - !! if TF value needed
    getTask = taskName =>{
        return this.projectTasks.find(task => task.getTaskName() === taskName)
    }
    addTask = task =>{
        if (!!this.getTask(task.name)) return
        this.projectTasks.push(task)
    }
    deleteTask = taskName =>{
        this.projectTasks =  this.projectTasks.filter(task=>task.getTaskName() !== taskName)
    }

}
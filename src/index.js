import Project from './modules/projects';
import Task from './modules/tasks';
import '/src/styles/style.css'

const task = new Task('task 1', 'today' , 'details')
const task2 = new Task('task 2', 'tomorrow' , 'details2')
const task3 = new Task('task 3', 'tomorrow' , 'details2')
const task4 = new Task('task 4', 'tomorrow' , 'details2')

const ar = [task, task2]

const project = new Project('Project1')
project.setProjectTasks(ar)

project.addTask(task3)
console.log('🌌 | file: index.js | line 12 | project', project.projectTasks)

project.deleteTask(task.name)
console.log('🌌 | file: index.js | line 12 | project', project.projectTasks)
import '/src/style.css'

import { createProjectListeners } from './modules/project'
import { q } from './modules/utils'
import { createTaskListeners, displayTask } from './modules/task'
import { editContainerListeners } from './modules/projectEdit'
import { dragAndDrop } from './modules/drag'
import { displayAllTasks } from './modules/home'


// listEvents()
createTaskListeners()
createProjectListeners()
editContainerListeners()
dragAndDrop()
displayAllTasks()


// SHOW / HIDE LEFT MENU
const menu = q('.hiddenMenu')
menu.addEventListener('click', () => {
    const leftPanel = q('.leftPanel')
    leftPanel.classList.toggle('hidden')
})

//STARTUP COLOR THEME -- ! put on darkmode for dev
const themeSelector = q('.checkbox')
if (!themeSelector.checked) document.body.classList.add('light')
else document.body.classList.remove('light')

// LIGHT / DARK THEME SWITCH
themeSelector.addEventListener('change', () => document.body.classList.toggle('light'))



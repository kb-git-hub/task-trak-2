import '/src/style.css'

import { createProjectListeners } from './modules/project'
import { q } from './modules/utils'




// listEvents()
createProjectListeners()





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




import { q, qA, create } from './modules/utils'
import '/src/style.css'





// SHOW / HIDE LEFT MENU
const menu = q('.hiddenMenu')
menu.addEventListener('click', () => {
    const leftMenu = q('.leftPanel')
    leftMenu.classList.toggle('hidden')
})

//STARTUP COLOR THEME -- ! put on darkmode for dev
const themeSelector = q('.checkbox')
if (!themeSelector.checked) document.body.classList.add('light')
else document.body.classList.remove('light')

// LIGHT / DARK THEME SWITCH
themeSelector.addEventListener('change', () => document.body.classList.toggle('light'))



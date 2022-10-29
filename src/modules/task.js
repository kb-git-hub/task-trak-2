import { q } from "./utils"

















export const updateTitle = title =>{
    console.log('updateTitle', title);
    const titleHeading = q('.title')
    titleHeading.textContent = title.textContent

}
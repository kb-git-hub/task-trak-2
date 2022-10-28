const q = (query) => document.querySelector(query)
const qA = (query) => [...document.querySelectorAll(query)]
const create = (query) => document.createElement(query)

const createSpanIcon = name =>{
    const icon = create('span')
    icon.classList.add('material-icons-round')
    icon.textContent = name
    return icon
}

export { q, qA, create, createSpanIcon }


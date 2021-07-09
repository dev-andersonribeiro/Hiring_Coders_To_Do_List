// pegando  os dados do formulário
const listContainer = document.querySelector('[data-lists]')

const newListForm = document.querySelector('[data-new-list-form]')

const newListInput = document.querySelector('[data-new-list-input]')

let lists = []

// adicionando evento no botao
newListForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const listName = newListInput.value
    if ( listName === null || listName === '' )
    return
    
    // populando a lista
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    render()
    
})

function render() {
    clearElement(listContainer)
    lists.forEach(function(list) {
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerText = list.name
        listContainer.appendChild(item)
    })
}
//criando elemento list

function createList(name) {
    return {id: Date.now().toString(), name: name }
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}


render()
// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
function createTodoList(todo){

const li = document.createElement("li")

const inputElement = document.createElement("input")
inputElement.type = "checkbox"
inputElement.id = "todo-" + todo.id
inputElement.dataset.id = String(todo.id)
if(todo.completed){
  inputElement.checked = true
}

const labelElement = document.createElement("label")
labelElement.textContent = todo.task
labelElement.htmlFor = "todo-"+ todo.id

const deleteBtn =document.createElement("button")
deleteBtn.textContent = "Delete"
deleteBtn.className = "delete-btn"
deleteBtn.dataset.id = String(todo.id)

li.appendChild(inputElement)
li.appendChild(labelElement)
li.appendChild(deleteBtn)

return li
}

let nextId = todoList.length ? Math.max(...todoList.map(t => t.id)) + 1 : 1;
const ulElement = document.querySelector('ul')
todoList.forEach(todo => ulElement.appendChild(createTodoList(todo)))


ulElement.addEventListener('change',(event) => {
  if(event.target.tagName !== 'INPUT' || event.target.type !== 'checkbox')return
  const id = Number(event.target.dataset.id)
  const item = todoList.find(todo => todo.id ===id)
  if(!item) return
  item.completed = event.target.checked
  console.log('Updated todoList=',todoList)
})

ulElement.addEventListener('click',(event) =>{

  const btn = event.target
  if(!(btn instanceof HTMLButtonElement))return
  if(!btn.classList.contains("delete-btn")) return

  const id=Number(btn.dataset.id)
  const index = todoList.findIndex(todo => todo.id ===id)
  if(index === -1)return
  todoList.splice(index,1)

  const li = btn.closest('li')
  if(li && li.parentNode){
    li.parentNode.removeChild(li)
  }
   console.log('Updated todoList after deleting=',todoList)

})

const addBtn = document.querySelector(".add-btn")
const dialog = document.querySelector("dialog")
const form = dialog.querySelector("form")
const input = form.querySelector("input")

addBtn.addEventListener('click',()=>{
  input.value = ''
  dialog.showModal()
})


form.addEventListener('submit',(event) =>{
event.preventDefault()

const task = input.value
if(!task) return

const newItem ={id: nextId++, task, completed:false }
todoList.push(newItem)
ulElement.appendChild(createTodoList(newItem));

console.log('newlist',todoList)
dialog.close();
})



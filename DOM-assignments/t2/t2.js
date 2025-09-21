

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

const ulElement = document.querySelector('ul')
todoList.forEach(function(todo) {

const li = document.createElement("li")

const inputElement = document.createElement("input")
inputElement.type = "checkbox"
inputElement.id = "todo-"+ todo.id
if(todo.completed){
  inputElement.checked = true
}

const labelElement = document.createElement("label")
labelElement.textContent = todo.task
labelElement.htmlFor = 'todo-'+ todo.id

li.appendChild(inputElement)
li.appendChild(labelElement)
ulElement.appendChild(li)
})
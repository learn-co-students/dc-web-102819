// Similar to a Ruby binary file, in that it starts the execution stack. 
document.addEventListener("DOMContentLoaded", () => {
  addInputListener()
});

// Find the input field and add an event listener
function addInputListener() {
  const taskForm = document.querySelector("#create-task-form")
  taskForm.addEventListener('submit', createTaskListener)

}

// Event listener for creating a new task
function createTaskListener(event) {
  // Without .preventDefault the form will attempt to redirect the page.
  event.preventDefault()

  // Grabbing the input value entered by the user
  const taskDescription = document.getElementById('new-task-description').value
  const taskList = document.querySelector('#tasks')

  // Create and append the new task list item
  const taskItem = document.createElement('li')
  taskList.appendChild(taskItem)

  // Create and append the span tag with the task description
  const spanTag = document.createElement('span')
  spanTag.innerText = taskDescription
  taskItem.appendChild(spanTag)

  // Create and append edit button
  const editBtn = document.createElement('button')
  editBtn.innerText = 'Edit Me'
  taskItem.appendChild(editBtn)

  
  
  editBtn.addEventListener('click', editTaskDescription)

  
}

function editTaskDescription(event) {
  const listItem = event.target.parentElement
  const spanTag = listItem.querySelector('span')
  const taskDescription = spanTag.innerText
  
  const editInput = document.createElement('input')
  editInput.value = taskDescription

  const editBtn = listItem.querySelector('button')
  editBtn.innerText = "Submit New Description"
  editBtn.remove()
  spanTag.remove()

  listItem.appendChild(editInput)
  listItem.appendChild(editBtn)

  editBtn.removeEventListener('click', editTaskDescription)
  editBtn.addEventListener('click', submitNewTaskDescription)
  
}


function submitNewTaskDescription(event) {
  // Find list item which is the parent of the submit button
  const listItem = event.target.parentElement
  const inputField = listItem.firstChild
  const editBtn = listItem.lastChild

  // Remove the input field and edit button
  inputField.remove()
  editBtn.remove()

  // Add the value of the previous input field as a span tag, and add a new edit button
  const newDescriptionTag = document.createElement('span')
  newDescriptionTag.innerText = inputField.value
  editBtn.innerText = "Edit Me"
  listItem.appendChild(newDescriptionTag)
  listItem.appendChild(editBtn)
  // listItem.appendChild()


}
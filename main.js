const toDoInput = document.querySelector("#todo-input")
const addTask = document.querySelector("#add-btn")
const toDoList = document.querySelector(".todo-list")
const dleteAllCT = document.querySelector("#delete-all-btn")


dleteAllCT.addEventListener("click", (e) => {
  const completedTask = document.querySelectorAll(".completed")

  completedTask.forEach((item) => {
    item.remove()
  }
  )

}
)

const handleComplete = (e) => {
  const li = e.target.parentElement.parentElement

  li.classList.toggle("completed")

  const editBtn = document.querySelector(".edit-btn")

  editBtn.classList.toggle("edit-btn2")
}



const addEditDelete = (taskActionDiv) => {
  const editBtn = document.createElement("button")
  editBtn.classList.add("edit-btn")
  editBtn.textContent = "Edit"

  const deleteBtn = document.createElement("button")
  deleteBtn.classList.add("delete-btn")
  deleteBtn.textContent = "Delete"

  taskActionDiv.appendChild(editBtn)
  taskActionDiv.appendChild(deleteBtn)
}

const handleEditSave = (e) => {
  const showTask = document.querySelectorAll('input[type="text"]');
  showTask[1].setAttribute("disabled", "disabled")

  const taskActionDiv = e.target.parentElement

  addEditDelete(taskActionDiv)

  e.target.remove()


}
const handleEditDelete = (e) => {

  const showTask = document.querySelectorAll('input[type="text"]')
  if (e.target.className === "edit-btn") {
    showTask[1].removeAttribute("disabled")
    showTask[1].focus();
    const deleteChild = e.target.parentElement.children
    const childArr = Array.from(deleteChild)
    childArr.forEach(element => {
      element.remove()
    });
    const saveBtn = document.createElement("button")
    saveBtn.textContent = "Save";
    saveBtn.classList.add("save-btn")
    console.log(e.currentTarget.appendChild(saveBtn))
    saveBtn.addEventListener("click", (e) => handleEditSave(e))
  }
  if (e.target.className === "delete-btn") {
    e.target.parentElement.parentElement.remove()
  }

}

const addTaskDynamically = (task) => {
  const li = document.createElement("li");

  const taskDivLeft = document.createElement("div")

  const checkBox = document.createElement("input");
  checkBox.classList.add("complete-checkbox")
  checkBox.type = "checkBox";
  checkBox.addEventListener("change", (e) => handleComplete(e)
  )

  const showTask = document.createElement("input");
  showTask.setAttribute("disabled", "disabled")
  showTask.type = "text";
  showTask.value = task;

  taskDivLeft.appendChild(checkBox)
  taskDivLeft.appendChild(showTask)

  const taskActionDiv = document.createElement("div")
  taskActionDiv.classList.add("taskActionDiv")
  taskActionDiv.addEventListener("click", (e) => handleEditDelete(e))

  addEditDelete(taskActionDiv)

  li.appendChild(taskDivLeft)
  li.appendChild(taskActionDiv)

  toDoList.appendChild(li)

}

const handleTask = () => {
  const task = toDoInput.value

  if (task === "") {
    return alert("Enter Task")
  }

  addTaskDynamically(task)

  toDoInput.value = ""

  
}




addTask.addEventListener("click", handleTask)




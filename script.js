document.getElementById("addBtn").addEventListener("click", function () {
const task = document.getElementById("taskInput").value
const li = document.createElement('li')
li.textContent = task
document.getElementById("taskList").appendChild(li)
})
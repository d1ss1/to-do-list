document.getElementById("addBtn").addEventListener("click", function () {
const task = document.getElementById("taskInput").value
const li = document.createElement('li')
if (task.trim() == "") {
  return
}
li.textContent = task
li.addEventListener("click", function() {
  li.remove()
})
document.getElementById("taskList").appendChild(li)
document.getElementById("taskInput").value = "";
        });

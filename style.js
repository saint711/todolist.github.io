// Function to add a new task
function addTask() {
    var inputValue = document.getElementById("taskInput").value;
    if (inputValue === '') {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    var textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);

    // Create a close button and append it to the task
    var closeButton = document.createElement("span");
    var closeText = document.createTextNode("\u00D7");
    closeButton.className = "close";
    closeButton.appendChild(closeText);
    closeButton.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    };
    li.appendChild(closeButton);

    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
}

// Close button for existing tasks
var closeButtons = document.getElementsByClassName("close");
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    };
}

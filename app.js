document.addEventListener("keydown", function(event) {//on each key press it checks which key
    if (event.keyCode == 186 || event.keyCode == 188) { //when you press: or ,

    	//test to get current class index
    	/*For now it only gets the last index, fix if prod*/
    	var lengthOfTasks = (document.querySelectorAll('.taskContainer').length) - 1;
    	console.log(lengthOfTasks);
    	//test ends



    	event.preventDefault(); //: and , don't get written down

        //Creation of subtask
        var newSubtask = document.createElement("input"); //creates input
        newSubtask.classList.add("subtask"); //adds the class subtask
        appendInputAttributes(newSubtask); //adds name and placeholder attributes
       	document.getElementsByClassName('taskContainer')[lengthOfTasks].appendChild(newSubtask); //appends subtask
       	newSubtask.focus(); //Type-ready on creation
        

    }


    if(event.keyCode == 190 /*period*/ || event.keyCode == 13 /*enter*/){//if the user types . or ,
    	//FIX add a delay for the period in case someone is typing a sentence or a link.com

    	//prevents it from typing . or enter
    	event.preventDefault();

    	//creates new TaskContainer and task input
    	var newTaskContainer = document.createElement("div");
    	newTaskContainer.classList.add("taskContainer");

    	var newTask = document.createElement("input");
    	newTask.classList.add("task");
    	appendInputAttributes(newTask);
    	newTaskContainer.appendChild(newTask);

    	document.body.appendChild(newTaskContainer);
    	newTask.focus(); //ready to type on creation
    }
})


function appendInputAttributes(input){ //Adds the attributes to text inputs
	input.type= "text";
	if(input.className == "subtask"){
		input.placeholder = "subtask";
		input.name == "subtask";
	} else if (input.className == "task"){
		input.placeholder == "task"; //check this!
		input.name == "task";
	}
}
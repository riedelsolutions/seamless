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
        createCheckbox('taskContainer');
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
        createCheckbox(newTaskContainer)
    	newTask.classList.add("task");
    	appendInputAttributes(newTask);
    	newTaskContainer.appendChild(newTask);

    	document.body.appendChild(newTaskContainer);
    	newTask.focus(); //ready to type on creation
    }

    function createCheckbox(whereToAppend){
        var newline = document.createElement("br");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add = "checkbox";
        if(whereToAppend =='taskContainer'){
        document.getElementsByClassName(whereToAppend)[lengthOfTasks].appendChild(newline);
        document.getElementsByClassName(whereToAppend)[lengthOfTasks].appendChild(checkbox);
        }else if (whereToAppend == newTaskContainer){
            newTaskContainer.appendChild(checkbox);
        }
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
var button1 = document.getElementById("addbutton1");
var button2 = document.getElementById("addbutton2");
var button3 = document.getElementById("addbutton3");
var userinput = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listitems = document.querySelector("li");


function addListElementButtons (){
	 var li = document.createElement("li");
		li.appendChild(document.createTextNode(userinput.value+" "));
		ul.appendChild(li);
		var newbutton1 = document.createElement("button");
		newbutton1.appendChild(document.createTextNode("Delete"));
		li.appendChild(newbutton1);
		var newbutton2 = document.createElement("button");
		newbutton2.appendChild(document.createTextNode("Complete - Y/N"));
		li.appendChild(newbutton2);
		userinput.value = "";
newbutton1.addEventListener("click", function() {

			this.parentElement.remove();
		
		})

newbutton2.addEventListener("click", function() {
			
			this.parentElement.classList.toggle("done");
			})

}


button1.addEventListener("click", function() {
	if (userinput.value.length > 0){
		addListElementButtons()
		}
	else{

		prompt("Fill in the text box...i will add items to you list")
	}
})




userinput.addEventListener("keypress", function(press) {
	if (userinput.value.length > 0 && press.keyCode === 13){
		addListElementButtons()
	}

	})
	





// adding all this to your other lists?? only works on 1st list and tidy up code 

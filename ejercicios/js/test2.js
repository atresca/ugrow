function createButton(){
	var button = document.createElement("input");
	button.setAttribute("id", "myButton");
	button.setAttribute("type", "button");
	button.setAttribute("style", "background-color:pink; width:100px;height:100px");
	button.setAttribute("onclick", "timePassed()");
	document.getElementsByTagName("body")[0].appendChild(button);
	clock();
}

function clock(){
	var date = new Date()
	var hours = date.getHours();
	var min = date.getMinutes();
	var seg = date.getSeconds();
	if (hours < 10) {hours = "0" + hours;}
	if (min < 10) {min = "0" + min;}
	if (seg < 10) {seg = "0" + seg;}
	var time = hours + ":" + min + ":" + seg;
	document.getElementById('myButton').value = time;
	tiempo = setTimeout('clock()',1000);
	var counter =0;
	var count =function count(){
		counter++;
		return counter;
	}
}

function timePassed(){
	alert(count());
}

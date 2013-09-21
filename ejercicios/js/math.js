
function getInput(){
	return document.getElementById("input").value;	
}

function getInput2(){
	return document.getElementById("input2").value;	
}

function round(){
	x = getInput();
	alert("Redondea "+x);
	alert(Math.round(x));
}

function random(){
	alert(Math.random());
}


function floor(){
	x=getInput();
	alert("piso de "+x);
	alert(Math.floor(x));
}

function sqrt(){
	var x =getInput();
	alert("raiz de "+x);
	alert(Math.sqrt(x));
}	

function pi(){
	alert(Math.PI);
}

function absolut(){
	var x = getInput();
	alert("abs("+x+")");
	alert(Math.abs(x));
}

function pow(){
	var x = getInput();
	var y = getInput2();
	alert(x+" a la "+y);
	alert(Math.pow(x,y));
}

function log(){
	x = getInput();
	alert("log("+x+")");
	alert(Math.log(x));
}

function cos(){
	x =getInput();
	alert("log("+x+")");
	alert(Math.cos(x));
}

function ceil(){
	x =getInput();
	alert("ceil("+x+")");
	alert(Math.ceil(x));
}

function acos(){
	// x=-1
	x = getInput();
	alert("acos("+x+")");
	alert(Math.acos(x));
}

function asin(){
	// x=-1
	x = getInput();
	alert("asin("+x+")");
	alert(Math.asin(x));
}

function atan(){
	// x=-1
	x = getInput();
	alert("atan("+x+")");
	alert(Math.atan(x));
}

function tan(){
	// x=-1
	x = getInput();
	alert("tan("+x+")");
	alert(Math.tan(x));
}

function exp(){
	//x =1
	x = getInput();
	alert("exp("+x+")");
	alert(Math.exp(x));
}

function max(){
	//x=1 , y=12
	x = getInput();
	y = getInput2();
	alert("max("+x+", "+y+")");
	alert(Math.max(x,y));
}

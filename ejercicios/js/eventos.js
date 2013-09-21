/*----------------------------Funciones auxiliares--------------------------*/
var paises= new Array("Seleccione una opcion","Espana","Argentina","Colombia","Francia");
var provincias_1=new Array("Andalucia","Asturias","Baleares","Canarias","Castilla y Leon","Castilla-La Mancha") ;
var provincias_2=new Array("Salta","San Juan","San Luis","La Rioja","La Pampa"); 
var provincias_3=new Array("Cali","Santamarta","Medellin","Cartagena"); 
var provincias_4=new Array("Aisne","Creuse","Dordogne","Essonne","Gironde ");

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

function write_name(){
	alert("Mi nombre es "+ document.getElementsByTagName("input")[1].value);	
}
function agrega_paises(){
	for(i=1;i<paises.length;i++){
		document.getElementById("pais").options[i]= new Option(paises[i],i);
	}
}

function cambia_provincia(){
    var pais = document.getElementById("pais").selectedIndex;
	if (pais!=0){
		mis_provincias= eval("provincias_" + pais);
		for (i=0; i<mis_provincias.length;i++){
			document.getElementById("provincia").options.remove(i);
		}
		for(i=0;i<mis_provincias.length;i++){
			document.getElementById("provincia").options[i] = new Option(mis_provincias[i],i);
  	 	} 
	}else{
		for (i=0; i<mis_provincias.length;i++){
			document.getElementById("provincia").options.remove(i);
		}
		document.getElementById("provincia").options[0] = new Option("Seleccione un pais antes",0);
	}	
    document.getElementById("provincia").options[0].selected = true; 
} 

function  onclick(){
	alert("se ejecuto el onclick");
} 

/*----------------------------------------------------------------------------*/

window.onload=function onload(){
	document.getElementsByTagName("body")[0].setAttribute("onload","onclick()");
	alert(document.getElementsByTagName("body")[0].getAttribute("onload") + " Se cargo el onload");
	document.getElementsByTagName("button")[0].setAttribute("onclick","round()");
	document.getElementsByTagName("button")[4].setAttribute("onclick","agrega_paises()");
	//alert(document.getElementsByTagName("button")[4].getAttribute("onclick"));
	document.getElementById("pais").setAttribute("onchange","cambia_provincia()");
	document.getElementsByTagName("button")[5].setAttribute("onclick","write_name()");
	document.getElementsByTagName("button")[9].setAttribute("ondblclick","doubleclick()");
	document.getElementsByTagName("button")[10].setAttribute("onmousedown","mousedown()");
	document.getElementsByTagName("button")[11].setAttribute("onmousemove","mousemove()");
	document.getElementsByTagName("button")[12].setAttribute("onmouseup","mouseup()");
	document.getElementsByTagName("button")[13].setAttribute("onmouseover","mouseover()");
	//document.getElementsByTagName("button")[14].setAttribute("onclick","onunload()");
};

window.onfocus=function botongigante2(){
	document.getElementsByTagName("button")[1].setAttribute("style","width:300px");
};

window.onresize=function botongigante(){
	document.getElementsByTagName("button")[2].setAttribute("style","width:300px");
};

window.onblur=function botongigante3(){
	document.getElementsByTagName("button")[3].setAttribute("style","width:300px");
};

window.onkeydown=function keydown(){
	document.getElementsByTagName("button")[6].setAttribute("style","background-color:pink");
};

window.onkeypress=function keypress(){
		document.getElementsByTagName("button")[7].setAttribute("style","background-color:pink");
};

window.onkeyup=function keyup(){
		document.getElementsByTagName("button")[8].setAttribute("style","background-color:pink");
};

function doubleclick(){
	document.getElementsByTagName("button")[9].setAttribute("style","background-color:blue");
};

function mousedown(){
	document.getElementsByTagName("button")[10].setAttribute("style","background-color:green");
};

function mousemove(){
	document.getElementsByTagName("button")[11].setAttribute("style","background-color:yellow");
};

function mouseup(){
	document.getElementsByTagName("button")[12].setAttribute("style","background-color:orange");
};

function mouseover(){
	document.getElementsByTagName("button")[13].setAttribute("style","background-color:red");
};

window.onbeforeunload=function unload(){
	alert("Estas seguro?");
};

/*window.onunload=function unload(){
	alert("adgsghdjf");
	document.getElementsByTagName("h1")[0].setAttribute("style","font-size:40px");
};*/

function openwindow(){
	window.open('http://www.w3schools.com','mywindow','width=400,height=200');
	
}


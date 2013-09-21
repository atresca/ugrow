// By Agustin Tresca
var arreglo = new Array();
 
function Persona() {
	var nombre;
	this.setNombre=function(nom){nombre= nom;};
	this.getNombre=function(){return nombre;};
}

function PerJuridica() {
	var patrimonio;
	var capacidad;
	var nacionalidad;
	this.setPatrimonio=function(patri){patrimonio= patri;};
	this.getPatrimonio=function(){return patrimonio;};
	this.setCapacidad=function(capa){capacidad= capa;};
	this.getCapacidad=function(){return capacidad;};
	this.setNacionalidad=function(nacion){nacionalidad= nacion;};
	this.getNacionalidad=function(){return nacionalidad;};
}

function Domicilio() {
		var domicilio;
		this.setDomicilio=function(dom){domicilio=dom;};
		this.getDomicilio=function(){return domicilio;};
}

function PerFisica() {
	var apellido;
	var dni;
	var altura;
	var edad;
	this.setApellido=function(ape){apellido =ape;};
	this.getApellido=function(){return apellido;};
	this.setDni=function(documento){dni =documento;};
	this.getDni=function(){return dni;};
	this.setAltura=function(alt){altura= alt;};
	this.getAltura=function(){return altura;};
	this.setEdad=function(age){edad= age;};
	this.getEdad=function(){return edad;};
}

function mostrarPersona(){
	alert(document.getElementById("select").options[document.getElementById("select").selectedIndex].value);
	myWindow = window.open('','',"channelmode=yes,height=400,width=400,resizable=yes,titlebar=yes");
	for (i in arreglo){
		if (arreglo[i] instanceof PerFisica){
			if (arreglo[i].getNombre()+' '+arreglo[i].getApellido() == document.getElementById("select").options[document.getElementById("select").selectedIndex].value){
				var indexF = i;  //arreglo.indexOf(arreglo[i])
				myWindow.document.write("Nombre: "+arreglo[indexF].getNombre());
				myWindow.document.write("<br>");
				myWindow.document.write("Apellido: "+arreglo[indexF].getApellido());
				myWindow.document.write("<br>");
				myWindow.document.write("Dni: "+arreglo[indexF].getDni());
				myWindow.document.write("<br>");
				myWindow.document.write("Edad: "+arreglo[indexF].getEdad());
				myWindow.document.write("<br>");
				myWindow.document.write("Altura: "+arreglo[indexF].getAltura());
				myWindow.document.write("<br>");
				myWindow.document.write("Domicilio: "+arreglo[indexF].getDomicilio());
			}
		}else if (arreglo[i] instanceof PerJuridica){
			if (arreglo[i].getNombre() == document.getElementById("select").options[document.getElementById("select").selectedIndex].value){
				var indexJ = i;
				myWindow.document.write("Razon Social: "+arreglo[indexJ].getNombre());
				myWindow.document.write("<br>");
				myWindow.document.write("Patrimonio: "+arreglo[indexJ].getPatrimonio());
				myWindow.document.write("<br>");
				myWindow.document.write("Capacidad: "+arreglo[indexJ].getCapacidad());
				myWindow.document.write("<br>");
				myWindow.document.write("Nacionalidad: "+arreglo[indexJ].getNacionalidad());
				myWindow.document.write("<br>");
				myWindow.document.write("Domicilio Legal: "+arreglo[indexJ].getDomicilio());
			}
		}
	}
	//document.getElementById("select").options[document.getElementById("select").selectedIndex];
	myWindow.focus();
}

function agregaPersona(tipo){
	if (tipo=="fisica"){
		PerFisica.prototype = new Persona();
		PerFisica.constructor.prototype =PerFisica; //Corrige el puntero del constructor;
		Domicilio.prototype = new PerFisica();
		var persona = new Domicilio();
		persona.setNombre(document.getElementById("nameF").value);
		persona.setApellido(document.getElementById("apellidoF").value);
		persona.setDni(document.getElementById("dniF").value);
		persona.setEdad(document.getElementById("edadF").value);
		persona.setAltura(document.getElementById("alturaF").value);
		//persona.setDomicilio(document.getElementById("domicilioF").value);
	}else if (tipo=='juridica'){
		PerJuridica.prototype = new Persona();
		Domicilio.prototype = new PerJuridica();
		var persona = new Domicilio();
		persona.setNombre(document.getElementById("nameJ").value);
		persona.setPatrimonio(document.getElementById("patrimonioJ").value);
		persona.setCapacidad(document.getElementById("capacidadJ").value);
		persona.setNacionalidad(document.getElementById("nacionalidadJ").value);
		//persona.setDomicilio(document.getElementById("domicilioJ").value);
	}
	//alert(persona instanceof Domicilio);
	arreglo.push(persona);
	if (persona instanceof PerFisica){
		var option = new Option (persona.getNombre()+' '+ persona.getApellido());
	}else if (persona instanceof PerJuridica){
		var option = new Option (persona.getNombre());
	}
	document.getElementById("select").options.add(option);
}
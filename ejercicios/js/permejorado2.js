// By Agustin Tresca
var arreglo = new Array("Seleccione una opcion");
 
function Persona() {
	var nombre;
	this.setNombre=function(nom){this.nombre= nom;};
	this.getNombre=function(){return this.nombre;};
}

function PerJuridica() {
	var patrimonio;
	var capacidad;
	var nacionalidad;
	var domicilio =new Domicilio();
	this.setPatrimonio=function(patri){this.patrimonio= patri;};
	this.getPatrimonio=function(){return this.patrimonio;};
	this.setCapacidad=function(capa){this.capacidad= capa;};
	this.getCapacidad=function(){return this.capacidad;};
	this.setNacionalidad=function(nacion){this.nacionalidad= nacion;};
	this.getNacionalidad=function(){return this.nacionalidad;};
	this.setDomicilio=function(calle, numero){
		domicilio.setCalle(calle);
		domicilio.setNumero(numero);
	};
	this.getDomicilio=function(){
		return domicilio.getCalle()+ domicilio.getNumero();
	};
}

function Domicilio() {
		var calle;
		var altura;
		this.setCalle=function(street){this.calle=street;};
		this.getCalle=function(){return this.calle;};
		this.setNumero=function(numero){this.altura=numero;};
		this.getNumero=function(){return this.altura;};
}

function PerFisica() {
	var apellido;
	var dni;
	var altura;
	var edad;
	var domicilio = new Domicilio();
	this.setApellido=function(ape){this.apellido =ape;};
	this.getApellido=function(){return this.apellido;};
	this.setDni=function(documento){this.dni =documento;};
	this.getDni=function(){return this.dni;};
	this.setAltura=function(alt){this.altura= alt;};
	this.getAltura=function(){return this.altura;};
	this.setEdad=function(age){this.edad= age;};
	this.getEdad=function(){return this.edad;};
	this.setDomicilio=function(calle, numero){
		domicilio.setCalle(calle);
		domicilio.setNumero(numero);
	};
	this.getDomicilio=function(){
		return domicilio.getCalle()+' '+domicilio.getNumero();
	};
}

function mostrarPersona(){
	//alert(document.getElementById("select").options[document.getElementById("select").selectedIndex].value);
	myWindow = window.open('','',"channelmode=yes,height=400,width=400,resizable=yes,titlebar=yes");
	for (i in arreglo){
		//alert("fdfaa");
		/*alert(i);
		alert(document.getElementById("select").selectedIndex);*/
		if (i == document.getElementById("select").selectedIndex){
		alert(arreglo[i].apellido);
		alert(arreglo[i] instanceof PerFisica);
			/*alert(arreglo[i] instanceof Persona);
			alert(arreglo[i].hasOwnProperty("apellido"));
			alert(arreglo[i].nombre);*/
			//alert(PerFisica.prototype.isPrototypeOf(arreglo[i]));
			if (PerFisica.prototype.isPrototypeOf(arreglo[i])){ //arreglo[i] instanceof PerFisica
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
			}else if (arreglo[i] instanceof PerJuridica){
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
		//PerFisica.constructor.prototype =PerFisica; //Corrige el puntero del constructor;
		var persona = new PerFisica();
		persona.setNombre(document.getElementById("nameF").value);
		persona.setApellido(document.getElementById("apellidoF").value);
		persona.setDni(document.getElementById("dniF").value);
		persona.setEdad(document.getElementById("edadF").value);
		persona.setAltura(document.getElementById("alturaF").value);
		persona.setDomicilio(document.getElementById("calleF").value,document.getElementById("numeroF").value);
	}else if (tipo=='juridica'){
		PerJuridica.prototype = new Persona();
		var persona = new PerJuridica();
		persona.setNombre(document.getElementById("nameJ").value);
		persona.setPatrimonio(document.getElementById("patrimonioJ").value);
		persona.setCapacidad(document.getElementById("capacidadJ").value);
		persona.setNacionalidad(document.getElementById("nacionalidadJ").value);
		persona.setDomicilio(document.getElementById("calleJ").value,document.getElementById("numeroJ").value);
	}
	arreglo.push(persona);
	
	if (persona instanceof PerFisica){
		var option = new Option (persona.getNombre()+' '+ persona.getApellido());
	}else if (persona instanceof PerJuridica){
		var option = new Option (persona.getNombre());
	}
	document.getElementById("select").options.add(option);
}
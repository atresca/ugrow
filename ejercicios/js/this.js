/* Execution Context ----->  Value of THIS*/


alert(this);  // Global ----> GLOBAL OBJECT

function Persona() {
	var nombre;
	var apellido;

	this.setNombre = function(nom) {
		nombre = nom;
		alert("setnombre viejo");
	};
	this.getNombre = function() {
		return nombre;
	};
	this.setApellido = function(ape) {
		apellido = ape;
	};
	this.getApellido = function() {
		return apellido;
	};
}


/*
Persona.prototype.setNombre = function(nom) {
	this.nombre = nom + nom;
	alert("setnombre nuevo");
	alert(this.nombre);
};*/

function B() {
	alert("entro");
}

doSomething();

function doSomething() {
	alert(this); //Function ---------> Global object
	this.style.color = "blue";
}

function changebkg(){
	this.style.background="blue"; //con document.body cambia; con esta no pq hace referencia a la window
}

var a={
	b: function() {
        alert("ADENTRO");
        return this;
    }
};

function init() {
	alert("2222222");
	a.b();
	var a = new Persona();
	alert("333333333333");	
	alert("este: "+typeof(a.prototype));
	alert(typeof(a.b()));
	document.getElementsByTagName("button")[0].onclick=doSomething; //Copying, transforma onclick en metodo
	alert(document.getElementsByTagName("button")[0].onclick);

}

	// alert("fdagfad");
	// var p1 = new Persona();
	// p1.setNombre("Juan");
	// alert(p1.getNombre());
	// alert("asfasf");
	// B.prototype = new Persona();
	// // fix .constructor property, else it would be А
	// B.prototype.constructor = B;
	// B.superproto = Persona.prototype;
	// alert("ytyuyufy");
// 	
	// var b = new B();
// 	
	// var p2 = new Persona();
	// p2.setNombre("Pedro");
// 
	// Customer.prototype = new Persona();
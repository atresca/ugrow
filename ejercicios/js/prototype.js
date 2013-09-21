Persona.prototype.setNombre = function(nom) {
	this.nombre = nom + nom;
	alert("setnombre nuevo");
	alert(this.nombre);
};

function B() {
	alert("entro");
}

function init() {
	var p1 = new Persona();
	p1.setNombre("Juan");
	alert(p1.getNombre());
	alert("asfasf");
	B.prototype = new Persona();
	// fix .constructor property, else it would be А
	B.prototype.constructor = B;
	B.superproto = Persona.prototype;
	alert("ytyuyufy");
	var b = new B();
	
	
	var p2 = new Persona();
	p2.setNombre("Pedriño");

	Customer.prototype = new Persona();
}



function Persona() {
	var nombre;
	var apellido;
	var nacimiento = new Date();
	var today = new Date();

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
	this.setNac = function(year, month, day) {
		nacimiento.setFullYear(year, month, day);
	};
	this.getNac = function() {
		return nacimiento;
	};
	this.getToday = function() {
		return today;
	};
	this.edad = function() {
		//alert(today-nacimiento);
		//return parseInt((today-nacimiento)/1000/60/60/24/365);};
		return parseInt((today - nacimiento) / 24 / 365 / 60 / 60 / 1000);
	};
	//return (today -nacimiento);};
}
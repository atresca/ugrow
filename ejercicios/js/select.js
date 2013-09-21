var paises= new Array("Seleccione una opcion","Espana","Argentina","Colombia","Francia");
var provincias_1=new Array("Andalucia","Asturias","Baleares","Canarias","Castilla y Leon","Castilla-La Mancha") ;
var provincias_2=new Array("Salta","San Juan","San Luis","La Rioja","La Pampa"); 
var provincias_3=new Array("Cali","Santamarta","Medellin","Cartagena"); 
var provincias_4=new Array("Aisne","Creuse","Dordogne","Essonne","Gironde ");

function agrega_paises(){
	for(i=1;i<paises.length;i++){
		document.getElementById("pais").options[i] =new Option(paises[i],i);
    } 
}

function cambia_provincia(){
    var pais = document.getElementById("pais").selectedIndex;
	if (pais!=0){
		mis_provincias= eval("provincias_" + pais);
		for (i=0; i<mis_provincias.length;i++){
			document.getElementById("provincia").options.remove(i);
			//document.getElementById("provincia").options[i].remove(i);
		}
		for(i=0;i<mis_provincias.length;i++){
			//document.getElementById("provincia").options[i].add(mis_provincias[i],i);
			document.getElementById("provincia").options[i] = new Option(mis_provincias[i],i);
  	 	} 
	}else{
		for (i=0; i<mis_provincias.length;i++){
			document.getElementById("provincia").options.remove(i);
		}
		document.getElementById("provincia").options[0] = new Option("Seleccione un pais antes",0);
	}	
    //marco como seleccionada la opción primera de provincia 
    document.getElementById("provincia").options[0].selected = true; 
} 

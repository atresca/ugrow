function fecha(a){
	var b=new Array(3);
	for(var i=0;i<a.length;i++){
		b=a[i].split('/');
		alert("Vamos dia a dia");
		switch(b[1]){
			case('01'):
				document.write(b[0]+" de Enero "+" del "+b[2]);
				document.write("<br>");
				break;
			case("02"):
				document.write(b[0]+" de Febrero "+" del "+b[2]);
				document.write("<br>");
				break;
			case("03"):
				document.write(b[0]+" de Marzo "+" del "+b[2]);
				document.write("<br>");
				break;
			case("04"):
				document.write(b[0]+" de Abril "+" del "+b[2]);
				document.write("<br>");
				break;
			
			default:
				document.write("Dia osvaldo");
				document.write("<br>");
				alert(i);
		}
	}
}

function devolver(){
	alert(fecha(["10/01/2013","9/02/2012","01/03/2000","25/04/2003","31/05/2043","31/05/2043"]));
}
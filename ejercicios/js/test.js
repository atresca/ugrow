function array(){
	var a = new Array();
	a = getInput();
	alert("Tu input: " + a);
	var b = tomatrix(a);
	for(var i=0;i<3;i++){
		if(i==0){
			alert("Matriz original");
		}
		alert(b[i][0] +'  '+ b[i][1] +'  '+ b[i][2]);
	}
	var matrix = [];
	for(var i=0; i<3; i++) {
	    matrix[i] = [];
	    for(var j=0; j<3; j++) {
	        matrix[i][j] =b[j][i];
	    }
		if(i==0){
			alert("Matriz espejada");
		}
		alert(matrix[i][0] +'  '+ matrix[i][1] +'  '+ matrix[i][2]);
	}
}
	
function tomatrix(a){
	var b= a.split(',');
	if (b.length!=9){
		alert("Cantidad de elementos incorrecta");
		return;
	}else{
		var matrix = [];
		for(var i=0; i<3; i++) {
		    matrix[i] = [];
		    for(var j=0; j<3; j++) {
		        matrix[i][j] =b[i*3+j];
		    }
		}
		return matrix;
	}	
}

function getInput(){
	return document.getElementById("input").value;	
}
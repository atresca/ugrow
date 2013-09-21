function isBigEnough(element, index, array) {
  return (element >= 10);
}

function every(){
	var passed = [12, 5, 8, 130, 44].every(isBigEnough);
	// passed es false
	alert(passed.toString());
	var passed = [12, 54, 18, 130, 44].every(isBigEnough);
	// passed es true
	alert(passed.toString());
}

function shift(){
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.shift(); //remueve el 1er element
	alert(fruits);
}

function concatenar(){
	var hege = ["Cecilie", "Lone"];
	var stale = ["Emil", "Tobias", "Linus"];
	var kai = ["Robin"];
	var children = hege.concat(stale,kai); 
	alert(children);
}

function tostring(){
	var numero = 12434134;
	alert(numero.toString()+" esto es un string");
}

function join(){
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	var energy = fruits.join();
	alert(energy);
}

function valueof(){
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	alert(fruits.valueOf());
}
function lastindexof(){
	var fruits = ["Apple","Banana", "Orange", "Apple", "Mango"];
	alert(fruits.lastIndexOf("Apple", 2)); 	
}

function slice(){
	var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
	var citrus = fruits.slice(0,2); //solo slicea 2 elements, (start,end)
	alert(citrus);
}

function filter(){
	var passed = [12, 5, 8, 130, 44].filter(isBigEnough);
	// passed is false
	alert(passed);
	passed = [12, 54, 18, 130, 44].filter(isBigEnough);
	// passed is true
	alert(passed);
}

function ShowResults(value, index, ar) {
   alert("value: " +value+", index: " +index);
}

function foreach(){
	var letters = ['ab', 'cd', 'ef'];
	letters.forEach(ShowResults);
}

function indexOf(){
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	alert(fruits.indexOf("Apple")); //me tira la posicion
}

function map(){
	var numbers = [1, 4, 9];
	var roots = numbers.map(Math.sqrt);
	alert(roots);
}


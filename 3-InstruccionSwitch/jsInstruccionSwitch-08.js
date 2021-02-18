/*
DELGADO ALEXS 1-H
Ejercicio 5
*/

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);

	switch(destinoIngresado){
		case "Cataratas":
		case "Mar del plata":
			alert("Calor");
			break;
		case "Bariloche":
		case "Ushuaia":
			alert("Frio");
			break;
	}
}
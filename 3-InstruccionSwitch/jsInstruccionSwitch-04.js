/*
DELGADO ALEXS 1-H
Ejercicio 4

*/


function mostrar()
{
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);
	
		switch(mesDelAño){
		case "Febrero":
			alert("Este mes tiene 28 dias");
			break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Octubre":
		case "Diciembre":
			alert("Este mes tiene 31 dias");
			break;
		default:
			alert("Este mes tiene 30 dias ");
			break;
	}
}
/*
DELGADO ALEXS 1-H
Ejercicio 5
*/

function mostrar()
{
	var horaDelDia =txtIdHora.value;
	var horaDelDia = parseInt(horaDelDia)
	alert(horaDelDia);

	switch(horaDelDia){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
		break;
	}	
}
/*
DELGADO ALEXS 1-H
Ejercicio 10
*/

function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;
	alert(estacionIngresada+" "+destinoIngresado );
	var precio = 15000;

	switch(estacionIngresada){
		case "Invierno":
			switch(destinoIngresado){
				case "Bariloche":
				alert("Se viaja");
				break;
				default:
				alert("No se viaja");
				break;
			}
		break;
		case "Verano":		
			switch(destinoIngresado){
				case "Mar del plata":
				alert("Se viaja");
				break;

				case "Cataratas":
				alert("Se viaja");
				break;

				default:
				alert("No se viaja");
				break;
			}
		break;

		case "Primavera":
			switch(destinoIngresado){
				case "Bariloche":
					alert("No se viaja");
				break;
				default:
					alert("Se viaja");
				break;
			}
		break;

		default:
			alert("Se viaja")
		break;
	}


}//FIN DE LA FUNCIÓN
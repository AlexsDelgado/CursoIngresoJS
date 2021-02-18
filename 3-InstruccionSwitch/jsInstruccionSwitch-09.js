/*
DELGADO ALEXS 1-H
Ejercicio 5
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
				case "Mar del plata":
				precio = precio - precio*20/100;
				alert(precio);
				break;

				case "Bariloche":
				precio = precio + precio*20/100;
				alert(precio);
				break;
				default:
				precio = precio + precio*10/100;
				alert(precio);
				break;
			}
		break;
		case "Verano":		
			switch(destinoIngresado){
				case "Mar del plata":
				precio = precio + precio*20/100;
				alert(precio);
				break;

				case "Bariloche":
				precio = precio - precio*20/100;
				alert(precio);
				break;

				default:
				precio = precio + precio*10/100;
				alert(precio);
				break;
			}
		break;
		default:
			switch(destinoIngresado){
				case "Cordoba":
					alert(precio);
				default:
				precio = precio + precio*10/100;
				alert(precio);
				break;
			}
		break;
	}


}//FIN DE LA FUNCIÓN
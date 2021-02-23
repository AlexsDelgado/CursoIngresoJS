/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	while (claveIngresada != "utn750") {
		alert("Clave incorrecta");
		claveIngresada = prompt("ingrese la clave.");
	}
	alert("Clave correcta");
	
	
}//FIN DE LA FUNCIÓN

/*
	Alexs Delgado
	1-H

*/


function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	while (contador<5) {
		 numeroIngresado= prompt("Ingrese un valor:");
		 numeroIngresado = parseInt(numeroIngresado);
		 acumulador = acumulador + numeroIngresado;
		 contador++;
		 
	}
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN
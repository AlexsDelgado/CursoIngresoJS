/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numero;
	
	contador=0;
	acumulador=0;
	respuesta='si';

while (respuesta!="quit") {
	 		
	 		numero= prompt("Ingrese un valor, para cancelar ingrese 'quit':");
	 		respuesta=numero;
	 		numero = parseInt(numero);
		 	acumulador = acumulador + numero;
		 	contador++;
		 	console.log("c: "+ contador);
		 	console.log("a:"+ acumulador)
}
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN
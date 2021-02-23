/*
Delgado Alexs 1-H

Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimerNegativo;
	var banderaDelPrimerPar;
	var numeroIngresado;
	var numeroNegativoMayor;
	var numeroMinimoPar;
	var respuesta;
	
	//iniciar variables
	banderaDelPrimerPar=true;
	banderaDelPrimerNegativo=true;
	respuesta='si';
	while(respuesta=="si"){
		numeroIngresado=prompt("Ingrese un numero ");
		numeroIngresado=parseInt(numeroIngresado);
		
		if(banderaDelPrimerNegativo || numeroIngresado>numeroNegativoMayor){
			if(numeroIngresado<0){
				numeroNegativoMayor=numeroIngresado;
				banderaDelPrimerNegativo=false;
			}
		}
		if(banderaDelPrimerPar || numeroIngresado<numeroMinimoPar){
			if(numeroIngresado%2==0){
				numeroMinimoPar = numeroIngresado;
				banderaDelPrimerPar=false;
			}
	 	}
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroNegativoMayor;
	txtIdMinimo.value=numeroMinimoPar;
}
//FIN DE LA FUNCIÓN
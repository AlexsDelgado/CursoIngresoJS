/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadPares=0;
	var cantidadCeros=0;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado= prompt("Ingrese un numero");
		numeroIngresado= parseInt(numeroIngresado);
		while(isNaN(numeroIngresado)){
			numeroIngresado= prompt("Ingrese un numero");
			numeroIngresado= parseInt(numeroIngresado);
			
		}
		
		if(numeroIngresado%2==0){
			cantidadPares++;
		}
		if(numeroIngresado<0){
			sumaNegativos+= numeroIngresado;
			cantidadNegativos++;
		}else{
			
		sumaPositivos+=numeroIngresado;
		cantidadPositivos++;
		}
		if(numeroIngresado==0)cantidadCeros++;
		
		
		
		respuesta=prompt("desea continuar?");
	}//fin del while

	document.write("la suma de negativos es : "+sumaNegativos+"<br>");
	document.write("la suma de positivos es : "+sumaPositivos+"<br>");
	
	
	if(cantidadNegativos!=0){
		document.write("Cantidad de negativos: "+ cantidadNegativos+"<br>");
		document.write("Promedio negativos: "+(sumaNegativos/cantidadNegativos)+"<br>");
		}else document.write("No hay negativos <br>");
			
	if(cantidadPositivos!=0){
		document.write("cantidad de positivos: "+cantidadPositivos + "<br>");
		document.write("Promedio positivos: "+(sumaPositivos/cantidadPositivos)+"<br>");
	}else document.write("No hay positivos");
		
	document.write("cantidad de 0: "+cantidadCeros +"<br>"); 
	document.write("cantidad de pares: " +cantidadPares+"<br>");
	document.write("Diferencia entre positivos y negativos: " + (sumaPositivos+sumaNegativos));
}//FIN DE LA FUNCIÓN
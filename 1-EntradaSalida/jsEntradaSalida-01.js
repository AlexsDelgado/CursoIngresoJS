/*
Delgado Alexs 1-h

Tipo {gatos, perros , otro }
pelaje {corto, largo, sin pelo}
edad (validar)
nombre
raza
peso
estadoClinico {enfermo, internado, adopcion}
temperatura

mostrar por pantalla:
perro + pesado
% de enfermos /total mascotas
ultima mascota tipo (otro)
animal sin pelo con menor temperatura corporal
tipo animal con mayor promedio de temperatura
estado clinico la menor cantidad de tipo
promedio total de peso
nombre y raza del gato sin pelos mas liviano

*/

function mostrar()
{
	var tipo;
	var pelaje;
	var edad;
	var nombre;
	var raza;
	var peso;
	var estadoClinico;
	var temperatura;
	var seguir;
	
	var contadorPelaje;
	contadorPelaje=0;
	
	var otroNombre;
	
	var acumuladorTemperaturaPerro;
	var acumuladorTemperaturaGato;
	var acumuladorTemperaturaOtro;
	acumuladorTemperaturaPerro=0;
	acumuladorTemperaturaGato=0;
	acumuladorTemperaturaOtro=0;
	
	var promedioTemperaturaPerro;
	var promedioTemperaturaOtro;
	var promedioTemperaturaGato;
	promedioTemperaturaPerro=0;
	promedioTemperaturaGato=0;
	promedioTemperaturaOtro=0;
	
	var porcentajeGatosPerros;
	porcentajeGatosPerros=0;
	
	
	var acumuladorEnfermos;
	var acumuladorMascotas;
	acumuladorEnfermos=0;
	acumuladorMascotas=0;
	
	var temperaturaMenor;
	var tipoSinPeloMenorTemperatura;
	var nombreSinPeloMenorTemperatura;
	temperaturaMenor=0;
	
	var cantidadPerro;
	var cantidadGato;
	var cantidadOtro;
	cantidadOtro=0;
	cantidadPerro=0;	
	cantidadGato=0;
	
	var acumuladorPesoPerro;
	var acumuladorPesoGato;
	var acumuladorPesoOtro;
	acumuladorPesoPerro=0;
	acumuladorPesoGato=0;
	acumuladorPesoOtro=0;	
	
	
	var nombrePerroPesado;
	var perroPesado;
	perroPesado=0;
	
		
	var gatoLivianoPeso;
	var gatoLivianoNombre;
	var gatoLivianoRaza;
	gatoLiviano=0;
	
	var contadorEnfermos;
	var contadorAdopcion;
	var contadorInternados;
	contadorEnfermos=0;
	contadorAdopcion=0;
	contadorInternados=0;
	
	while(seguir !="esc"){
		
	
//validaciones de tipo barbijo/cal/etc
	
	tipo=prompt("Ingrese tipo de mascota: (gatos, perros , otro) ");
	while(tipo!="perro" && tipo!="gato" && tipo!="otro"){
		tipo=prompt("Error. Ingrese tipo de mascota:");
	}
	pelaje=prompt("Ingrese pelaje de la mascota: (corto, largo, sin pelo) ");
	while(pelaje!="corto" && pelaje!="largo" && pelaje!="sin pelo"){
		pelaje=prompt("Error. Ingrese pelaje de mascota:");
	}
	edad=prompt("Ingrese edad de la mascota: ");
	edad=parseInt(edad);
	while(isNaN(edad)==true || edad < 0 || edad > 50){ //Invento el tope (dudo que dichas mascotas superen los 50 años)
		edad=prompt("Error. Ingrese edad de la mascota: ");	
		edad=parseInt(edad);
	}
	nombre=prompt("Ingrese nombre de la mascota: ");
	while(isNaN(nombre)==false){
		nombre=prompt("Error. Ingrese nombre de la mascota: ");
	}
	raza=prompt("Ingrese raza de la mascota:");
	while(isNaN(raza)==false){
		raza=prompt("Error. Ingrese raza de la mascota:");
	}
	peso=prompt("Ingrese peso de la mascota:");
	peso=parseInt(peso);
	while(isNaN(peso)==true || peso < 0 || peso > 100 ){ //Invento el tope (dudo que dichas mascotas sean demasiado pesados)
		peso=prompt("Error. Ingrese peso de la mascota:");	
		peso=parseInt(peso);
	}
	
	estadoClinico=prompt("Ingresee el estado clinico de la mascota: (enfermo, internado, adopcion) ");
	while(estadoClinico!="enfermo" && estadoClinico!="internado" && estadoClinico!="adopcion"){
		estadoClinico=prompt("Error. Ingrese tipo de mascota:");
	}	


	temperatura=prompt("Ingrese temperatura de la mascota: (entre 36 y 40) ");
	temperatura=parseFloat(temperatura);
	while(isNaN(temperatura)==true || temperatura>40 || temperatura< 36){
		temperatura=prompt("Error. Ingrese temperatura de la mascota: ");
		temperatura=parseFloat(temperatura);
	}
	
	switch (tipo) {
		case "perro":
			if(cantidadPerro==0 || perroPesado<peso){ //Contador para entrar la primera vez y sacar un comparador
				nombrePerroPesado=nombre;
				perroPesado=peso;
			}
			acumuladorPesoPerro+=peso;
			acumuladorTemperaturaPerro+=temperatura;
			cantidadPerro++;
	
		break;
		case "gato":
			if(pelaje=="sin pelo"){
				if(cantidadGato==0 || gatoLivianoPeso>peso){
					
					gatoLivianoNombre=nombre;
					gatoLivianoPeso=peso;
					gatoLivianoRaza=raza;
				}
			}
			acumuladorPesoGato+=peso;
			acumuladorTemperaturaGato+=temperatura;
			cantidadGato++;
		break;
		case "otro":
			otroNombre=nombre;
			acumuladorPesoOtro+=peso;
			acumuladorTemperaturaOtro+=temperatura;
			cantidadOtro++;
		break;
	}
	
	switch (estadoClinico) {
		case "enfermo":
			 contadorEnfermos++;
		break;
		case "internado":
			contadorInternados++;
		break;
		case "adopcion":
			contadorAdopcion++;
		break;
	}
	
	
	if(pelaje="sin pelo"){
		if(contadorPelaje==0 || temperatura<temperaturaMenor){
			tipoSinPeloMenorTemperatura=tipo;
			nombreSinPeloMenorTemperatura=nombre;
			contadorPelaje++;
		}
	}
	acumuladorMascotas++; // acumulador al fnal del ciclo para contabilizar los 
	seguir=prompt("Desea seguir? (presione esc para terminar)");
}
	//operaciones fuera del while
	
	promedioTemperaturaGato=acumuladorTemperaturaGato/cantidadGato;
	promedioTemperaturaPerro=acumuladorTemperaturaPerro/cantidadPerro;
	promedioTemperaturaOtro=acumuladorTemperaturaOtro/cantidadOtro;
	promedioPesoTotal= (acumuladorPesoGato+acumuladorPesoOtro+acumuladorPesoPerro)/acumuladorMascotas;
	porcentajeGatosPerros = ((cantidadGato+cantidadPerro)/acumuladorMascotas); 
	
	if(cantidadPerro!=0){
		console.log("El perro mas pesado es " + nombrePerroPesado + ", con  "+perroPesado +" kilos"); //a
	}
	
	if(acumuladorEnfermos!=0){
		console.log("El porcentaje de mascotas enfermas son  " + (acumuladorEnfermos/acumuladorMascotas*100)+"%"); //b	
	}
	console.log("El nombre de la ultima mascota 'otro' es  "+ otroNombre); // c
	console.log("El animal sin pelo con menor temperatura es el " +tipoSinPeloMenorTemperatura + " " + nombreSinPeloMenorTemperatura ); // d
	if(promedioTemperaturaGato>promedioTemperaturaPerro){ // e
		if(promedioTemperaturaGato>promedioTemperaturaOtro){
			console.log("El animal con mayor promedio de temperatura son los Gatos");	
		}else{
			console.log("El animal con mayor promedio de temperatura son los Otros");
		}
	}if(promedioTemperaturaPerro>promedioTemperaturaOtro){
		console.log("El animal con mayor promedio de temperatura son los Perros");
	}else{
		console.log("El animal con mayor promedio de temperatura son los Otros");
	}
	if(contadorEnfermos<contadorAdopcion){ // g
		if(contadorEnfermos<contadorInternados){
			console.log("La menor cantidad de animales estan Enfermos");	
		}else{
			console.log("La menor cantidad de animales estan Internados");
		}
	}if(contadorAdopcion<contadorInternados){
		console.log("La menor cantidad de animales estan en Adopcion");
	}else{
		console.log("La menor cantidad de animales estan Internados");
	}	
	console.log("Los gatos y perros son equivalentes al " + porcentajeGatosPerros*100+"%"); // f 
	console.log("Promedio de Peso entre todas las mascotas es "+promedioPesoTotal); // h
	console.log("El gato sin pelos mas liviano es un "+ gatoLivianoRaza + " " + gatoLivianoNombre + " con " + gatoLivianoPeso + " kilos"); // h
	
	
}

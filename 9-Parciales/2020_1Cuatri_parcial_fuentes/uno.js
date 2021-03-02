/*
Delgado Alexs 1-H
parcial 2020 ej1

*/
function mostrar()
{
	
	var tipo;
	var cantidad;
	var precio;
	var marca;
	var fabricante;
	var contadorProductos=0;
	var contadorAlcohol=0;
	var acumuladorAlcohol=0;
	var fabricanteAlcohol=0;
	var cantidadAlcohol=0;
	var precioAlcohol=0;
	var contadorBarbijo=0;
	var acumuladorBarbijo=0;
	var contadorJabon=0;
	var acumuladorJabon=0;
	while(contadorProductos<5){


		while(tipo!="barbijo" && tipo!="jabon" && tipo!="alcohol"){
			tipo=prompt("Ingrese un tipo de producto");
		}
		while(isNaN(precio)==true || precio < 99 || precio>300){
			precio=prompt("Ingrese el precio (entre 100 y 300)");
			precio=parseInt(precio);
		}
		while(isNaN(cantidad)==true || cantidad < 0 || cantidad>1000){
			cantidad=prompt("Ingrese la cantidad (menor a 1000)");
			cantidad=parseInt(cantidad);
		}
		
		marca = prompt("Ingrese la marca del producto");
		fabricante = prompt("Ingrese el fabricante");
	
	

		switch(tipo){
			case "barbijo":
				acumuladorBarbijo+=cantidad;
				contadorBarbijo++;
			break;
			case "jabon":
				acumuladorJabon+=cantidad;
				contadorJabon++;
				
			break;
			case "alcohol":
				if(contadorAlcohol==0 || precio < precioAlcohol ){
					precioAlcohol=precio;
					fabricanteAlcohol=fabricante;
					cantidadAlcohol=cantidad;
				}
				acumuladorAlcohol+=cantidad;
				contadorAlcohol++;
			break;
			
		}
			contadorProductos++;
			tipo=""; //SE VUELVE A VACIAR LA VARIABLE PARA ENTRAR AL WHILE DE VALIDACION
			precio=0;//SE VUELVE A VACIAR LA VARIABLE PARA ENTRAR AL WHILE DE VALIDACION
			cantidad=0;//SE VUELVE A VACIAR LA VARIABLE PARA ENTRAR AL WHILE DE VALIDACION

	
	}
	
	if(acumuladorAlcohol!=0){
		console.log("El alcohol mas barato es" + fabricanteAlcohol + "y se compraron "+ cantidadAlcohol);
	}else{
			console.log("No se compro alcohol");
	}

	
	if(acumuladorBarbijo>acumuladorJabon){
		if(acumuladorBarbijo>acumuladorAlcohol){
			console.log("Barbijo fue el mas comprado con "+acumuladorBarbijo);
			console.log("PROMEDIO: "+acumuladorBarbijo/contadorBarbijo);
		}else{
			console.log("Alcohol fue el mas comprado con "+acumuladorAlcohol);
			console.log("PROMEDIO: "+acumuladorAlcohol/contadorAlcohol);
		}
	}else{
		if(acumuladorJabon>acumuladorAlcohol){
			console.log("acumuladorJabon fue el mas comprado con "+acumuladorJabon);
			console.log("PROMEDIO: "+acumuladorJabon/contadorJabon);
		}
	}

	console.log("Hay "+acumuladorJabon+" unidades de jabon");	
}

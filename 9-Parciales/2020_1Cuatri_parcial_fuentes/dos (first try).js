function mostrar()
{
  var tipo;
  var cantidad;
  var precio;
  var precioFinal=0;
  var descuento=0;
  var cantidadCal=0;
  var cantidadArena=0;
  var cantidadCemento=0;
  var acumuladorCal=0;
  var acumuladorCemento=0;
  var acumuladorArena=0;
  var acumuladorBolsas=0;
  var precioArena=0;
  var precioCal=0;
  var precioCemento=0;
  var arenaCaro=0;
  var calCaro=0;
  var cementoCaro=0;
  var seguirComprando;
  
  
  while(seguirComprando!="no"){
  	
  	
  	while(tipo!="arena" && tipo!="cal" && tipo!="cemento"){
  		tipo=prompt("Ingrese el tipo de bolsa: ");
  	}	
  	
  	while(isNaN(cantidad) || cantidad < 1){
  		cantidad=prompt("Ingrese la cantidad: ");
  		cantidad=parseInt(cantidad);
  	}
  	
  	while(isNaN(precio) || precio < 1){
  		precio=prompt("Ingrese el precio");
  		precio=parseInt(precio);
  	}
  	
  	switch (tipo) {
  		case "arena":
  			if(cantidadArena==0 || precio>arenaCaro){
  				arenaCaro=precio;
  			}
  			cantidadArena++;
  			acumuladorArena+=cantidad;
  			precioFinal+=precio*cantidad;
  		break;
  		case "cal":
  		if(cantidadCal==0 || precio>calCaro){
  				calCaro=precio;
  			}
  			cantidadCal++;
  			acumuladorCal+=cantidad;
  			precioFinal+=precio*cantidad;
  		break;
  		case "cemento":
  		if(cantidadCemento==0 || precio>cementoCaro){
  				cementoCaro=precio;
  			}
  			cantidadCemento++;
  			acumuladorCemento+=cantidad;
  			precioFinal+=precio*cantidad;
  		break;
  	}
  	precio=0;
  	cantidad=0;
  	tipo="";
  	
  	seguirComprando=prompt("¿Quiere seguir comprando? \n Escriba 'no' para dejar de comprar");
  	
  }
  acumuladorBolsas=acumuladorArena+acumuladorCal+acumuladorCemento;
  
	if(acumuladorBolsas>30){
		descuento=precioFinal*25/100;
	}else {
			if(acumuladorBolsas>10){
				descuento=precioFinal*15/100;
			}
	}
	
	console.log("El importe total a pagar es: " + precioFinal);
	if(descuento!=0){
		console.log("El precio final con descuento es :"+ (precioFinal-descuento));
	}
	if(acumuladorArena>acumuladorCal){
		if(acumuladorArena>acumuladorCemento){
			console.log("El tipo de bolsas mas compradas fueron las bolsas de Arena, un total de : "+acumuladorArena );
		}else{
			console.log("El tipo de bolsas mas compradas fueron las bolsas de Cemento, un total de : "+acumuladorCemento );
		}
	}else{
		if(acumuladorCal>acumuladorCemento){
			console.log("El tipo de bolsas mas compradas fueron las bolsas de Cal, un total de : "+acumuladorCal );
		}else{
			console.log("El tipo de bolsas mas compradas fueron las bolsas de Cemento, un total de : "+acumuladorCemento );
		}
	}
  	if(precioArena>precioCal){
  		if(precioArena>precioCemento){
  			console.log("El tipo de bolsas mas caras fueron las bolsas de Arena, un total de $"+arenaCaro);
  		}else{
  			console.log("El tipo de bolsas mas caras fueron las bolsas de Cemento, un total de $"+cementoCaro );
  		}
  	}else{
  		if(precioCal>precioCemento){
  			console.log("El tipo de bolsas mas caras fueron las bolsas de Cal, un total de $"+calCaro );
  		}else{
  			console.log("El tipo de bolsas mas caras fueron las bolsas de Cemento, un total de $"+cementoCaro );
  		}
  	}

  	
 

  	 
  
}

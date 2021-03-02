function mostrar(){
	
	/*
	
	+10 => - 15%
	+30 => -25%
	a) total, sin descuento;
	b) total con descuento;
	d) mayor cantidad bolsas(tipo);
	f) el tipo mas caro;
	
	*/
	
	var tipo;
	var cantidad;
	var precio;
	
	var cantidadCal;
	cantidaCal=0;
	var cantidadCemento;
	cantidadCemento=0;
	var cantidadArena;
	cantidadArena=0;
	
	var precioCal;
	precioCal=0;
	var precioCemento;
	precioCemento=0;
	var precioArena;
	precioArena=0;
	
	var precioCaroCal;
	precioCaroCal=0;
	var precioCaroArena;
	precioCaroArena=0;
	var precioCaroCemento;
	precioCaroCemento=0;
	
	var descuento;
	descuento=0;
	
	
	
	tipo=prompt("Ingresar un tipo de bolsa (cal, arena o cemento)");
	while(tipo!="cal" && tipo!="arena" && tipo!="cemento"){
		tipo=prompt("Error. Ingresar un tipo de bolsa (cal, arena o cemento)")
	}
	cantidad=prompt("Ingresar una cantidad de bolsas");
	while(isNaN(cantidad)==false || cantidad< 0 ){
		cantidad=prompt("Error. Ingresar una cantidad de bolsas")
	}
	precio=prompt("Ingresar un precio por bolsa (mayor que 0)")
	while(isNaN(precio)==false || precio< 0 ){
		cantidad=prompt("Error. Ingresar un precio por bolsa (mayor que 0)")
	}
	
	switch (tipo) {
		case cal:
			 if(cantidadCal==0 || precioCaroCal<precio){
			 	precioCaroCal=precio;
			 }
			 cantidadCal++;
			 console.log(cantidad*precio);
			 precioCal+=precio*cantidad;
		break;
		
		case arena:
		 if(cantidadCal==0 || precioCaroArena<precio){
			 	precioCaroArena=precio;
			 }
			 cantidadArena++;
			 console.log(cantidad*precio);
			 precioArena+=cantidad*precio;
		break;
		
		case cemento:
			if(cantidadCemento==0 || precioCaroCemento<precio){
			 	precioCaroCemento=precio;
			 }
			 cantidadCementon++;
			 precioCemento+=cantidad*precio;
		break;
	}
	
	if(cantidad>30){
		descuento = precio*25/100;
	}else {
			if(cantidad>10){
				descuento = precio*15/100;
			}
		}
	
	//pruebas codigo
	console.log("Cantidad de bolsas cal " + cantidadCal);
	console.log("Cantidad de bolsas arena " + cantidadArena);
	console.log("Cantidad de bolsas cemento " + cantidadCemento);
	
	console.log("Precio de bolsas cal "+ precioCal);
	console.log("Precio de bolsas arena "+ precioArena);
	console.log("Precio de bolsas cemento "+ precioCemento);	

	console.log("");	
	
	// llegue hasta aca 45min 
	
	
}

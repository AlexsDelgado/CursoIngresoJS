/*
Delgado Alexs 1-H

TP 4:

Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var cantLamparas;
	var marca;
	var precio;
	var precioFinal;
	var descuento;
	var ingresosBrutos;

	cantLamparas = txtIdCantidad.value;
	cantLamparas = parseInt(cantLamparas);
	marca = Marca.value;
	precio = 35*cantLamparas;
	
	if(cantLamparas > 5 ){
		//precioFinal = precio - precio*50/100;
		descuento = precio*50/100;
	}else {
		if(cantLamparas == 5){
			if (marca == "ArgentinaLuz") {
				//precioFinal = precio - precio*40/100;
				descuento = precio*40/100;
			}else {
					//precioFinal = precio - precio*30/100;
					descuento = precio*30/100;
			}
		}else {
				if (cantLamparas == 4) {
					if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
						descuento = precio*25/100;
					}else {
						descuento = precio*20/100;
						}
				}else {
					if(cantLamparas == 3 ){
						if(marca == "ArgentinaLuz"){
							descuento = precio*15/100;	
						}else {
								if(marca == "FelipeLamparas"){
									descuento = precio*10/100;
								}else {
										descuento = precio*5/100;
								}
						}
					}
				}
		}
	}
	if(cantLamparas<3){
		txtIdprecioDescuento.value=precio;
	
	}else {
		precioFinal = precio - descuento;
		ingresosBrutos = precioFinal*10/100;
		
		if(precioFinal>120){
			precioFinal= precioFinal+ingresosBrutos;
			txtIdprecioDescuento.value = precioFinal + " IIBB Que usted pago: "+ ingresosBrutos;		
		}else{
			txtIdprecioDescuento.value = precioFinal;
		}
		
	}	
}
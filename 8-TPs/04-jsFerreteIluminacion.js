/*4.	Para el departamento de iluminación:
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
	var cantidadLamparas;
	var marcaLamparas;
	var precio = 35;
	var descuento;
	var ingresosBrutos;
	var precioFinal;

	cantidadLamparas = txtIdCantidad.value;
	cantidadLamparas = parseInt(cantidadLamparas);
	marcaLamparas = Marca.value;
	precio = precio*cantidadLamparas;
	switch(cantidadLamparas){
		case 5:
			if(marcaLamparas == "ArgentinaLuz"){
				descuento = precio*40/100;
			}else descuento = precio*30/100;
		break;

		case 4:
			if(marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas"){
				descuento = precio*25/100;
			}else descuento = precio*20/100;
		break;

		case 3:
			switch(marcaLamparas){
				case "ArgentinaLuz":
					descuento = precio*15/100;
				break;
				case "FelipeLamparas":
					descuento = precio*10/100;
				break;
				default:
					descuento = precio*5/100;
				break;
			}
		break;

		default:
			if (cantidadLamparas>5) {
				descuento = precio*50/100;
			}else descuento = 0;
		break;
	}
precioFinal = precio - descuento;
if (precioFinal>119) {
	ingresosBrutos= precioFinal*10/100;
	precioFinal = precioFinal+ingresosBrutos;
	txtIdprecioDescuento.value = "Usted pago "+precioFinal+" siendo " + ingresosBrutos + " de IIBB."; 
}else	txtIdprecioDescuento.value = precioFinal; 

 	
}

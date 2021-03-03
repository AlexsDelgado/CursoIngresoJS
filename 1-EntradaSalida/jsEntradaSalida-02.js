/*

Delgado Alexs 1H

IdProducto (Entre 1 y 1000)
tipo (Drone - camara - Celular)
Origen (China - Tonga - Japon)
cantidad vendida por cada compra
peso en kg del paquete
Fecha de compra (alfanumerico)
precio unitario en dolares. 

Precio total: (el margen de ganancia para todos los productos es del 30%)



Se desea saber:
a) Total que recauda la empresa por productos vendidos procedentes de Tonga.
b) Porcentaje de productos vendidos de cada tipo.
c) Cantidad de productos de China
d) El pais que mas productos importa
e) Fecha, peso y tipo de la compra mas cara.
f) Sumando cantidad de drones y celulares, que porcentaje del total de productos vendidos representan?
g) IdProducto y Origen del ultimo Drone ingresado.


Se calcula para cada venta los siguientes impuestos (en caso de que corresponda):
    Para los productos procedentes de Japon cuyo peso supere los 3 kg se le agrega un impuesto del 5% sobre el 
    total de la compra.
    Para los productos procedentes de Tonga o China que superen los 2 kg, se le agrega un impuesto del 10% sobre el 
    total de la compra.
    Para las demas combinaciones no aplica impuesto.
    
*/

function mostrar()
{
	var idProducto;
	var tipo;
	var origen;
	var cantidad;
	var peso;
	var fechaCompra;
	var precio;
	var precioTotal;
	

	idProducto=prompt("Ingrese el ID del producto");
	idProducto=parseInt(idProducto);
	while(isNaN(idProducto)==true || edad < 1 || edad > 1000){
		idProducto=prompt("Ingrese el ID del producto");
		idProducto=parseInt(idProducto);
	}
	tipo=prompt("Ingrese el tipo del producto");
	while(tipo!="drone" && tipo!="camara" && tipo!="celular"){
		tipo=prompt("Ingrese el tipo del producto");
	}
	origen=prompt("Ingrese el origen del producto");
	while(tipo!="china" && tipo!="tonga" && tipo!="japon"){
		origen=prompt("Ingrese el origen del producto");
	}
	cantidad=prompt("Ingrese la cantidad del producto");
	peso=prompt("Ingrese el peso del producto");
	fecha=prompt("Ingrese el fecha del producto");
	while(isNaN)
	precio=prompt("Ingrese el precio del producto");
	precioTotal=prompt("Ingrese el precio Total");

	switch(){
		
	}



}



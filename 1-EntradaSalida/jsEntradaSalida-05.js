/*
Delgado Alexs 1-H

Ejercicio 5bis

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	

	var nombre;
	nombre = txtIdNombre.value;

	var edad;
	edad = txtIdEdad.value;
	
	var apellido;
	apellido = prompt("ingrese su apellido");

	alert("Usted se llama "+nombre+" "+apellido+" y tiene "+edad+" años");
}


/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//Se toma el dato por prompt 
	var nombreDelEmpleado;
	nombreDelEmpleado =	prompt("Ingrese el nombre: ");
	

	//Se muestra el dato
	txtIdNombre.value = nombreDelEmpleado; // puede ser  document.getElementById(txtIdNombre).value=nombreDelEmpleado
	console.log("El nombre del empleado es: "+nombreDelEmpleado); //consola
	alert("El nombre del empleado es: "+nombreDelEmpleado); //ventana emergente
}

/*
alert
console.log
document.write
id.value
document.getElementById
document.getElementsByTag
*/


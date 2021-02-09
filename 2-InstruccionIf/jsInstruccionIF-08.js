/*
Delgado Alexs 1-H
Ejercicio 8

*/

function mostrar()
{
	//tomo la edad 
	var edad;
	var estadoCiv;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	estadoCiv = estadoCivil.value;

	if (edad > 18 && estadoCiv == "Soltero" ) {
			alert("Es Soltero y no es menor");
	}

}//FIN DE LA FUNCIÓN
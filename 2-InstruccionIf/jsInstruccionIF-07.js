/*
Delgado Alexs 1-H
Ejercicio 7

*/

function mostrar()
{
	//tomo la edad 
	var edad;
	var estadoCiv;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	estadoCiv = estadoCivil.value;

	if (edad < 18 && estadoCiv != "Soltero" ) {
			alert("Es demasiado joven para no ser Soltero");
	}

}//FIN DE LA FUNCIÓN
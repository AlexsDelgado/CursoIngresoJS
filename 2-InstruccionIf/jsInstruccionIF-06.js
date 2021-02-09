/*
Delgado Alexs 1-H
ejercicio 6
*/

function mostrar()
{
	//tomo la edad  
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad<13) {

		alert("Usted es un niño");

	}else{
		if (edad<18 && edad>12) {
			alert("Usted es adolescente");
		}else {
			if (edad>17) {
				alert("Usted es mayor de edad");
			}
		} 
	} 
}//FIN DE LA FUNCIÓN	
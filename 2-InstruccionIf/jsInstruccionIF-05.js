function mostrar()
{
	 
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad>18 || edad<12) {

		alert("Usted no es adolescente");

	}
	

}
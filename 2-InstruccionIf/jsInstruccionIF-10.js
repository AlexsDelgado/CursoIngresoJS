/*
Delgado Alexs 1-H
ejercicio 10
*/

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaExamen;
	notaExamen = Math.floor(Math.random() * 10);

	if (notaExamen<4) {
			alert("Vamos la proxima se puede");
	}else{
		if (notaExamen>8) {
			alert("Excelente");
		}else{
			alert("Aprobo");
		}
	}
}//FIN DE LA FUNCIÓN
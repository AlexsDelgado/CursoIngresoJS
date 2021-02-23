/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");
	
	while(sexoIngresado !='f' && sexoIngresado!='m') {
		alert("error ingrese nuevamente");
		sexoIngresado = prompt("ingrese f ó m .");
		//sexoIngresado.toUpperCase();
		
	}
 txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN
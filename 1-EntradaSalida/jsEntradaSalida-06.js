/*
Delgado Alexs 1-H

Ejercicio 6

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//Se declaran las variables
	var num1;
	var num2;
	var resultado;

	//Se asignan las mismas
	num1=parseInt(txtIdNumeroUno.value);
	num2=parseInt(txtIdNumeroDos.value);

	//Se realiza la operacion
	resultado = num1+num2;


	alert(resultado);
}


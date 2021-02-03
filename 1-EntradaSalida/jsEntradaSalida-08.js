/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

	var numDivisor;
	var numDividendo;
	var resultado;

	numDividendo=parseInt(txtIdNumeroDividendo.value);
	numDivisor=parseInt(txtIdNumeroDivisor.value);

	resultado=numDividendo%numDivisor;

	alert("El resto es: "+resultado);
}

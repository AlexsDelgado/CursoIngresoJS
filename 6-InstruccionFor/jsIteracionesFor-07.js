/*
	Delgado Alexs 1-h
	EJERCICIO 7


*/

function mostrar()
{

	var i;
	var numero;
	var contadorDivisores;
	
	numero=prompt("Ingrese un numero");
	numero=parseInt(numero);
	
	for (i = 0; i < numero; i++) {
		//console.log(i);
		if(numero%i==0){
			console.log(numero + " es divisible por "+i);
			contadorDivisores++;
		}
	}
}
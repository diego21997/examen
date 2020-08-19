/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let edad=0;
	let peso=0;
	let edadTotal=0;
	let sexo;
	let cantidadF=0;
	let cantidadM=0;
	let banderaPeso=0;
	let banderaHombrePesado;

	for (let i = 1; i <= 5; i++) {
	    nombre = prompt("Ingresar nombre: ");
	    while (!(isNaN(nombre))) {
	        nombre = prompt("Error. Ingresar nombre: ");   
	    }
	
	    peso = parseFloat(prompt("Ingresar peso: "));
	    while (peso < 1){
	        peso = parseFloat(prompt("Error. Ingresar peso: ")); 
		}		
		
	    sexo = prompt("Ingresar tu sexo: Femenino/Masculino").toLowerCase();
	    while (!(sexo == "femenino" || sexo == "masculino")) {
	        sexo = prompt("Error. Ingresar tu sexo: F/M").toLowerCase();
	    }
	    switch (sexo) {
			case "femenino":
				cantidadF++;
				break;				
			default:
				cantidadM++;
				if(banderaPeso == 0 || banderaPeso < peso){
					banderaPeso=peso;
					banderaHombrePesado=nombre;
				}
				break;
		}
		
	    edad = parseInt(prompt("Ingresar tu edad"));
	    while(edad < 1 || edad > 100){
			edad = parseInt(prompt("Error. Ingresar tu edad"));
		}
		edadTotal+=edad;    
	}
	    if(cantidadF>0){
	        console.log("a)Cantidad mujeres " + cantidadF);
		}else if (cantidadM>0){
			console.log("++)Cantidad hombres " + cantidadM);
		}

		console.log("b)La edad promedio en total es: "+ (edadTotal/5));
		
		if(!(banderaPeso == 0)){
			console.log("c)El hombre mas pesado es: "+banderaHombrePesado );
		}
}










































/*{
	let nombre;
	let peso;
	let sexo;
	let edad;
	let respuesta1 = "s";
	let acumuedad = 0;
	let contadorMujeres = 0;
	let pesomax;
	let nombremax;
	let promedioEdad;
	let bandera = 0;


	for (contador = 0; contador < 3; contador++) {

		do {
			nombre = prompt("Ingrese un nombre");
			respuesta1 = prompt(" El nombre ingresado es " + nombre + " ? s/n");
		} while (!(respuesta1 == "s"));

		peso = prompt("Ingrese su peso");
		peso = parseInt(peso);
		while (peso < 0 || isNaN(peso) == true) {
			peso = prompt("Ingrese un peso Valido");
			peso = parseInt(peso);
		}

		edad = parseInt(prompt("Ingrese su edad"));
		edad = parseInt(edad);
		while (edad < 0 || isNaN(edad) == true) {
			edad = prompt("Ingrese una edad VALIDA");
			edad = parseInt(edad);
		}

		sexo = prompt("Ingrese su sexo f/m");
		while (!(sexo == "f" || sexo == "m")) {
			sexo = prompt("Ingrese un sexo VALIDO f/m");
		}

		switch (sexo) {
			case "f":
				contadorMujeres++;
				break;
			case "m":
				if (bandera == 0 || pesomax < peso) {
					pesomax = peso;
					nombremax = nombre;
					bandera = 1;
				}
				break;
		}
		acumuedad = acumuedad + edad;


	}
	promedioEdad = acumuedad / contador;

	//a)informar la cantidad de mujeres.

	document.write("La cantidad de mujeres es " + contadorMujeres + "<br>");


	//b)la edad promedio en total.
	document.write("La edad promedio es " + promedioEdad + "<br>");
	//)el hombre mas pesado.
	if (bandera == 1) {
		document.write("El hombre mas pesado es " + nombremax + "<br>");
	}
	else {
		document.write("No hay hombres ingresados");
	}
	//pedir datos por prompt y mostrar por document.write o console.log

}*/

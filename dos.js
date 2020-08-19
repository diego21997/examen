/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()

{

  let respuesta = "s";
  let respuesta2 = "s";
  let marca;
  let precio;
  let peso;
  let tipo;
  let acumupeso = 0;
  let preciomax = 0;
  let marcamax;
  let preciomin;
  let marcamin;
  let bandera = 1;
  let bandera2 = 0;

  do {
    do {
      marca = prompt("Ingrese marca");
      respuesta2 = prompt("La marca registrada es " + marca + "? si/no");

    } while (!(respuesta2 == "s"));

    precio = parseInt(prompt("Ingrese precio"));
    while (!(precio >= 1)) {
      precio = parseInt(prompt("Ingrese precio un precio VALIDO"));
    }

    peso = parseInt(prompt("Ingrese peso"));
    while (!(peso >= 1)) {
      peso = parseInt(prompt("Peso ingresado no es VALIDO"));
    }

    tipo = prompt("Ingrese el tipo: sólido o líquido");
    while (!(tipo == "sólido" || tipo == "solido" || tipo == "líquido" || tipo == "liquido")) {
      tipo = prompt("Ingrese el tipo VALIDO: sólido o líquido");
    }

    acumupeso = acumupeso + peso;

    switch (tipo) {
      case "líquido":
      case "liquido":
        if (bandera2 == 0 || preciomax < precio) {
          preciomax = precio;
          marcamax = marca;
          bandera2 = 1;
        }
        break;
      case "sólido":
      case "solido":
        if (bandera == 0 || preciomin > precio)
          preciomin = precio;
        marcamin = marca;
        bandera == 1;

        break;
    }


    respuesta = prompt("Desea ingresar otro dato s/n");
  } while (respuesta == "s");

  // a)informar el peso total de la compra.
  console.log("El peso todal de la compra es " + acumupeso);
  //b)la marca del más caro de los líquidos
  if (bandera2 == 1) {
    console.log("La marca del liquido mas caro es " + marcamax);
  }
  //c)la marca del más barato de los sólidos
  if (bandera == 1) {
    console.log("La marca de solido mas barata es " + marcamin);
  }
}
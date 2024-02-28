// Arreglo 1: Números pares del 1 al 10
let arreglo1 = Array.from({ length: 5 }, (_, index) => (index + 1) * 2);
console.log("Arreglo 1:", arreglo1);

// Método: Map para duplicar cada elemento
let duplicado = arreglo1.map((elemento) => elemento * 2);
console.log("Duplicado:", duplicado);

// Arreglo 2: Números impares del 1 al 9
let arreglo2 = Array.from({ length: 5 }, (_, index) => (index * 2) + 1);
console.log("Arreglo 2:", arreglo2);

// Método: Filter para obtener solo los números mayores a 5
let mayoresA5 = arreglo2.filter((elemento) => elemento > 5);
console.log("Mayores a 5:", mayoresA5);

// Arreglo 3: Nombres de colores
let colores = ["rojo", "azul", "verde", "amarillo", "morado"];
console.log("Arreglo 3:", colores);

// Método: Find para obtener el primer color con más de 4 letras
let colorMasDe4Letras = colores.find((color) => color.length > 4);
console.log("Color con más de 4 letras:", colorMasDe4Letras);

// Arreglo 4: Números aleatorios entre 1 y 100
let numerosAleatorios = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1);
console.log("Arreglo 4:", numerosAleatorios);

// Método: Reduce para sumar todos los números
let sumaNumeros = numerosAleatorios.reduce((acumulador, numero) => acumulador + numero, 0);
console.log("Suma de números aleatorios:", sumaNumeros);

// Arreglo 5: Nombres de frutas
let frutas = ["manzana", "plátano", "fresa", "uva", "naranja"];
console.log("Arreglo 5:", frutas);

// Método: forEach para imprimir cada fruta con su longitud
frutas.forEach((fruta) => {
  console.log(`${fruta} - Longitud: ${fruta.length}`);
});

// Arreglo 6: Números del 1 al 5
let numerosDel1al5 = [1, 2, 3, 4, 5];
console.log("Arreglo 6:", numerosDel1al5);

// Método: Some para verificar si algún número es mayor a 3
let algunMayorA3 = numerosDel1al5.some((numero) => numero > 3);
console.log("¿Alguno mayor a 3?", algunMayorA3);

// Arreglo 7: Números del 5 al 1
let numerosDel5al1 = [5, 4, 3, 2, 1];
console.log("Arreglo 7:", numerosDel5al1);

// Método: Sort para ordenar de manera ascendente
let numerosOrdenadosAsc = numerosDel5al1.sort((a, b) => a - b);
console.log("Orden ascendente:", numerosOrdenadosAsc);

// Arreglo 8: Nombres de animales
let animales = ["león", "tigre", "oso", "águila", "serpiente"];
console.log("Arreglo 8:", animales);

// Método: Every para verificar si todos los animales tienen más de 3 letras
let todosMasDe3Letras = animales.every((animal) => animal.length > 3);
console.log("¿Todos con más de 3 letras?", todosMasDe3Letras);

// Arreglo 9: Números negativos del -5 al -1
let numerosNegativos = Array.from({ length: 5 }, (_, index) => -index - 1);
console.log("Arreglo 9:", numerosNegativos);

// Método: Map para obtener el valor absoluto de cada número
let valoresAbsolutos = numerosNegativos.map((numero) => Math.abs(numero));
console.log("Valores absolutos:", valoresAbsolutos);

// Arreglo 10: Nombres de ciudades
let ciudades = ["Nueva York", "Tokio", "Londres", "París", "Sídney"];
console.log("Arreglo 10:", ciudades);

// Método: Filter para obtener ciudades con más de 6 letras
let ciudadesMasDe6Letras = ciudades.filter((ciudad) => ciudad.length > 6);
console.log("Ciudades con más de 6 letras:", ciudadesMasDe6Letras);




//Arrow function sin parámetros:
const sinParametros = () => {
    console.log("Esta arrow function no recibe parámetros");
  };
  
  sinParametros();

  //Arrow function con un parámetro:
  const unParametro = (valor) => {
    console.log(`El valor del parámetro es: ${valor}`);
  };
  
  unParametro("Hola");

  //Arrow function con más de tres parámetros y el uso de métodos propios de JavaScript:
  let sumaMultiplesParametros = (...parametros) => {
    const suma = parametros.reduce((acumulador, valor) => acumulador + valor, 0);
    console.log(`La suma de los parámetros es: ${suma}`);
  };
  
  sumaMultiplesParametros(2, 4, 6, 8, 10);
  
    
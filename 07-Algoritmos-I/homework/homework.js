'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
let factores = [1];
let divisor = 2;
while (num>1){
  if (num % divisor === 0){
    factores.push(divisor);
    num /= divisor;
  }
  else{
    divisor++
  }
}
return factores;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
let flag = true;
while (flag){
  flag = false;
  for (let i = 0; i < array.length; i++){
    if (array[i] > array[1 + i]){
      let aux = array[i];
      array [i] = array [1 + i];
      array [i + 1] = aux;
      flag = true;
    }
  }
}
return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1 ; i < array.length; i++){
    let indice = i - 1;
    let auxiliar = array[i];
    while (indice >= 0 && array[indice] > auxiliar){
      array [indice + 1] = array[indice];
      indice--
    }
    array[indice + 1]= auxiliar;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++){
    let minimo = i;
      for (let j = i + 1; j < array.length; j++){
        if (array[j] < array[minimo]){
          minimo = j;
        }
      }
    let auxiliar = array[i];
    array [i] = array[minimo];
    array[minimo] = auxiliar;
  }
  return array;
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};

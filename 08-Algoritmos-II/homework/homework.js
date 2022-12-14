'use strict'

// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
if (array.length <= 1) return array;
var piv = array[Math.floor(Math.random() * array.length)];
var izquierda = [];
var igual = [];
var derecha = [];
for (let  i = 0; i < array.length; i++){
  if (array[i]< piv){
    izquierda.push(array[i]);
  }else if(array[i] === piv){
    igual.push(array[i]);
  }else{
    derecha.push(array[i]);
  }
}
return [].concat(quickSort(izquierda),igual,quickSort(derecha));
}


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //! SOLUCION 1 //
  // if (array<=1) return array;
  // var pivote = array[0];
  // var igual = [];
  // var izq = [];
  // var der = [];
  // for (let i = 0; i < array.length; i++){
  //   if (array[i] < pivote) izq.push(array[i]);
  //   if (array[i] === pivote) igual.push(array[i]);
  //   if (array[i] > pivote) der.push(array[i]);
  // }
  // return mergeSort(izq).concat(igual).concat(mergeSort(der));
  //! //
  if(array.length <= 1)return array;
  let mediumArray = Math.floor(array.length/2);
  let left = array.slice(0, mediumArray);
  let right = array.slice(mediumArray);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left,right){
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;
  while (indexLeft < left.length && indexRight < right.length){
    if(left[indexLeft] < right[indexRight]){
      result.push(left[indexLeft])
      indexLeft++
    }else{
      result.push(right[indexRight])
      indexRight++
    }
  }
return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};

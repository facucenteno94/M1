"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}


BinarySearchTree.prototype.size = function (){
  // ? Opcion 2 ---
  // if (!this.left && !this.right) return 1;
  // ? -- Opcion 2.
  let longitud = 1;
  if (this.left) longitud += this.left.size();
  if (this.right) longitud += this.right.size();
  return longitud;
}

BinarySearchTree.prototype.insert = function (value){
  // ! Mayores de la derecha //
  if (value >= this.value){
  if (this.right === null) this.right = new BinarySearchTree(value);
  else this.right.insert(value);   
}
  // ! Menores a la izquierda //
  if (value < this.value){
    if (this.left === null) this.left = new BinarySearchTree(value);
    else this.left.insert(value);
  }
}

BinarySearchTree.prototype.contains = function (value){
  if (this.value === value) return true;
  //! Mayores de la derecha//
  if (value > this.value){
    if(this.right === null) return false;
    return this.right.contains(value);
  }
  //! Menores de la izquierda//
  if(value < this.value){
    if(this.left === null) return false;
    return this.left.contains(value);
  }
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, order){
  //! POST ORDER -- IZQUIERDA -> DERECHA -> ROOT //
  if (order === 'post-order'){
    if (this.left !== null) this.left.depthFirstForEach(cb,order);
    if (this.right !== null) this.right.depthFirstForEach(cb,order);
    cb(this.value);
  }
  //! PRE ORDER -- ROOT -> IZQUIERDA -> DERECHA //
  else if(order === 'pre-order'){
    cb(this.value);
    if (this.left !== null) this.left.depthFirstForEach(cb,order);
    if (this.right !== null) this.right.depthFirstForEach(cb,order);
  }
  //! IN ORDER - SE EJECUTA POR DEFAULT -- IZQUIERDA -> ROOT -> DERECHA //
  else {
    if (this.left !== null) this.left.depthFirstForEach(cb,order);
    cb(this.value);
    if (this.right !== null) this.right.depthFirstForEach(cb,order);
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []){
  // ! Recorro la izquierda //
  if (this.left !== null){
    array.push(this.left);
  }
  // ! Recorro la derecha //
  if (this.right !== null){
    array.push(this.right);
  }
  cb(this.value);
// ! Recorro el array //
  if(array.length > 0){
    array.shift().breadthFirstForEach(cb, array);
  }
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};

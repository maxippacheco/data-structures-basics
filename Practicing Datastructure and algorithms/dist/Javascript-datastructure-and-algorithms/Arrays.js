"use strict";
var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//Print all the elements of the array
for (var i_1 = 0; i_1 < daysOfTheWeek.length; i_1++) {
    console.log(daysOfTheWeek[i_1]);
}
var romans = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.push(10);
//otra forma
romans[romans.length] = 11;
//INSERTANDO ELEMENTO A LA ULTIMA POSICION DE UN ARRAY
//OTRA OPCION EN VEZ DEL FOR ES EL UNSHIFT
//CON FOR
// for (let index = numbers.length; index<= 0; index--) {
//     numbers[index] = numbers.length - 1;
//     //numbers.length - 1 = ULTIMA POSICION
// }
// numbers[0] = -1;
romans.unshift(-3, -2, -1, 0);
//REMOVIENDO ELEMENTO A LA ULTIMA POSICION DE UN ARRAY
//Sobreescribimos el ultimo valor como undefined
// for (var i=0; i<numbers.length; i++){
//  numbers[i] = numbers[i+1];
// }
//UNSHIFT ELIMINA Y NO DEJA UNDEFINED
// numbers.shift()
//Añadir o eliminar un elemento en una posicion específica
/* ELIMINAR */
//Primer argumento => indice del array desde donde queremos eliminar. 2. Cantidad de elementos a eliminar
romans.splice(0, 3);
/* AÑADIR */
//Primer argumento indicamos el indice desde donde queremos añadir. Segundo un 0 ya que no eliminamos nada. Y despues añadimos los elementos seguidos de una coma
romans.splice(0, 0, 12, 13, 14);
console.log(romans);

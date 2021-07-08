"use strict";
//Also called Hash set or Map
var Sets = /** @class */ (function () {
    function Sets() {
        this.items = {};
    }
    Sets.prototype.has = function (value) {
        return this.items.hasOwnProperty(value); //True or False
    };
    Sets.prototype.add = function (value) {
        if (!this.has(value)) {
            //we set the value and also set a key as the value
            this.items[value] = value;
            return true;
        }
        return false;
    };
    Sets.prototype.remove = function (value) {
        if (this.has(value)) {
            delete this.items[value];
            return true;
        }
        return false;
    };
    Sets.prototype.clear = function () {
        this.items = {};
    };
    Sets.prototype.size = function () {
        return Object.keys(this.items).length;
    };
    Sets.prototype.values = function () {
        var values = [];
        for (var i_1 = 0, keys = Object.keys(this.items); i_1 < keys.length; i_1++) {
            values.push(this.items[keys[i_1]]);
        }
        return values;
    };
    //Basicamente hace la union entre un set A y otro B
    Sets.prototype.union = function (otherSet) {
        var unionSet = new Sets();
        var values = this.values();
        for (var i_2 = 0; i_2 < values.length; i_2++) {
            unionSet.add(values[i_2]);
        }
        values = otherSet.values();
        for (var i_3 = 0; i_3 < values.length; i_3++) {
            unionSet.add(values[i_3]);
        }
        return unionSet;
        //Basicamente agarramos el set A y iteramos y añadimos al union set y lo mismo con el set B
        // return otherSet;
    };
    //Muestra los valores que coincidan entre el set A y B
    Sets.prototype.intersection = function (otherSet) {
        var intersectionSet = new Sets();
        var values = this.values();
        for (var i_4 = 0; i_4 < values.length; i_4++) {
            if (otherSet.has(values[i_4])) {
                intersectionSet.add(values[i_4]);
            }
        }
        return intersectionSet;
    };
    //Muestra los valores del setA que no estan en el setB
    Sets.prototype.difference = function (otherSet) {
        var differenceSet = new Sets();
        var values = this.values();
        for (var i_5 = 0; i_5 < values.length; i_5++) {
            if (!otherSet.has(values[i_5])) {
                differenceSet.add(values[i_5]);
            }
        }
        return differenceSet;
    };
    //Muestra true si todos los valores del set A estan en el set B ( es como si el set A estuviera dentro del setB )
    Sets.prototype.subset = function (otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        }
        else {
            var values = this.values();
            for (var i_6 = 0; i_6 < values.length; i_6++) {
                if (!otherSet.has(values[i_6])) {
                    return false;
                }
            }
        }
        return true;
    };
    return Sets;
}());
var set = new Sets();
set.add(2);
set.add(3);
// set.remove(3)
// set.clear()
// console.log(set.values());
// let setA = new Sets();
// setA.add(1);
// setA.add(2);
// setA.add(3);
// let setB = new Sets();
// setB.add(3);
// setB.add(4);
// setB.add(5);
// setB.add(6);
// // let unionAB = setA.union(setB);
// // console.log(unionAB.values());
// let intersection = setA.intersection(setB);
// console.log(intersection);
var setA = new Sets();
setA.add(1);
setA.add(2);
setA.add(3);
setA.add(4);
var setB = new Sets();
setB.add(2);
setB.add(3);
var difference = setA.difference(setB);
var subset = setB.subset(setA);
console.log(subset);
//ECMASCRIPT 6 SETS
var setECMA6 = new Set();
//union
// let unionAb = new Set(); //{1}
// for (let x of setA) unionAb.add(x); //{2}
// for (let x of setB) unionAb.add(x); //{3}
//Intersection
// let intersection = function(setA, setB){
//  let intersectionSet = new Set();
//  for (let x of setA){
//  if (setB.has(x)){ //{1}
//  intersectionSet.add(x);
//  }
//  }
//  return intersectionSet;
// };
// let intersectionAB = intersection(setA, setB);
//Difference
// let difference = function(setA, setB){
//  let differenceSet = new Set();
//  for (let x of setA){
//  if (!setB.has(x)){ //{1}
//  differenceSet.add(x);
//  }
//  }
//  return differenceSet;
// };
// let differenceAB = difference(setA, setB);

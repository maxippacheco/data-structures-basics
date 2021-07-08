
//Also called Hash set or Map
class Sets{

	private items:any;

	constructor(){
		this.items = {};
	}

	has(value:any){
		return this.items.hasOwnProperty(value); //True or False
	}

	add(value:any){

		if (!this.has(value)) {
			//we set the value and also set a key as the value
			this.items[value] = value;
			return true;
		}

		return false;
	}

	remove(value:any){
		if (this.has(value)) {
			delete this.items[value];
			return true;
		}

		return false;
	}

	clear(){
		this.items = {};
	}

	size(){
		return Object.keys(this.items).length;
	}

	values(){
		let values = [];
		
		for (let i = 0, keys = Object.keys(this.items);  i < keys.length; i++) {
			values.push(this.items[keys[i]])
			
		}
		
		return values;
	}

	//Basicamente hace la union entre un set A y otro B
	union(otherSet: Sets){

		let unionSet = new Sets();		

		let values = this.values();

		for (let i=0; i<values.length; i++){
 			unionSet.add(values[i]);
 		}

	
		values = otherSet.values();

		for (let i=0; i<values.length; i++){
			unionSet.add(values[i]);
		}
		return unionSet;

		//Basicamente agarramos el set A y iteramos y añadimos al union set y lo mismo con el set B
 		
		// return otherSet;

	}

	//Muestra los valores que coincidan entre el set A y B
	intersection(otherSet: Sets){

		let intersectionSet = new Sets();

		let values = this.values();

		for (let i = 0; i < values.length; i++) {
			
			if (otherSet.has(values[i])) {
				intersectionSet.add(values[i])
			}

		}

		return intersectionSet;
	}

	//Muestra los valores del setA que no estan en el setB
	difference(otherSet: Sets) {

		let differenceSet = new Sets();
		let values = this.values();

		for (let i = 0; i < values.length; i++) {
			
			if (!otherSet.has(values[i])) {
				differenceSet.add(values[i])	
			}
			
		}

		return differenceSet;
	}

	//Muestra true si todos los valores del set A estan en el set B ( es como si el set A estuviera dentro del setB )
	subset(otherSet: Sets) {

		if (this.size() > otherSet.size()) {
			return false;
		}else{
			let values = this.values();

			for (let i = 0; i < values.length; i++) {
				
				if (!otherSet.has( values[i] )){
					return false;
				}
				
			}
		}

		return true;

	}



}

const set = new Sets();

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


let setA = new Sets();
setA.add(1);
setA.add(2);
setA.add(3);
setA.add(4);

let setB = new Sets();
setB.add(2);
setB.add(3);

let difference = setA.difference(setB);
let subset = setB.subset(setA);

console.log(subset);



//ECMASCRIPT 6 SETS

let setECMA6 = new Set();

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
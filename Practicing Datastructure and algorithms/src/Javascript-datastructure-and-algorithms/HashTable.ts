import { LinkedList } from "./LinkedList";


class HashTable{

	public table:any[];

	constructor(){
		this.table = [];
	}

	loseloseHashCode(key: any){
		let hash = 0;

		/*
			Given a key parameter, we will generate a number based on the sum of each char ASCII
			value that composes key		
		*/

		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i)
			
		}

		return hash % 37;
	}

	put(key: any, value: any){

		let position = this.loseloseHashCode(key);
		console.log(position + ' - ' + key);

		this.table[position] = value;		

	}

	get(key: any){
		return this.table[this.loseloseHashCode(key)];
	}

	remove(key: any) {
		this.table[this.loseloseHashCode(key)] = undefined;
	}

	print(){

		for (let i = 0; i < this.table.length; i++) {
			if (this.table[i] !== undefined) {
				console.log(`${i}: ${this.table[i]}`);
			}
		}

	}

}

//Using separate chaining: that means we gonna create a linked list to handle hash table colisions
class ValuePair extends HashTable{


	private value:any;
	private key:any;

	constructor(key: any, value: any){
		
		//pasamos las props de hashTable
		super();
		
		this.value = value;
		this.key = key;
		
	}	

	toString(){
		return '[' + this.key + ' - ' + this.value + ']';
	}

	put(value: any, key: any){
		let position = this.loseloseHashCode(key);

		if (this.table[position] == undefined) {
			this.table[position] = new LinkedList();
		}

		this.table[position].append(new ValuePair(key, value));
	}

	get(key: any){

		var position = this.loseloseHashCode(key);

		if (this.table[position] !== undefined) {
			 //iterate linked list to find key/value
			var current = this.table[position].getHead();

			while (current.next) {
				if (current.element.key === key) {
					return current.element.value
				}

				current = current.next;

				//check in case first or last element
				if (current.element.key === key){
					return current.element.value;
				}

			}

		}

		return undefined;
	}

	remove(key: any){

		var position = this.loseloseHashCode(key);

		if (this.table[position] !== undefined) {
			var current = this.table[position].getHead();
			
			while(current.next){
				if (current.element.key === key){ //{11}
					this.table[position].remove(current.element); //{12}
			
					if (this.table[position].isEmpty()){ //{13}
						this.table[position] = undefined; //{14}
					}
					return true; //{15}
				}
				current = current.next;
			}
			//check in case first or last element
			if (current.element.key === key){ //{16}
				this.table[position].remove(current.element);
				
				if (this.table[position].isEmpty()){
					this.table[position] = undefined;
				}
				return true;
			
			}
		}
 		
		return false; //{17}
		

	}

}

const hashChaining = new ValuePair('Gandolf', 'gandolf.email');

hashChaining.put('Tyron', 'tyron.email');

// hashChaining.get('Tyron')


var hash = new HashTable();

// hash.put('Gandalf', 'gandalf@email.com');
// hash.put('John', 'johnsnow@email.com');
// hash.put('Tyrion', 'tyrion@email.com');

// hash.remove('Tyrion')
// console.log(hash.get('Tyrion')) //returns the value => tyrion@email.com
// hash.put('Tyrion', 'tyrion@email.com');
// hash.put('Aaron', 'aaron@email.com');
// hash.put('Donnie', 'donnie@email.com');
// hash.put('Ana', 'ana@email.com');
// hash.put('Jonathan', 'jonathan@email.com');
// hash.put('Jamie', 'jamie@email.com');
// hash.put('Sue', 'sue@email.com');
// hash.put('Mindy', 'mindy@email.com');
// hash.put('Paul', 'paul@email.com');
// hash.put('Nathan', 'nathan@email.com');

// // console.log(hash);
// hash.print();


//Is also known as a Map()
//It is use to find a particular value
//We store a [key, value] in sets we store a [key, key]


class Dictionary{

	private items:any;

	constructor(){
		this.items = {};
	}

	has(key: any){
		return key in this.items; //True or false
	}

	set(key: any, value: any){
		//We simply set the value to the key property of the items object.
		this.items[key] = value;
	}

	delete(key: any){

		if (this.has(key)) {
			delete this.items[key]

			return true;
		}

		return false;

	}

	get(key: any){
		//undefined es un valor que denota que no hay valor porque no se ha definido todavía,
		//null se usa para indicar que no hay valor porque así lo hemos querido indicar expresamente.
		return (this.has(key)) ? this.items[key] : undefined;
	}

	values(){

		const values = [];

		//For in recorre las propiedades de un objeto
		for (const k in this.items) {
			//). Just to make sure the value exists, we will use the has function to verify that key really exists
			if (this.has(k)) {

				values.push(this.items[k]);
			}
		}

		return values;
	}

	keys(){
		return Object.keys(this.items);
	}

	getItems(){
		return this.items;
	}

	size(){
		return Object.keys(this.items).length;
	}

	clear(){
		this.items = {};
	}
}


const dictionary = new Dictionary();



dictionary.set('Gandolf', 'gandolf@gmail.com');
dictionary.set('Memphis', 'memphisdepay@gmail.com');
dictionary.set('TheRock', 'therockjohnson@gmail.com');
dictionary.set('John', 'johncharles@gmail.com');

// console.log(dictionary.has('Gandolf'));

// console.log(dictionary.get('John'));
// console.log(dictionary.values());
// console.log(dictionary.size());
// console.log(dictionary.keys());

// dictionary.delete('Gandolf');

// console.log(dictionary);


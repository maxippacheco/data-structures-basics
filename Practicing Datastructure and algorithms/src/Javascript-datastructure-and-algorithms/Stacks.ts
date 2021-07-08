
//En este caso voy a hacer un stack de strings pero si queres mandar cualquiera cambias items por any y elements por any

//The last element is in the top always

//WeakMap can store a key/value pair, where the key is an object and the value can be any data type

//Last In First Out(LIFO)
class Stack{

	private items:string[];

	constructor(){
		//First, we need a data structure that will store the elements of the stack. We can use an array to do this
		this.items = [];
	}

	/*
		The first method that we will implement is the push method. This method is responsible for
		adding new elements to the stack with one very important detail: we can only add new
		items to the top of the stack, meaning at the end of the stack
	*/

	Push(element: string){
		this.items.push(element);
	}

	Pop(){
		//the last item that we added is the one that is removed
		this.items.pop();
	}

	Peek(){
		//If we would like to know what the last item added to our stack was, we can use the peek method.
		return this.items[this.items.length - 1];
	}

	//Verifying if the stack is empty

	isEmpty(){
		return this.items.length === 0; //If isEmpty return true, else return false
	}

	Size(){
		return this.items.length;
	}

	Clear(){
		this.items = [];
	}

	PrintElementsAsStings(){
		console.log(this.items.join(', '));
		
	}


}

const stack = new Stack();
stack.Push('John Cena')
stack.Push('Mark Zuckerberg');
stack.Push('Jeff Bezos');
// stack.Pop();

// stack.Clear()
// console.log(stack.isEmpty());
stack.PrintElementsAsStings();


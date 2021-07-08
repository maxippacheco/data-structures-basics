
/*

We have some real-world examples that can be exemplified as a linked list. The first
example is a conga line. Each person is an element, and the hands would be the pointer that
links to the next person in the conga line. You can add people to the line—you just need to
find the spot where you want to add this person, decouple the connection, then insert the
new person and make the connection again.

*/



class LinkedNode{
	
	element: any;
	next: any;

	constructor( element: any ){
		this.element = element;
	}


};


export class LinkedList{


	length:number = 0;

	//Another important note is that we need to store a reference for the first node as well. To do this, we can store this reference inside a variable that we will call head
	head: null | LinkedNode = null;

	constructor(){
		this.length = 0;
		this.head = null;
	}


	//Adding elements to the end of the linkedList
	append(element: any){
		let node = new LinkedNode(element), current;

		if (this.head === null) { // //first node on list 
		
			/*
				If the head element is null, it means we are adding the first
				element to the list. So, all we have to do is point the head element to the node element. The
				next node element will be null automatically.
			*/
		
			this.head = node
		
		}else{
			/*
				To add an element to the end of the list, we first need to find the last element. Remember
				that we only have a reference to the first element, so we need to iterate through
				the list until we find the last item. To do so, we need a variable that points to the current
				item of the list.
			
			*/

			current = node;


			////loop the list until find last item
			while (current?.next) { //until current.next was null
				current = current.next;
			}

			//get last item and assign next to node to make the link
			current.next = node;

		}


		//And of course, we cannot forget to increment the size of the list so that we can control it and easily get the list size
		this.length++;

		//The last node from the list always has null as the next element
	}

	// removing an element from a specified position

	removeAt(position: number){

		//check for out-of-bounds values si es mayor que length no puede ser porque daria error
		if (position > -1 && position < this.length){ // {1}
		
			let current = this.head, // {2}
		
			previous, 
		
			index = 0; 
		
			//removing first item

			if (position === 0) {
				//El ? en el current es para que no muestre undefined
				//We will make a reference to the first element of the list using the current variable
				//. If we assign head to current.next, we will be removing the first element
				this.head = current?.next;

			}else{

				while (index++ < position) { //we're gonna iterate the linked list until we have the desire position
					
					//a reference to the element that comes before the current element
					previous = current;

					//: the current variable will always make a reference to the current element of the list that we are looping through
					//Apuntar a null ya que es el ultimo elemento
					current = current?.next;
				}


				let previousEl = previous?.next;

				//Saltearse uno y asi lo elimina
				previousEl = current?.next;


			}

			this.length--;

			return current?.element;

		} else {
			//That means that the element doesn't exist in the list
			return null;
		}
	
	}

	//Insert element at any position
	insert( position: number, element: any ){

	 	if (position >= 0 && position <= length){

			let node = new LinkedNode(element),
			currentElement = this.head,
			previousElement,
			index = 0;
			
			if (position === 0) {
				//Corro el head de lugar
				node.next = currentElement,
				
				//Asigno al elemento como head
				this.head = node;
			}else{

				while (index++ < position) {
					
					previousElement = currentElement;
					currentElement = currentElement?.next;
				}

				// node.next = currentElement; //{4}
				// previousElement.next = node; //{5}

				node.next = currentElement; //{4}
				
				let previousEl2 = previousElement?.next;
				
				previousEl2 = node; //{5}
			}

		}

	}

	toString(){

		let current = this.head, string = '';

		while (current) {
		 	string +=current.element +(current.next ? 'n' : '');//{4}
			current = current.next;
		}

		return string;
		
	
	}

	getHead(){
		if (this.head) {
			return this.head;
		}else{
			return null;
		}
	}


}


const linkedList = new LinkedList();

linkedList.append(10);
linkedList.append(8);
linkedList.append(10);
linkedList.append('Carlos');


console.log( linkedList.toString() );


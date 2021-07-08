
class NodeLList{

	data:any;
	next:null;

	constructor(data:any, next = null){
		this.data = data;
		this.next = next
	}

}

class LinkedList2{

	head:any;
	size:number;

	constructor(){
		this.head = null;
		this.size = 0;
	}

	//Insert firts node
	insertFirst(data: any){
		this.head = new NodeLList(data, this.head);
		this.size++;
	}

	//Insert last node
	insertLast(data: any){
		let node = new NodeLList(data);
		let current;

		//If empty, make head
		if ( !this.head ) {
			this.head = node
		}else{

			current = this.head;

			//Del head pasamos al segundo y asi
			while (current.next) {
				current = current.next;
			}

			current.next = node;

		}

		//increments by one
		this.size++;
	}

	//Insert at index
	insertAt( data:any, index:number ){

		//If index is outta range
		if (index > 0 && index > this.size) {
			return null;
		}

		//If index is 0
		if (index === 0) {
			this.insertFirst(data);
			return;
		}

		const node = new NodeLList(data);
		let current;
		let previous;

		//Set current to first
		current = this.head;
		let count = 0;
		
		//Find the index
		while ( count < index ) {
			previous = current; //Node before the index
			count++;
			current = current.next; //Node after the index
		}

		//The next value to the node gonna be current
		node.next = current;
		
		//We set the node as the next of the previous
		previous.next = node;

		this.size++;
	}

	//Get at index
	getAt(index: any) {

		let current = this.head;
		let count:number = 0;

		while (current) {
			if (count == index) {
				console.log(current.data);
			}
				// }else{
			// 	console.log(`The index ${index} doesnt exists`);
			// 	return
			// }

			count++;
			current = current.next;

		}

		return null;
	}


	//Remove at index
	removeAt(index:number){
		if (index > 0 && index > this.size) {
			return;
		}

		let current = this.head;
		let previous;
		let count = 0;

		if (index === 0) {
			this.head = current.next;
		}else{
			while (count < index) {
				count++;
				previous = current;
				current = current.next;
			}

			previous.next = current.next;
		}

		this.size--;
	}

	//clear list
	clearList(){
		this.head = null;
		this.size = 0;
	}

	//Print last data
	printListData() {

		//currentNode
		let current = this.head;

		while (current) {
			console.log(current.data);
			
			//We pass to the other element
			current = current.next;
		}

	}

	// toString(){

	// 	let current = this.head;
	// 	let string = '';

	// 	while (current) {
	// 		// console.log(current.data.toString());
	// 		console.log(string +=current.data +(current.next ? ' ' : ''));
			
	// 		current = current.next
	// 	}

	// 	// return string;
	// }

}

const linkedList2 = new LinkedList2();

linkedList2.insertFirst(200);
// linkedList2.insertFirst(100);
linkedList2.insertLast(300);
linkedList2.insertAt(250, 1);

// linkedList2.getAt(0);
// linkedList2.toString()
// linkedList2.removeAt(1)

// linkedList2.clearList()

// linkedList2.printListData();




class DoublyNode{

	public data:any;
	public next:null;
	public prev:null;

	constructor( data:any, next = null, prev = null ){
		this.data = data;
		this.next = next;
		this.prev = prev;
	}

}


class DoublyLinkedList{

	private head:any;
	private size:number;

	//the reference of the last item of the list.
	private tail:any;

	constructor(){
		this.head = null;
		this.size = 0;
		this.tail = null;
	}

	insert(position: number, element: any){

		if (position >= 0 && position <= this.size) {
			
			let node = new DoublyNode(element);
			let current = this.head;
			let previous;
			let index = 0;

			if (position === 0) {

				if (!this.head) {			
					this.head = node;
					this.tail = node;
				} else{
					node.next = current;
					current.prev = node;
					this.head = node;
				}

			} else if (position === this.size) {
				
				current = this.tail;

				current.next = node;
				
				node.prev = current;
				
				this.tail = node;

			} else {

				while ( index++ < position ) {
					
					previous = current;

					current = current.next;

				}

				node.next = current;
				previous.next = node;

				current.prev = node;
				node.prev = previous;
			}

			this.size++;

			return true;

		}else{
			return false;
		}

	}

	removeAt(position: number){

		if (position > -1 && position < this.size) {
			
			let current = this.head;
			let previous;
			let index = 0;

			//removing first element
			if (position === 0) {
				
				this.head = current.next;

				//if there is only one item, update tail
				if (this.size === 1) {
					this.tail = null;
				}else{
					this.head.prev = null;
				}

			} else if ( position === length - 1 ) { //the last item
				
				current = this.tail;
				this.tail = current.prev;
				this.tail.next = null

			} else{

				while ( index++ < position ) {
					
					previous = current;
					current = current.next;
				}

				//link previous with current's next - skip it
				previous.next = current.next;
				current.next.prev = previous;

			}

			this.size--;
			return current.element;
		}else{
			return null;
		}

	}


	printListData() {

		//currentNode
		let current = this.head;

		while (current) {
			console.log(current.data);
			
			//We pass to the other element
			current = current.next;
		}

	}



}


const doubly_linkedList = new DoublyLinkedList();

doubly_linkedList.insert(0, 10);
doubly_linkedList.insert(0, 11);
doubly_linkedList.removeAt(0);

doubly_linkedList.printListData();
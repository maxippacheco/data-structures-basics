
//First In First Out(FIFO)
class Queue{

	private items: string[];

	constructor(){
		this.items = [];
	}

	enqueue(element: string){
		this.items.push(element);
	}

	dequeue(){
		//Delete the index 0 of our array
		return this.items.shift();
	}

	/* 
		If we want to know
		what the front item of our queue is, we can use the front method. This method will return
		the item from the front of the queue (index 0 of the array): 
	*/

	front(){
		return this.items[0];
	}

	isEmpty(){
		return this.items.length === 0; // true or false
	}

	size(){
		return this.items.length;
	}

	print(){
		return console.log(this.items.toString());
	}

}

const queue = new Queue();

// console.log(queue.isEmpty());


// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);

// console.log(queue.size());
//Delete 1
// queue.dequeue();
// console.log(queue.front());


// queue.print();
// console.log(queue.isEmpty());


//A QUEUE USING ECMASCRIPT 6

//I PREFER THE FIRST ONE

// let Queue2 = (function () {
//  const items = new WeakMap();
//  class Queue2 {
//  constructor () {
//  items.set(this, []);
//  }
//  enqueue(element: number) {
//  let q = items.get(this);
//  q.push(element);
//  }
//  dequeue() {
//  let q = items.get(this);
//  let r = q.shift();
//  return r;
//  }
//  //other methods
//  }
//  return Queue2;
// })();



// const queue2 = new Queue2();
// queue2.enqueue(1)
// queue2.enqueue(2)
// queue2.enqueue(3)

// console.log(queue2);

function hotPotato (nameList: string[], num: number){

	let queue = new Queue(); // {1}
	
	for (let i=0; i<nameList.length; i++){
	
		queue.enqueue(nameList[i]); // {2}
	
	}

	let eliminated:any = '';

	
	while (queue.size() > 1){
		for (let i=0; i<num; i++){
			//Given a number, we need to iterate the queue. We will remove an item from the beginning of the queue, and add it to the end of
			queue.enqueue(queue.dequeue()!); // {3}
		}
		
		eliminated = queue.dequeue();// {4}
		console.log(eliminated + ' was eliminated from the Hot Potato game.');
	}
	
	return queue.dequeue();// {5}

}

//The first one is always the winner
let names = ['Max','Jack','Camila','Ingrid','Carl'];
let winner = hotPotato(names, 3);console.log('The winner is: ' + winner);

/*
PRIORITY QUEUE

The difference between the implementation of the default Queue and PriorityQueue
classes is that we need to create a special element (line {1}) to be added to PriorityQueue

//Higher priority then the elements its gonna be at first( its low to high, e.g: 1 is higher than 2)

function PriorityQueue() {
	let items = [];
	function QueueElement (element, priority){ // {1}
	this.element = element;
	this.priority = priority;
 }

 this.enqueue = function(element, priority){
 
	let queueElement = new QueueElement(element, priority);
 	let added = false;
 
	 for (let i=0; i<items.length; i++){
 		if (queueElement.priority < items[i].priority){ // {2}
 			items.splice(i,0,queueElement); // {3}
 			added = true;
 			break; // {4}
 		}
 	}
 	
	 if (!added){
 		items.push(queueElement); //{5}
 	}
 };
 
 this.print = function(){
 	for (let i=0; i<items.length; i++){
		 console.log(`${items[i].element} - ${items[i].priority}`);
 }
 
};
 //other methods - same as default Queue implementation
}



*/
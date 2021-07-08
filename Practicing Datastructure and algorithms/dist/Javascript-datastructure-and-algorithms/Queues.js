"use strict";
//First In First Out(FIFO)
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (element) {
        this.items.push(element);
    };
    Queue.prototype.dequeue = function () {
        //Delete the index 0 of our array
        return this.items.shift();
    };
    /*
        If we want to know
        what the front item of our queue is, we can use the front method. This method will return
        the item from the front of the queue (index 0 of the array):
    */
    Queue.prototype.front = function () {
        return this.items[0];
    };
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0; // true or false
    };
    Queue.prototype.size = function () {
        return this.items.length;
    };
    Queue.prototype.print = function () {
        return console.log(this.items.toString());
    };
    return Queue;
}());
var queue = new Queue();
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
function hotPotato(nameList, num) {
    var queue = new Queue(); // {1}
    for (var i_1 = 0; i_1 < nameList.length; i_1++) {
        queue.enqueue(nameList[i_1]); // {2}
    }
    var eliminated = '';
    while (queue.size() > 1) {
        for (var i_2 = 0; i_2 < num; i_2++) {
            //Given a number, we need to iterate the queue. We will remove an item from the beginning of the queue, and add it to the end of
            queue.enqueue(queue.dequeue()); // {3}
        }
        eliminated = queue.dequeue(); // {4}
        console.log(eliminated + ' was eliminated from the Hot Potato game.');
    }
    return queue.dequeue(); // {5}
}
//The first one is always the winner
var names = ['Max', 'Jack', 'Camila', 'Ingrid', 'Carl'];
var winner = hotPotato(names, 3);
console.log('The winner is: ' + winner);
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

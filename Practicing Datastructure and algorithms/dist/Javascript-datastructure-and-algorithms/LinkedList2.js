"use strict";
var NodeLList = /** @class */ (function () {
    function NodeLList(data, next) {
        if (next === void 0) { next = null; }
        this.data = data;
        this.next = next;
    }
    return NodeLList;
}());
var LinkedList2 = /** @class */ (function () {
    function LinkedList2() {
        this.head = null;
        this.size = 0;
    }
    //Insert firts node
    LinkedList2.prototype.insertFirst = function (data) {
        this.head = new NodeLList(data, this.head);
        this.size++;
    };
    //Insert last node
    LinkedList2.prototype.insertLast = function (data) {
        var node = new NodeLList(data);
        var current;
        //If empty, make head
        if (!this.head) {
            this.head = node;
        }
        else {
            current = this.head;
            //Del head pasamos al segundo y asi
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        //increments by one
        this.size++;
    };
    //Insert at index
    LinkedList2.prototype.insertAt = function (data, index) {
        //If index is outta range
        if (index > 0 && index > this.size) {
            return null;
        }
        //If index is 0
        if (index === 0) {
            this.insertFirst(data);
            return;
        }
        var node = new NodeLList(data);
        var current;
        var previous;
        //Set current to first
        current = this.head;
        var count = 0;
        //Find the index
        while (count < index) {
            previous = current; //Node before the index
            count++;
            current = current.next; //Node after the index
        }
        //The next value to the node gonna be current
        node.next = current;
        //We set the node as the next of the previous
        previous.next = node;
        this.size++;
    };
    //Get at index
    LinkedList2.prototype.getAt = function (index) {
        var current = this.head;
        var count = 0;
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
    };
    //Remove at index
    LinkedList2.prototype.removeAt = function (index) {
        if (index > 0 && index > this.size) {
            return;
        }
        var current = this.head;
        var previous;
        var count = 0;
        if (index === 0) {
            this.head = current.next;
        }
        else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    };
    //clear list
    LinkedList2.prototype.clearList = function () {
        this.head = null;
        this.size = 0;
    };
    //Print last data
    LinkedList2.prototype.printListData = function () {
        //currentNode
        var current = this.head;
        while (current) {
            console.log(current.data);
            //We pass to the other element
            current = current.next;
        }
    };
    return LinkedList2;
}());
var linkedList2 = new LinkedList2();
linkedList2.insertFirst(200);
// linkedList2.insertFirst(100);
linkedList2.insertLast(300);
linkedList2.insertAt(250, 1);
// linkedList2.getAt(0);
// linkedList2.toString()
// linkedList2.removeAt(1)
// linkedList2.clearList()
// linkedList2.printListData();
var DoublyNode = /** @class */ (function () {
    function DoublyNode(data, next, prev) {
        if (next === void 0) { next = null; }
        if (prev === void 0) { prev = null; }
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
    return DoublyNode;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = null;
        this.size = 0;
        this.tail = null;
    }
    DoublyLinkedList.prototype.insert = function (position, element) {
        if (position >= 0 && position <= this.size) {
            var node = new DoublyNode(element);
            var current = this.head;
            var previous = void 0;
            var index = 0;
            if (position === 0) {
                if (!this.head) {
                    this.head = node;
                    this.tail = node;
                }
                else {
                    node.next = current;
                    current.prev = node;
                    this.head = node;
                }
            }
            else if (position === this.size) {
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            }
            else {
                while (index++ < position) {
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
        }
        else {
            return false;
        }
    };
    DoublyLinkedList.prototype.removeAt = function (position) {
        if (position > -1 && position < this.size) {
            var current = this.head;
            var previous = void 0;
            var index = 0;
            //removing first element
            if (position === 0) {
                this.head = current.next;
                //if there is only one item, update tail
                if (this.size === 1) {
                    this.tail = null;
                }
                else {
                    this.head.prev = null;
                }
            }
            else if (position === length - 1) { //the last item
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = null;
            }
            else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                //link previous with current's next - skip it
                previous.next = current.next;
                current.next.prev = previous;
            }
            this.size--;
            return current.element;
        }
        else {
            return null;
        }
    };
    DoublyLinkedList.prototype.printListData = function () {
        //currentNode
        var current = this.head;
        while (current) {
            console.log(current.data);
            //We pass to the other element
            current = current.next;
        }
    };
    return DoublyLinkedList;
}());
var doubly_linkedList = new DoublyLinkedList();
doubly_linkedList.insert(0, 10);
doubly_linkedList.insert(0, 11);
doubly_linkedList.removeAt(0);
doubly_linkedList.printListData();

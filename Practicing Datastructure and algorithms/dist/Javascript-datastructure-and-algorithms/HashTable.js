"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var HashTable = /** @class */ (function () {
    function HashTable() {
        this.table = [];
    }
    HashTable.prototype.loseloseHashCode = function (key) {
        var hash = 0;
        /*
            Given a key parameter, we will generate a number based on the sum of each char ASCII
            value that composes key
        */
        for (var i_1 = 0; i_1 < key.length; i_1++) {
            hash += key.charCodeAt(i_1);
        }
        return hash % 37;
    };
    HashTable.prototype.put = function (key, value) {
        var position = this.loseloseHashCode(key);
        console.log(position + ' - ' + key);
        this.table[position] = value;
    };
    HashTable.prototype.get = function (key) {
        return this.table[this.loseloseHashCode(key)];
    };
    HashTable.prototype.remove = function (key) {
        this.table[this.loseloseHashCode(key)] = undefined;
    };
    HashTable.prototype.print = function () {
        for (var i_2 = 0; i_2 < this.table.length; i_2++) {
            if (this.table[i_2] !== undefined) {
                console.log(i_2 + ": " + this.table[i_2]);
            }
        }
    };
    return HashTable;
}());
//Using separate chaining: that means we gonna create a linked list to handle hash table colisions
var ValuePair = /** @class */ (function (_super) {
    __extends(ValuePair, _super);
    function ValuePair(key, value) {
        var _this = 
        //pasamos las props de hashTable
        _super.call(this) || this;
        _this.value = value;
        _this.key = key;
        return _this;
    }
    ValuePair.prototype.toString = function () {
        return '[' + this.key + ' - ' + this.value + ']';
    };
    ValuePair.prototype.put = function (value, key) {
        var position = this.loseloseHashCode(key);
        if (this.table[position] == undefined) {
            this.table[position] = new LinkedList_1.LinkedList();
        }
        this.table[position].append(new ValuePair(key, value));
    };
    ValuePair.prototype.get = function (key) {
        var position = this.loseloseHashCode(key);
        if (this.table[position] !== undefined) {
            //iterate linked list to find key/value
            var current = this.table[position].getHead();
            while (current.next) {
                if (current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
                //check in case first or last element
                if (current.element.key === key) {
                    return current.element.value;
                }
            }
        }
        return undefined;
    };
    ValuePair.prototype.remove = function (key) {
        var position = this.loseloseHashCode(key);
        if (this.table[position] !== undefined) {
            var current = this.table[position].getHead();
            while (current.next) {
                if (current.element.key === key) { //{11}
                    this.table[position].remove(current.element); //{12}
                    if (this.table[position].isEmpty()) { //{13}
                        this.table[position] = undefined; //{14}
                    }
                    return true; //{15}
                }
                current = current.next;
            }
            //check in case first or last element
            if (current.element.key === key) { //{16}
                this.table[position].remove(current.element);
                if (this.table[position].isEmpty()) {
                    this.table[position] = undefined;
                }
                return true;
            }
        }
        return false; //{17}
    };
    return ValuePair;
}(HashTable));
var hashChaining = new ValuePair('Gandolf', 'gandolf.email');
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

"use strict";
//Is also known as a Map()
//It is use to find a particular value
//We store a [key, value] in sets we store a [key, key]
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.items = {};
    }
    Dictionary.prototype.has = function (key) {
        return key in this.items; //True or false
    };
    Dictionary.prototype.set = function (key, value) {
        //We simply set the value to the key property of the items object.
        this.items[key] = value;
    };
    Dictionary.prototype.delete = function (key) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    };
    Dictionary.prototype.get = function (key) {
        //undefined es un valor que denota que no hay valor porque no se ha definido todavía,
        //null se usa para indicar que no hay valor porque así lo hemos querido indicar expresamente.
        return (this.has(key)) ? this.items[key] : undefined;
    };
    Dictionary.prototype.values = function () {
        var values = [];
        //For in recorre las propiedades de un objeto
        for (var k in this.items) {
            //). Just to make sure the value exists, we will use the has function to verify that key really exists
            if (this.has(k)) {
                values.push(this.items[k]);
            }
        }
        return values;
    };
    Dictionary.prototype.keys = function () {
        return Object.keys(this.items);
    };
    Dictionary.prototype.getItems = function () {
        return this.items;
    };
    Dictionary.prototype.size = function () {
        return Object.keys(this.items).length;
    };
    Dictionary.prototype.clear = function () {
        this.items = {};
    };
    return Dictionary;
}());
var dictionary = new Dictionary();
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

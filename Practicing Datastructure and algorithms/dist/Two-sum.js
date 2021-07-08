"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function twoSum(nums, target) {
    var map = new Map();
    for (var index = 0; index < nums.length; index++) {
        var diff = target - nums[index];
        if (map.has(diff)) {
            return [map.get(diff), index];
        }
        map.set(nums[index], index);
    }
    return [];
}
;
// console.log(twoSum([1, 2 , 3 , 4 ,5], 9));
// reverseString('hello');
//: number
function romanToInt(s) {
    var result = 0;
    if (s === '') {
        return result;
    }
    var romans = new Map();
    romans.set('I', 1);
    romans.set('V', 5);
    romans.set('X', 10);
    romans.set('L', 50);
    romans.set('C', 100);
    romans.set('D', 500);
    romans.set('M', 1000);
    console.log(romans.values());
    for (var i_1 = 0; i_1 < s.length; i_1++) {
        if (romans.get(s.charAt(i_1)) < romans.get(s.charAt(i_1 + 1))) {
            result -= romans.get(s.charAt(i_1));
        }
        else {
            result += romans.get(s.charAt(i_1));
        }
    }
    return result;
}
;
//: boolean
function isPalindrome(x) {
    var x_string = x.toString();
    var reversed = x_string.split("").reverse().join("");
    var reversed_int = parseInt(reversed);
    return (reversed_int === x) ? true : false;
}
;
console.log(isPalindrome(-333));
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function inorderTraversal(root) {
    var stack = [];
    var now = root;
    var res = [];
    while (now || stack.length) {
        while (now) {
            stack.push(now);
            now = now.left;
        }
        now = stack.pop();
        res.push(now.val);
        now = now.right;
    }
    return res;
}
;
console.log(inorderTraversal);

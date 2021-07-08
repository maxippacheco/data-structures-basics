
class TreeNode{
	key: any;left:any; right: any;

	constructor(key: any){
		this.key = key;
		this.left = null;
		this.right = null;
	}
}

var insertNode = function(node: any, newNode: any){
			if (newNode.key < node.key){ //{4}

				/*
					If the node's key is less than the current node key (in this case, it is the root (line
					{4})), then we need to check the left child of the node. If there is no left node (line
					{5}), then we will insert the new node there (line {6}). If not, we need to descend
					a level in the tree by calling insertNode recursively (line {7}). In this case, the
					node we will compare next time will be the left child of the current node.
				*/

				if (node.left === null){ //{5}
					node.left = newNode; //{6}
				} else {
					insertNode(node.left, newNode); //{7}
				}

			} else {
				
				//The same with this
				if (node.right === null){ //{8}
					node.right = newNode; //{9}
				} else {
					insertNode(node.right, newNode); //{10}
				}
			}
};

//----------ORDER METHODS----------

const inOrderTraverseNode = (node: TreeNode , callback: any) => {
	
	if (node !== null) {
		inOrderTraverseNode(node.left, callback);
		callback(node.key);
		inOrderTraverseNode(node.right, callback);
	}

}

const preOrderTraverseNode = (node: TreeNode, callback: any) => {
	
	if (node !== null) {
		callback(node.key);
		preOrderTraverseNode(node.left, callback);
		preOrderTraverseNode(node.right, callback);
	}

}

const postOrderTraverseNode = (node: TreeNode, callback: any) => {
	
		//In this case, the post-order traversal will visit the left node (line {1}), then the right node
		//(line {2}), and at last, the root node (line {3}).

	if (node !== null) {
		preOrderTraverseNode(node.left, callback);
		preOrderTraverseNode(node.right, callback);
		callback(node.key);
	}

}


//---------SEARCH METHODS----------

const minNode = (node: TreeNode) => {
	
	if (node) {
		while (node && node.left !== null) {
			
			node = node.left;
		}

		return node.key;
	}

	return null;
}

const maxNode = (node: TreeNode) => {
	
	/*
		To find the maximum key, we will traverse the right edge of the tree (line {5}) until we find
		the last node at the right-hand end of the tree.
		So, for the minimum value, we will always go to the left-hand side of the tree, and for the
		maximum value, we will always navigate to the right-hand side of the tree.
	*/
	
	if (node) {
		while (node && node.right !== null) {
			
			node = node.right;
		}

		return node.key;
	}

	return null;
}

const searchNode = (node: TreeNode, key: any): any => {
	
	/*
		If the node is not null, we need to continue the verification. If the key we are looking for is
		lower than the current node (line {3}), then we will continue the search using the left child
		subtree (line {4}). If the value we are looking for is greater than the current node (line {5}),
		then we will continue the search from the right child of the current node (line {6}).
		Otherwise, it means that the key we are looking for is equal to the current node's key, and
		we will return true to indicate that we found the key (line {7}).

	
	
	*/



	if (node === null) {
		return false;
	}

	if (key < node.key) {
		
		return searchNode(node.left, key);

	} else if(key > node.key) {
		
		return searchNode(node.right, key);
	
	}else {
		return true;
	}


}
const findMinNode = (node: any) => {
	while (node && node.left !== null) {
	node = node.left;
	}
	return node;
};


const removeNode = (node: any, key: any) => {
	
	if (node === null) {
		return null;
	}
	if ( key < node.key) {
		node.left = removeNode(node.left, key);
		return node;

	} else if( key > node.key ){
		node.right = removeNode(node.right, key);
		return node;
	}else{
		//The key is equal to the node

		//case 1- a leaf node
		if (node.left === null && node.right === null) {
			node = null;
			return node;
		}
		
		//case 2 - a node with only 1 child
		if (node.left === null) {
			node = node.right;
			return node;
		} else if( node.rigth === null ){
			node = node.left;
			return node;
		}

		//case 3 - a node with 2 children
		const aux = findMinNode(node.right);
		node.key = aux.key;
		node.right = removeNode(node.right, aux.key);
		return node;
	}
}

//Balance factor

const heightNode = (node: TreeNode): any => {
	if (node === null) {
		return -1;
	} else{
		return Math.max(heightNode(node.left)),
		heightNode(node.right) + 1;
	}


}



class BinarySearchTree{

	root:any;

	constructor(){
		this.root = null;
	}

	insert(key: any){
		let newNode = new TreeNode(key);
	

	
		if (this.root === null) {
			this.root = newNode;
		}else{
			insertNode(this.root, newNode);
		}
	}

	//---------- ORDER METHODS ----------

	//Los ordena de menor a mayor
	inOrderTraverse(callback: any){
		inOrderTraverseNode(this.root, callback);
	}

	/*
		The difference between the in-order and pre-order traversals is that the pre-order one visits
		the root node first (line {1}), then the left node (line {2}), and finally the right node (line
		{3}), while the in-order traversal executes the lines in the following order: lines {2}, {1},
		and {3}.
	*/


	//A pre-order traversal visits the node prior to its descendants. An application of pre-order traversal could be to print a structured document.
	preOrderTraverse(callback: any){
		preOrderTraverseNode(this.root, callback);
	}

	postOrderTraverse(callback: any){
		postOrderTraverseNode(this.root, callback);
	}

	//---------- SEARCH METHODS --------
	
	/**
	 * 
		Searching for minimum values
		Searching for maximum values
		Searching for a specific value
	 * 
	 */

	min(){
		return minNode(this.root);
	}

	max(){
		return maxNode(this.root);
	}

	search( key:any ){
		return searchNode(this.root, key);
	}

	//-----------REMOVE----------

	remove(key: any){
		this.root = removeNode(this.root, key);
	}		

	//----------SELF BALANCING TRE(AVL TREE)---------
	insertAVL(node: TreeNode, element: any){
		if (node === null) {
			node = new TreeNode(element);
		
		}else if(element < node.key){
			node.left = insertNode(node.left, element);

			if (node.left !== null) {
				//verify if balancing is needed

			}
		} else if(element > node.key){

			node.right = insertNode(node.right, element);

			if (node.right !== null) {
				//verify if balancing is needed


			}

		}

		/*
			In an AVL tree, for every node, we need to calculate the difference between the height of the
			right-hand side subtree (hr) and the left-hand side subtree (hl). The result of hr – hl needs to
			be 0, 1, or -1. If the result is different from these values, it means the tree needs to be
			balanced. This concept is called the balance factor.		
		*/
	}


	printNode(value: any){ //{6}
 		console.log(value);
	}
}

var tree = new BinarySearchTree();

tree.insert(11)
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(6);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

// tree.postOrderTraverse(tree.printNode);
// console.log(tree.search(10)); True or false
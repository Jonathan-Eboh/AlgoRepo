"use strict"

//This is our BST constructor function
function BST(value) { //Capital name for Constructor
  this.value = value;
  this.left = null;
  this.right = null;
}

//insert method
BST.prototype.insert = function (value) {
    if (value <= this.value) { //the value passed in is less than or equal to our root node
        //two possible cases here, one where there is a left node and one where there is not
        if (!this.left) this.left = new BST(value);
        else this.left.insert(value); //recursive call
    } else if (value > this.value){ //the value passed in is larger than our root node
        if(!this.right) this.right = new BST(value);
        else this.right.insert(value);//recursive call
    }
};
//___________________________________________________________

//___________________________________________________________




let bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

console.log(bst.right.left.left);
console.log(bst.left.right.left);
console.log(bst.right.right);

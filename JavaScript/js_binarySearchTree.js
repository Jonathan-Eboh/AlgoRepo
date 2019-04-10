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
//contains method
BST.prototype.contains = function(value){
    if (value === this.value) return true;
    else if (value < this.value){//left case
      if (!this.left) return false; //check if left node even exist
      else return this.left.contains(value); //if it does exist then run our contains method on it
    }
    else if (value > this.value) {//right case
      if(!this.right) return false; //checking to see if the right node exist
      else return this.right.contains(value);// if it does then we run contains on it
    }

};
//___________________________________________________________
//depth first search traversal
BST.prototype.depthFirstTraversal = function(iteratorFunc) {
  //in order method______________________
  if (this.left) this.left.depthFirstTraversal(iteratorFunc); //runs on every node in the left side of the tree
  iteratorFunc(this.value); //this one runs when there is no left, the returns
  if(this.right) this.right.depthFirstTraversal(iteratorFunc); //runs on every node in the right side of the tree

};
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
console.log("__________________________testing contains method________________________________");

console.log(bst.contains(10));
console.log(bst.contains(15));

console.log("__________________________testing depthFirstTraversal method________________________________");

bst.depthFirstTraversal(log);

function log(value){
  console.log(value);
}

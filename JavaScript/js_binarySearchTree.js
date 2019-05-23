"use strict"

//This is our BST constructor function
//this is an example of how a BST consist of other smaller sub BST
function BST(value) { //Capital name for Constructor
  this.value = value;
  this.left = null;
  this.right = null;
}

//insert method
BST.prototype.insert = function (value) {
    if (value <= this.value) { //the value passed in is less than or equal to our root node
        //two possible cases here, one where there is a left node and one where there is not
        if (!this.left) this.left = new BST(value); //no left node: make one
        else this.left.insert(value); //left node: recursive call BST on that node
    } else if (value > this.value){ //the value passed in is larger than our root node
        if(!this.right) this.right = new BST(value);//no right node: make one
        else this.right.insert(value);//right node: recursive call BST on that node
    }
};
//___________________________________________________________
//contains method
BST.prototype.contains = function (value) {
  if (value === this.value) return true; //we found the value, just need to return it
  else if (value < this.value){ //value is smaller than this.value so go left
    if (!this.left) return false; //no left node? default to false
    else return this.left.contains(value); //left node? run this.contains on that node
  }else if(value > this.value){//value is larger than this.value so go right
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};
//___________________________________________________________
//Depth first traversal
//Variant: in order traversal
//Most widely used verison of Depth first traversal
BST.prototype.depthFirstTraversal = function (iteratorFunc){
    if(this.left) this.left.depthFirstTraversal(iteratorFunc); //if left node exist then run dft on it.
    iteratorFunc(this.value); // else run dft on the first node(parent node)
    if(this.right) this.right.depthFirstTraversal(iteratorFunc); //if right exist then run dft on it.
};
//Refactor of dft so we can access our nodes in differnt orders
BST.prototype.depthFirstTraversalRefactor = function (iteratorFunc, order){
    if(this.left) this.left.depthFirstTraversal(iteratorFunc, order); //if left node exist then run dft on it.
    if (order === 'in-order') iteratorFunc(this.value); // else run dft on the first node(parent node)
    if(this.right) this.right.depthFirstTraversal(iteratorFunc, order); //if right exist then run dft on it.
};
//___________________________________________________________
//Refactor of dft. This time we traverse in "pre-order"
BST.prototype.depthFirstTraversalPreorder = function (iteratorFunc, order){
    if(order === 'pre-order') iteratorFunc(this.value);
    if(this.left) this.left.depthFirstTraversal(iteratorFunc, order); //if left node exist then run dft on it.
    if(order === 'in-order') iteratorFunc(this.value); // else run dft on the first node(parent node)
    if(this.right) this.right.depthFirstTraversal(iteratorFunc, order); //if right exist then run dft on it.
};
//___________________________________________________________
//Refactor of dft. This time we traverse in "post-order"
BST.prototype.depthFirstTraversalPostorder = function (iteratorFunc, order){
    if(order === 'pre-order') iteratorFunc(this.value);
    if(this.left) this.left.depthFirstTraversalPostorder(iteratorFunc, order); //if left node exist then run dft on it.
    if(order === 'in-order') iteratorFunc(this.value); // else run dft on the first node(parent node)
    if(this.right) this.right.depthFirstTraversalPostorder(iteratorFunc, order); //if right exist then run dft on it.
    if(order === 'post-order') iteratorFunc(this.value);
};
//___________________________________________________________
//BreadthFirstTraversal
BST.prototype.breadthFirstTraversal = function (iteratorFunc) {
  let queue = [this]; //first in first out (FIFO)
  //here "this" refers to the root node of our binary search tree
  while (queue.length) {
    let treeNode = queue.shift();
    iteratorFunc(treeNode);
    if(treeNode.left) queue.push(treeNode.left);
    if(treeNode.right) queue.push(treeNode.right);
  }
};
//___________________________________________________________
//This is our get min Val function
BST.prototype.getMinVal = function() {
//assumes unbalanced tree
//set first node value as min
//walk through tree comparing every value to it to see if the value is smaller
//if yes then set as new min

let queue = [this]; //first in first out (FIFO)
let min = this.value; //This is where we set the first value as the min
//here "this" refers to the root node of our binary search tree
while (queue.length)
{
  let treeNode = queue.shift();
  if(treeNode.left){
    if (treeNode.value < min)
    {
      min = treeNode.value;
    }
    queue.push(treeNode.left)
  }
  if(treeNode.right)
  {
    if (treeNode.value < min) {
      min = treeNode.value;
    }
    queue.push(treeNode.right);
  }


}
  return min
};
//___________________________________________________________
//Refactor assumes balanced tree
BST.prototype.getMinValRefactor = function() {
  if(this.left) return this.left.getMinValRefactor(); //if left exist keep moving left
  else return this.value; //No left node? return the current node

}
//___________________________________________________________
//This is our get max val function
BST.prototype.getMaxVal = function(){
//assumes unbalanced tree
//set first node value as max
//walk through tree comparing every value to it to see if the value is smaller
//if yes then set as new max
};
//___________________________________________________________
//Refactor assumes balanced tree
BST.prototype.getMaxValRefactor = function() {
  if(this.right) return this.right.getMaxValRefactor(); //if right exist keep moving left
  else return this.value; //No right node? return the current node

}
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

console.log(bst);
console.log(bst.right.left.left);
console.log(bst.left.right.left);
console.log(bst.right.right);

console.log("//_____Contains method______________________________________________________");
console.log(bst.contains(50)); //true
console.log(bst.contains(40)); //false
console.log(bst.contains(105));//true
console.log(bst.contains(77)); //false
console.log(bst.contains(85)); //true
console.log(bst.contains(70)); //true

console.log("//_____Depth First Search______________________________________________________");

bst.depthFirstTraversal(log);

//___________________________________________________________
//Our iterator functions
function log(value) {
  console.log(value); //this is the iterator function (iteratorFunc) we are using throughout with our dfs on our BST
}

function log2(node) {
  console.log(node.value); //this is the iterator function (iteratorFunc) we are using throughout with our bfs on our BST
}

//___________________________________________________________


console.log("//_____Depth First Search Refector______________________________________________________");

bst.depthFirstTraversalRefactor(log , 'in-order');

console.log("//_____Depth First Search Pre-order______________________________________________________");

bst.depthFirstTraversalPreorder(log , 'pre-order');

console.log("//_____Depth First Search Post-order______________________________________________________");

bst.depthFirstTraversalPostorder(log , 'post-order');

console.log("//_____Breadth First Search______________________________________________________");

bst.breadthFirstTraversal(log2);


console.log("//_____Get min val______________________________________________________");


console.log(bst.getMinVal());


console.log("refactor-------");
console.log(bst.getMinValRefactor());

console.log("get Max value");
console.log(bst.getMaxValRefactor());

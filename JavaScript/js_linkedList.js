"use strict"
//properties will include: head and tail
function LinkedList(){ //Capital for constructor
  this.head = null;
  this.tail = null;
}
//properties will include: value, next(node), and prev(node)
function Node(value, next, prev) { //capital for constructor
  this.value = value;
  this.next = next;
  this.prev = prev;
}

//each instance is its own linked list
let LL = new LinkedList();
let userList = new LinkedList();
let toDoList = new LinkedList();

//console.log(LL);

let node1 = new Node(100, 'node2', null);
//console.log(node1);

//___________________________________________________________

//Adding a node to the head
LinkedList.prototype.addToHead = function(value) {
  let newNode = new Node(value, this.head , null);
  //this first case will assume that the linked list is already populated
  if(this.head)  this.head.prev = newNode;//references the old head at this time not the new one
//this always references our linked list constructor function, not our node constructor function
  else this.tail = newNode; //since this is the only node it will be the head node and the tail node

  this.head = newNode;
};

//Addind node to tail ****NOTE the logic for handeling all nodes correctly having the right 'next' and 'prev' pointer values is handled in add
LinkedList.prototype.addToTail = function(value){
  var newNode = new Node(value, null, this.tail); //our current tail will be pointed to by the node we are adding
  if(this.tail) this.tail.next  = newNode;//the list is populated so the node we are adding is refereced by the tail of the previously last node
  else this.head = newNode; //list was empty so our node we are adding will be both the head and the tail
  this.tail = newNode;
};
//___________________________________________________________
//Removing the head node of our list
LinkedList.prototype.removeHead = function(){
  if(!this.head) return null; //if the head isnt there return null
  let valHead = this.head.value; //this holds the value of the current head
  this.head = this.head.next; //"rewiring" our linked list to exclude the current head is how we get rid of the current head
  // our list could have either been empty previously/empty after removing one node/or still have nodes remaining
  if(this.head) this.head.prev = null;//making sure the head has no node before it
  else this.tail = null;
  return valHead;
};

LinkedList.prototype.removeTail = function() {
  if(!this.tail) return null; //if tail isnt there return null
  let valTail = this.tail.value; //this holds the value of the current valTail
  this.tail = this.tail.prev; //points the current tail to the node befor last

  if(this.tail) this.tail.next = null;//making sure there is no node after the tail
  else this.head = null;
  return valTail;
};

//___________________________________________________________
//Searching through the linked list for a specific value
LinkedList.prototype.search = function(searchValue) {
  let currentNode = this.head;
  while (currentNode) {
    if(currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;//it made it through without finding the target value so return null
};


//___________________________________________________________
//Index of method

LinkedList.prototype.indexOf = function (value) {
  let outPutArr = []; //stores our list of indicies
  let currentNode = this.head;//starts at first node then walks through LinkedList
  while (currentNode) {
    if(currentNode.value === value)
    outPutArr.push(currentNode.value);
    currentNode = currentNode.next; //this is the line of code that is most important for actually being able to walk though the linked list
  }
  if (outPutArr.length === 0) {
    return null;
  }
  return outPutArr;
};

//___________________________________________________________
let ll = new LinkedList();

ll.addToHead(100);
ll.addToHead(200);
//these two nodes in this configureation wil lead to a Circularly linked list
ll.addToHead(300);

console.log(ll);
console.log("_______________________________________");
var myLL = new LinkedList();

myLL.addToTail(10);
myLL.addToTail(20);
myLL.addToTail(30);
myLL.addToHead(100);
console.log(myLL);

//myLL.addToHead(100); remember javascript is a read line programming laguage this lines needs to be above the above console.log

console.log("traversing though the list_____________");
console.log(myLL.tail.prev); //get the node before the last node
console.log(myLL.tail.prev.prev);//this gets us the first node that we added

console.log("_______________________________________");
let lnkLst = new LinkedList();
lnkLst.addToHead(1000);//add this to head
lnkLst.addToHead(2000);//THEN add this to the head
lnkLst.addToTail(3000);//finally add this to the tail

lnkLst.removeHead(); //should remove 2000
console.log(lnkLst.removeHead()); //should remove 1000 and log that to the screen

console.log("_______________________________________")
let lnkLstTwo = new LinkedList();
lnkLstTwo.addToHead('one');
lnkLstTwo.addToHead('two');
lnkLstTwo.addToHead('three');

console.log(lnkLstTwo.removeTail());

console.log("_______________________________________")

let lnkLstThree = new LinkedList();
lnkLstThree.addToHead(123);
lnkLstThree.addToHead(70);
lnkLstThree.addToHead('hello');
lnkLstThree.addToTail(19);
lnkLstThree.addToTail('world');
lnkLstThree.addToTail(20);

console.log(lnkLstThree.search(70));//70
console.log(lnkLstThree.search('world'));//world
console.log(lnkLstThree.search(10));//null

console.log("_______________________________________")

let lnkLstFour = new LinkedList();
lnkLstFour.addToHead(1);
lnkLstFour.addToHead(6);
lnkLstFour.addToHead(1);
lnkLstFour.addToHead(3);
lnkLstFour.addToHead(1);
lnkLstFour.addToHead(6);
lnkLstFour.addToHead(7);
lnkLstFour.addToHead(2);
lnkLstFour.addToHead(9);
lnkLstFour.addToHead(3);
lnkLstFour.addToHead(9);
lnkLstFour.addToHead(7);
lnkLstFour.addToHead(4);
lnkLstFour.addToHead(5);
lnkLstFour.addToHead(6);
lnkLstFour.addToHead(7);

console.log(lnkLstFour.indexOf(1));
console.log(lnkLstFour.indexOf(2));
console.log(lnkLstFour.indexOf(3));
console.log(lnkLstFour.indexOf(4));
console.log(lnkLstFour.indexOf(5));
console.log(lnkLstFour.indexOf(6));
console.log(lnkLstFour.indexOf(7));
console.log(lnkLstFour.indexOf(8));
console.log(lnkLstFour.indexOf(9));

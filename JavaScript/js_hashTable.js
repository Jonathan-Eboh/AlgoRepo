"use strict"

//---------------------------------------------
//Some useful things first
///Hash tables are important because they almost always (see collisions)
//provide a constant Runtime:
// Lookup: O(1)
// Insertion: O(1)
//Hash tables store data via key value pairing
// Key is often a string or an int
// Value can be any datatype

//When multiple pieces of data end up in the same bucket
//This is referred to as a collision
//In order to handle this each bucket is transformed
//Into a single linked list


//charCodeAt() this will return the unicode value of the char at the index passed in
console.log('hello world'.charCodeAt(1)); //101
console.log('hello world'.charCodeAt(4)); //111

//modulus operator
console.log(7 % 3); //1
console.log(100 % 30); //10
console.log(32897438297 % 30); //this number can only is bound between 0 and 29
//---------------------------------------------
//Our hashtable constructor function
function HashTable(size){
  this.buckets = Array(size); //allows us to set the size of the hash HashTable
  this.numBuckets = this.buckets.length;
}
//---------------------------------------------
//Our constructor function for each piece of data
function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null; //if not next value is pass in the set to null
}
//---------------------------------------------
//Our method for hashing keys and placing them in the right buckets
HashTable.prototype.hash = function(key) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
  }
  let bucket = total % this.numBuckets; //number between 0 and one less than numBuckets
  return bucket;
};
//---------------------------------------------
HashTable.prototype.insert = function (key, value) {
  let index = this.hash(key);
  console.log('INDEX: ', index);
  //our bucket is empty case
  if (!this.buckets[index]) this.buckets[index] = new HashNode(key, value);
  else if (this.buckets[index].key === key) {
    this.buckets[index].value = value;
  }
  else { // our bucket is not empty and a collision occures
    let currentNode = this.buckets[index];
    while (currentNode.next) {
      if (currentNode.next.key === key) {
          currentNode.next.value = value;
          return; //code flow stops here bc we dont need to add a node if we're updating an already exsiting one.
      }
      currentNode = currentNode.next; //Goes untill null, (null is falsy)
    }
    currentNode.next = new HashNode(key, value);
  }
};
//---------------------------------------------
HashTable.prototype.get = function(key) {
  let index = this.hash(key);
  if (!this.buckets[index]) return null;
  else {
      let currentNode = this.buckets[index];
      while (currentNode) {
        if(currentNode.key === key) return currentNode.value;
        currentNode = currentNode.next;
      }
      return null;
  }
};
//---------------------------------------------
HashTable.prototype.retrieveAll = function(){
    let allNodes = [];
    for (let i = 0; i < this.numBuckets; i++) {
      let currentNode = this.buckets[i];
      while (currentNode) {
        allNodes.push(currentNode);
        currentNode = currentNode.next;
      }
    }
    return allNodes;
};
//---------------------------------------------

let myHT = new HashTable(30);
//console.log(myHT);

console.log(myHT.hash('Becca'));

console.log();

myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Dane', 'dane@yahoo.com');
myHT.insert('Dean', 'deanmachine@gmail.com');
myHT.insert('Megan', 'megansmith@gmail.com');
myHT.insert('Dane', 'dane1010@outlook.com');
myHT.insert('Joe', 'joey@facebook.com');
myHT.insert('Samantha', 'sammy@twitter.com');
//console.log(myHT.buckets);


console.log(myHT.get('Dean'));
console.log(myHT.get('Megan'));

console.log("myHT retrieveAll()_________________________");
console.log(myHT.retrieveAll());

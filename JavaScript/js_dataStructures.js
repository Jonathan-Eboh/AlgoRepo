"use strict"

//This is our constructor function
function User(firstName, lastName, age, gender) { //Capital letter for constructor function
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
};

//Renenber the keyword 'this' refers to the object that will be created by the constructor function

let user1 = new User('John', 'Smith', 26, 'male');
console.log(user1);

let user200 = new User('Jill', 'Robinson', 25, 'female');
console.log(user200);

//prototype object
User.prototype.emailDomain = '@facebook.com';
console.log(user1.emailDomain);
console.log(user200.emailDomain);

User.prototype.getEmailAddress = function() {
  return this.firstName + this.lastName + this.emailDomain;
}
//each of the things we add to prototype show up on the __proto__ (read as: "dunder proto")

console.log(user200.getEmailAddress());
console.log(user1.getEmailAddress());

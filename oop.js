// //OBJECT ORRIENTED JAVASCRIPT

// var person = {

// 	firstname: 'Default',
// 	lastname: 'Default',
// 	getFullName: function(){
// 		return this.firstname + ' ' + this.lastname;
// 	}
// }

// var john = {

// 	firstname: 'John',
// 	lastname: 'Doe'

// }


// //don't do this ever... for demo purposes only __proto__ is bad!

// john.__proto__ = person;

// console.log(john.getFullName());
// console.log(john.firstname);

// var jane = {
// 	firstname: 'Jane'
// }

// jane.__proto__ = person;

// console.log(jane.getFullName());

//===================base object ====================//
// in console look up __proto__ value, everything goes to base prototype

// var a = {};
// var b = function(){};
// var c = [];

//===============reflection and extention ====================//
// person = {
// 	firstname: 'Default',
// 	lastname: 'Default',
// 	getFullName: function(){
// 		return this.firstname + ' ' + this.lastname;
// 	}
// }

// var john = {

// 	firstname: 'John',
// 	lastname: 'Doe'

// }

// john.__proto__ = person;

// for ( var prop in john ){
// 	if (john.hasOwnProperty(prop)){
// 		console.log(prop + ': '+ john[prop]);
// 	}
// }


// var jane = {

// 	address: '91 Ash Street',
// 	getFormalFullName: function(){
// 		return this.lastname+ ' ' + this.firstname;
// 	}

// }

// var jim = {
// 	getFirstName: function(){
// 		return firstname;
// 	}
// }

// _.extend(john, jane, jim);

// console.log(john, jane, jim);

//=====================finally building objects============//
//--------------function constructor--------------------//
// function Person(firstname, lastname){
	
// 	this.firstname = firstname;
// 	this.lastname = lastname;
// 	//console.log('Has been made');

// }
// // because you don't have to have hundreds of methods for each 
// // object created from constructor
// Person.prototype.getFullName = function(){
// 	return this.firstname + ' ' + this.lastname;
// }


// var john = new Person('John', 'Doe');
// console.log(john);
// console.log(john.getFullName());

// var sue = new Person('Jane', 'Doe');
// console.log(sue);

//----------- there are some that are built in though ---------------//


// String.prototype.isLengthGreaterThan = function(limit){
// 	return this.length > limit;
// }

// console.log('John'.isLengthGreaterThan(3));
// console.log('John'.isLengthGreaterThan(20));

// Number.prototype.isPositive = function(){
// 	console.log(this);
// 	return this > 0;

// }


//-------another way to create and object: pure prototypical inheritance ----//





// var person = {

// 	firstname:'Default',
// 	lastname: 'Default',
// 	greet: function(){
// 		return 'Hi ' + this.firstname + ', your address is: ' + this.address;
// 	}

// }

// var john = Object.create(person);
// john.firstname = 'John';
// john.lastname = 'Burt';
// john.address = '91 Ash Street'


// console.log(john.greet());

// var sue = Object.create(person);
// console.log(sue.greet());

// var dude = Object.create(john);
// dude.firstname = 'Dude';
// dude.lastname = 'Whaaaaat';
// console.log(dude.greet());



//==============strict version ==================//
// function logNewPerson(){
// 	"use strict";

// 	var person2;
// 	persom2 ={};
// 	console.log(persom2);
// }


// // "use strict";  // this is opt in

// var person;

// persom = {};
// console.log(persom);
// logNewPerson();
//  First part of the course



// var person = new Object();

// person["firstname"] = "Tony";
// person["lastname"] = "Alicea";

// var firstNameProperty = "firstname";



// person.address = new Object();
// person.address.street = "91 Ash Street";
// person.address.city = "Waltham";
// person.address.state = "MA";

// console.log(person);
// console.log(person[firstNameProperty]);

// console.log(person.firstname);
// console.log(person.lastname);

// console.log(person.address.street);
// console.log(person["address"]["street"]);


// Second part of the course


// var Marc = { 
// 	firstname: 'Marc', 
// 	lastname: 'Burt',
// 	address: {
// 		street: '91 Ash Street',
// 		city: 'Waltham',
// 		state: 'MA'
// 	}

// };

// function greet(person){

// 	console.log('Hi ' + person.firstname);

// }

// greet(Marc);

// greet({
// 	firstname: "Marc2",
// 	lastname: "Burt2"
// });

// //Difference in JSON and JavaScript Objects

// var objectLiteral = {

// 	firstName: 'Marc',
// 	isAProgrammer: true

// }

// console.log(objectLiteral);

// //JSON has to be wrapped in quotes (subset of JavaScript Object Notation)

// var jsonValue = JSON.parse('{ "firstName": "Marc", "isAProgrammer": true }')

// console.log(JSON.stringify(objectLiteral));
// console.log(jsonValue)

//============== functions are objects ==================//



// function greet(){
// 	console.log("Hi");
// }

// greet.language = 'english';

// console.log(greet);
// console.log(greet.language);


//===========function statements and functions expressions=========///

// greet();


// function greet(){
// 	console.log('hi');
// }

// var anonymousGreet = function() {

// 	console.log('hi');

// }

// anonymousGreet();


// function log(a){
// 	a();
// }

// log("hello");

// log({
// 	greeting: "hi"
// })

// log(function(){
// 	console.log("hi");
// });

// log(anonymousGreet);

//============ by reference =================//

// var a = 3;
// var b;

// b = a;
// a = 2;


// console.log(a);
// console.log(b);

// /// make it an object

// var c = {greeting: "Hi"};
// var d;

// d = c;
// c.greeting = "Hi";

// console.log(c);
// console.log(d);


// // by reference (even as parameters)

// function changeGreeting(obj){
// 	obj.greeting = "Hola"; //mutate
// }

// changeGreeting(d);
// console.log(c);
// console.log(d);


// c = { greeting: "Howdy" };

// console.log(c);
// console.log(d);

//==============objects, functions, //this// =================//

// function a(){
// 	console.log(this);
// 	console.log(window);
// 	this.newvariable = 'hello';
// 	dude = this.newvariable;
// 	newvariable = 'Hey Dude'
// 	console.log(newvariable);
// 	console.log(dude);
// }

// var b = function(){
// 	console.log(this);
// }

// a();

// console.log(newvariable)
// console.log(newvariable)

// b();



// var c = {
// 	name: 'the c object',
// 	dude: 'Whaaat',
// 	log: function(){
// 		var self = this; // give 'self' the reference for 'this'. Holy shit, duder!
// 		console.log(self);

// 		self.name = 'updated c object'
// 		console.log(self);

// 		var setname = function(newname){
// 			self.name = newname;
// 		}
// 		setname('updated again! the c object')
// 		console.log(self);
// 	}
// }

// c.log();

// d = c;
// c = {log: 'hello world'};
// c = d;

// console.log(c.log);
// console.log(d.log);

// c = d;
// d = c;
// console.log(c.log);
// console.log(d.log);




//==========================Arrayyyys================================//

// var arr = [ 1,
// 			false,
// 			{
// 				name: 'Marc',
// 				address: '91 Ash Street'
// 			},
// 			function(name){
// 				var greeting = 'Hello';
// 				console.log(greeting + ' ' + name);
// 			},
// 			'hello'
// ];

// console.log(arr);
// arr[3](arr[2].name);



//==================== arguments ===============================//

// function greet(firstname, lastname, language){

// 	language = language || 'en' // can pass language if this parameters is undefined

// 	if (arguments.length === 0){
// 		console.log('Missing parameters!');
// 		console.log('--------------');
// 		return;
// 	}


// 	console.log(firstname);
// 	console.log(lastname);
// 	console.log(language);
// 	console.log(arguments);
// 	console.log(arguments[3]);
// 	console.log('----------');

// }

// greet();
// greet('John');
// greet('John', 'Doe');
// greet('John', 'Doe', 'German', 'durrr', 'durrrr2');

//=========function overloading workaround ========//

// function greet(firstname, lastname, language){

// 	language = language || 'en';
// 	if (language === 'en'){
// 		console.log("Hello " + firstname + ' ' + lastname);
// 	}
// 	if (language === 'es'){
// 		console.log("Hola " + firstname + ' ' + lastname);
// 	}

// }

// function greetEnglish(firstname, lastname){
// 	greet(firstname, lastname, 'en');
// }

// function greetSpanish(firstname, lastname){
// 	greet(firstname, lastname, 'es');
// }


// greetEnglish('John', 'Doe');
// greetSpanish('John', 'Doe');

//============== danger in semicolons and whitespace ===========================//

// function getPerson(){
// 	return //will return undefined because it will insert a ';' 
// 	{
// 		firstname: "Tony"
// 	}
// }


// console.log(getPerson());


// var 
// 	//first name of person
// 	firstname,
// 	//lastname of person
// 	lastname,
// 	//the language
// 	// can be 'en' or 'es'
// 	language;

// var person = {
// 	//first name of person
// 	firstname: 'John',

// 	//the last name
// 	//(always required)
// 	lastname: 'Doe'
// }

// ================ IIFES ======================//

// //function statement
// function greet(name){
// 	console.log('hello '+name);
// };
// greet("Dude");

// //using a function expression
// var greetFunc = function(name){
// 	console.log('hello '+name);
// };
// greetFunc("Dude");

// //using an immediately invoked function expression (IIFE)
// var greeting = function(name){
// 	// name = "Duder"
// 	return 'hello '+ name;
// }('Duder');

// console.log(greeting);

// greetingnames = 'pulling from outside';

// console.log(greetingnames);

// //this is a classic IIFE
// (function (name){

// 	greetingnames = "Inside IIFE Hello";
// 	console.log( greetingnames + ' ' + name);

// }('John'));

// console.log(greetingnames);


//===============globals ======================//

// greeting = "not hello";

// console.log(greeting);

// //access global (whatever that is 'window' or 'server') using this notation

// (function(global, name){
// 	var greeting = 'Hola';
// 	global.greeting = 'Hello';
// 	console.log(greeting + " " + name)
// }(window, 'Marc'))

// console.log(greeting);


//================Closures==========================//
//=============== this is big for some reason ===========//

// function greet(whattosay){

// 	return function(name){
// 		console.log(whattosay + ' ' + name);
// 	}

// }
// greet('Hi')('Marc');
// var sayHi = greet('Hi');
// sayHi('Dude')

// ------ big descriptor of what a closure is ---//

// function buildFunctions(){

// 	var arr = [];

// 	for (var i = 0; i < 3; i++){

// 		arr.push(
			
// 			function(){

// 				console.log(i);
			
// 			}
		
// 		)

// 	}

// 	return arr;
// }

// //what happens is that i = 3 when the execution context is closed, but that
// //place in memory is still there.  So when any of the functions in the array
// // are called, it looks for i's current value in memory


// var fs = buildFunctions();

// fs[0]();
// fs[1]();
// fs[2]();


// function buildFunctions2(){

// 	var arr = [];

// 	for (var i = 0; i < 3; i++){
		
// 		arr.push(
			
// 			(function(j){

// 				return function(){
// 				console.log(j);
// 				}

// 			}(i))
		
// 		)

// 	}

// 	return arr;
// }


// //fix closure by calling the function and returning a function that executes.

// var fs2 = buildFunctions2();

// fs2[0]();
// fs2[1]();
// fs2[2]();


//================function factories=======================//

// function makeGreeting(language){

// 	return function(firstname, lastname){

// 		if (language === 'en'){
// 			console.log("Hello " + firstname + ' ' + lastname);
// 		}
// 		if (language === 'es'){
// 			console.log("Hola " + firstname + ' ' + lastname);
// 		}
// 	}
// }

// var greetEnglish = makeGreeting('en');
// var greetSpanish = makeGreeting('es');

// greetEnglish('John', 'Doe');
// greetSpanish('John', 'Doe');

//================first class functions and closures=======================//

// function sayHiLater(){

// 	var greeting = 'Hi!';

// 	setTimeout(function(){

// 		console.log(greeting);

// 	}, 3000);

// }

// sayHiLater();

//JQuery uses it all the time

// $("button").click(function(){

// 	//do something

// });

//calllback function

// function tellMeWhenDone(callback){

// 	var a = 1000;
// 	var b = 2000;

// 	callback();

// }



// tellMeWhenDone(function(){

// 	console.log("I am done");

// })

//================call(), apply(), bind()=======================//

// var person = {

// 	firstname: "John",
// 	lastname: "Doe",
// 	getFullName: function(){

// 		var fullName = this.firstname + ' ' +this.lastname;
// 		return fullName;

// 	}
// }


// var logName = function(lang1, lang2){

// 	console.log('Logged: ' + this.getFullName());
// 	console.log('Arguements: ' + lang1 + ' ' + lang2);
// 	console.log('-------------------------------')

// };

// var logPersonName = logName.bind(person); //makes new function and points to what oject 'this' is referencing.
// logPersonName('en');


// logName.call(person, 'en', 'es'); // just executes the function, but establishes what 'this' is
// logName.apply(person, ['en', 'es']); //same as call(), but takes an array of variables




// (function(lang1, lang2){

// 	console.log('Logged: ' + this.getFullName());
// 	console.log('Arguements: ' + lang1 + ' ' + lang2);
// 	console.log('-------------------------------');

// }).apply(person,['en', 'es']);






// // function borrowing

// var person2 = {
// 	firstname: 'Marc',
// 	lastname: 'Burt'
// }

// console.log(person.getFullName.apply(person2));

// //function currying 

// function multiply(a,b){
// 	return a*b;
// }

// var multipleByTwo = multiply.bind(this,2);
// console.log(multipleByTwo(4));
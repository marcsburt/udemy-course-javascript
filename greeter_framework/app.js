// get a new object 
var g = G$('John', 'Doe');

// let's use our object


$('#login').click(function(){

	//create new 'Greetr' object
	var loginGrtr = G$('John', 'Doe');

	//hide the login screen
	$('#logindiv').hide();

	//fire off html greeting that takes an id and injects into the greeting
	loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

}
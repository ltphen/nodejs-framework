var fs = require("fs");
var help = require('./../others/helpers/string');
const readline = require('readline');
const filePath = "./../modeles/controller.js";

const request = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

request.question('Give the controller name ? ', function (answer) {
	 	fs.readFile(filePath, function (error, content) {
	    if (error){
	    	console.log(error); 
	    	return; 	
	    } 
	    var name = 'controller'+help.capitalize(answer);
	    var result = content.toString().replace(/{{ControllerName}}/gi, name);

		fs.writeFile('./../controllers/'+name+'.js', result, (error) => {
			if (error){
		    	console.log(error); 
		    	return; 	
		    } 
			console.log('The file has been created successfully!');
		});
  })
	request.close();
});
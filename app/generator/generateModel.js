var fs = require("fs");
var help = require('./../others/helpers/string');
const readline = require('readline');
const filePath = "./../modeles/model.js";

const request = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

request.question('Give the model name ? ', function (answer) {
	 	fs.readFile(filePath, function (error, content) {
	    if (error){
	    	console.log(error); 
	    	return; 	
	    } 
	    var name = 'model'+help.capitalize(answer);
	    var result = content.toString().replace(/{{ModelName}}/gi, name);

		fs.writeFile('./../models/'+name+'.js', result, (error) => {
			if (error){
		    	console.log(error); 
		    	return; 	
		    } 
			console.log('The file has been created successfully!');
		});
  })
	request.close();
});
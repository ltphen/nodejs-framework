var Controller = function() {
	this.model = require("./../models/model");
	this.views = "./";
	this.helper = require("./../others/helpers/string");
	this.success = "success";
	this.error = "error";
}

/**
* @params modelName String the name of the controller (example : ControllerFoo=> foo)
*/
Controller.prototype.getController = function(modelName) {
	return require("./controller"+this.helper.capitalize(modelName));
};

/**
* @role get the views file to link model to views in non-API model
*/
Controller.prototype.getViewsFile = function() {
	
};

/**
* @params method Function The function to execute before promise
* @params fn Funtion The function to excetute after promise
* @params attributes Array eventually the attributes of the databse request
*/
Controller.prototype.addStatus = function(result, fn) {
		if (result != null && result.length != 0) {
			var result = new Object({
				status : this.success,
				data : result
			});
			fn(result);
		}else{
			result = new Object({
				status : this.error
			});
			fn(result);
		}
};

/**
* @params fn Funtion The function to excetute after promise
*/
Controller.prototype.badStatus = function(fn) {
	result = new Object({
		status : this.error
	});
	fn(result);
};

/**
* @params fn Funtion The function to excetute after promise
*/
Controller.prototype.goodStatus = function(result, fn) {
	var result = new Object({
		status : this.success,
		data : result
	});
	fn(result);
};
module.exports = new Controller();
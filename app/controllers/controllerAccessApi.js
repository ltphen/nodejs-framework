
var ControllerAccessApi = function () {
	this.parent = require("./controller");
}

/**
* @params fn Function the function to exceute after result receive from database
* @params id Integer the notes Id
*/
ControllerAccessApi.prototype.one = function(access_token, fn) {
	this.parent.model.getModel("accessApi").one([access_token]).then(function (result) {
		if (result.length != 0) {
			fn(true);
		}else{
			fn(false);
		}
	}).catch(function(error){
		fn(false);
	});
	
};

module.exports = new ControllerAccessApi();
const fs = require('fs');
const path = require('path');


function toCamelCase(str){
	return str.replace(/[-_ ](.)/g, function(match, group1) {
		return group1.toUpperCase();
	});
}

function toDashCase(str){
	str = str.trim();
	str = str.replace(/\s+/g, '-');
	str = str.toLowerCase();
	return str;
}

function createNewComponent(component_name){
	
}

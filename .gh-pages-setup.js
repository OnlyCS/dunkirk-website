const fs = require('fs');
const fileName = './src/config.json';
const file = require(fileName);
    
file.prefix = "/dunkirk-website";
    
fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
	if (err) return console.log(err);
	console.log(JSON.stringify(file, null, 4));
	console.log('writing to ' + fileName);
});
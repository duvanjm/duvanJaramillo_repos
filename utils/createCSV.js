const jsonexport = require('jsonexport');
const fs = require('fs');

const createCSV = (obj) => {
  jsonexport(obj, function(err, csv){
    if (err) return console.error(err);
    fs.writeFileSync('./file.csv', csv);
  });
  return fs.readFileSync('./file.csv', 'utf8');
}

module.exports = { createCSV };

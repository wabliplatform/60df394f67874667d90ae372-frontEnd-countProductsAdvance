const path = require('path');

module.exports = {
  entry: {
	'Dashboard' : './javascript/Dashboard.js',
	'Count' : './javascript/Count.js',
	'Supplier' : './javascript/Supplier.js',
	'CountUpdate' : './javascript/CountUpdate.js',
	'Supplier2' : './javascript/Supplier2.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};
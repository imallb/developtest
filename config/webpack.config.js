'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
	context: path.resolve(__dirname,'../src'),
	entry:'./main',
	output:{
		path:path.resolve(__dirname,'../static/dist'),
		filename:'bundle.js'
	}
}















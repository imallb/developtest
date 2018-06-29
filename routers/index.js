'use strict';
module.exports = function(app){
	app.use('/test',require('./test/index.js'))
}
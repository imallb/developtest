'use strict';
let express = require('express');
let router = express.Router();

router.get('/',(req,res) => {
	res.render('index',{
		text:'123',
		change:true
	})
})

module.exports = router;
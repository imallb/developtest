'use strict';
let path = require('path');
let express = require('express');
let router = require('./routers');

let app = express();

// 设置模板目录
app.set('views', path.join(__dirname, 'views'));
// 设置模板引擎为 ejs
app.set('view engine', 'ejs');
// 静态页面
app.use(express.static(path.join(__dirname, 'static')));

router(app);

app.listen('8888',() => console.log('Node.js has been started with port 8888!'));
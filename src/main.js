'use strict';
import Vue from './js/vue';				// vue框架打包
import require from './js/require';		// require模块化插件打包
import jQuery from './js/jquery';		// jQuery库打包

window.Vue = Vue;						// vue框架全局变量
window.require = require.require;		// require模块全局变量
window.define = require.define;			// require模块全局变量
window.requirejs = require.requirejs;	// require模块全局变量
window.$ = window.jQuery = jQuery;		// jQuery模块全局变量






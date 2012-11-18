/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @date 2012-11-18
 */

define("release/1.0.0/views/app-debug", ["#jquery/1.7.2/jquery-debug", "#backbone/0.9.2/backbone-debug", "#underscore/1.3.3/underscore-debug", "$-debug"], function(require, exports, module) {
	'use strict';
	
	//load js
	var $ = require('#jquery/1.7.2/jquery-debug');
	var Backbone = require('#backbone/0.9.2/backbone-debug');
	var _ = require('#underscore/1.3.3/underscore-debug');
	
	module.exports = Backbone.View.extend({
		
		initialize: function() {
			console.log('test');
		}
	});
});

/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @date 2012-11-16
 */

define("release/1.0.0/init-debug", ["./views/app-debug", "#jquery/1.7.2/jquery-debug", "#backbone/0.9.2/backbone-debug", "#underscore/1.3.3/underscore-debug", "$-debug"], function(require) {
	"use strict";
	
	var App = require('./views/app-debug');
	new App();
});
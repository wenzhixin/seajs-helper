/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @date 2012-11-18
 */

define(function(require, exports, module) {
	'use strict';
	
	//load js
	var $ = require('jquery');
	var Backbone = require('backbone');
	var _ = require('underscore');
	
	module.exports = Backbone.View.extend({
		
		initialize: function() {
			console.log('test');
		}
	});
});
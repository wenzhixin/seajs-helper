;(function() {
	'use strict';
	
	var debug = location.search.match(/debug=true/),
		packageJson = './package.json',
		readPackage = false,
		use = seajs.use;
	
	seajs.config({
		alias : {
			'$' : 'jquery/1.7.2/jquery'
		},
		preload : [ 
			'seajs/plugin-json',
			'seajs/plugin-text'
		]
	});
	
	seajs.use = function(ids, callback) {
		use.call(seajs, [packageJson], function(data) {
			if (data.dependencies && !readPackage) {
				var alias = {};
				mixin(alias, data.dependencies);
				data.devDependencies && mixin(alias, data.devDependencies);
				seajs.config({alias : alias});
				readPackage = true;
			}
			use.call(seajs, ids, callback);

			function mixin(target, object) {
				for (var i in object) {
					if (object.hasOwnProperty(i)) {
						(i !== '$') && (target[i] = object[i]);
					}
				}
			}
		});
	};

	seajs.use(packageJson, function(data) {
		var paths = [data.name, data.version, 'init'];
		var path = debug ? './js/init' : paths.join('/');
		seajs.use(path);
	});
	
})();
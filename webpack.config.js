var webpack = require('webpack')

module.exports = {
	entry: './app/index.js',
	
	output: {
		filename: 'bundle.js',
		path: './build',
		publicPath: 'build'
	},
	
	module: {
		loaders: [
			{ 
				test: /\.jsx?$/,
				exclude: /node_modules/, 
				loader:'babel'
			}
		]			
	}

}
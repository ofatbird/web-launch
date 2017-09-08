const path = require('path')
const webpack = require('webpack')

module.exports = {
	entry: './src/index.jsx',
	output: {
		filename: 'js/app.js',
		path: path.resolve(__dirname, 'public')
	},
	resolve: {
		extensions: ['js', '.jsx']
	},
	externals: {
		'React': 'React',
		'ReactDOM': 'ReactDOM',
		'mobx': 'mobx',
		'mobxReact': 'mobxReact'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: ['babel-loader'],
				include: path.join(__dirname, 'src')
			},
		]
	},
	plugins: [
		// new webpack.optimize.UglifyJsPlugin({
		// 	compress: {},
		// })
	]
}
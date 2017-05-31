var path = require('path');
var webpack = require('webpack');
var EXtractCss = require('extract-text-webpack-plugin');
var HtmlWebpackPlugIn = require('html-webpack-plugin');

module.exports = {
	entry:'./js/two.js',
	output:{
		path:path.join(__dirname,'./dist'),
		filename:'./js/move.js'
	},
	module:{
		loader:[
			{text:/\.css$/,loader:'style-loader!css-loader'}
		]
	},
	plugins:[
		new webpack.BannerPlugin('这是一段css、js注释'),
		new EXtractCss('css/style.css'),
		new HtmlWebpackPlugIn({
			template:'./index.html',
			filename:'./default.html',
			inject:true,
			hash:true
		})
	],
	devServer:{
		hot:true,
		contentBase:'./dist',
		port:9999,
		inline:true
	}
}
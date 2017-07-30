var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var path = require('path');

var config = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, './staging'),
        filename: 'app.bundle.js'
    },
    devServer: {
        port: 8181
    },
    module: {
        rules: [
			{
				test: /\.js$/, exclude: /node_modules/, use: "babel-loader"
			}
		]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({ template: './app/index.html' })
    ]
}

module.exports = config;
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const asserts = require('./asserts');
const basePath = path.resolve(__dirname, '../');
const ASSET_PATH = process.env.ASSET_PATH || '/';
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
	entry: './demo/app.tsx',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react'],
							plugins: ['@babel/plugin-transform-runtime']
						}
					},
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true
						}
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.(c|le)ss$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'less-loader'
					// 'sass-loader',
				]
			}
		]
	},
	devtool: 'source-map', //
	devServer: {
		host: '0.0.0.0', // 支持ip访问
		port: 7799,
		hot: true,
		inline: true, // ???
		compress: true, // gzip,
		contentBase: path.resolve(basePath, '/lib/')
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx']
	},
	output: {
		filename: 'components.js',
		path: path.resolve(basePath, 'lib'),
		chunkFilename: '[name]/[name].[chunkhash:8].js',
		publicPath: ASSET_PATH
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
		}),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin(
			Object.assign({
				title: 'Wamuu-UI-Demo',
				inject: true,
				filename: 'index.html', // string name
				template: 'demo/index.html' // url
				// favicon: path.resolve(__dirname, '../favicon.png')
			})
		)
	],
	optimization: {
		splitChunks: {
			chunks: 'all',
			cacheGroups: asserts.CACHE_GROUPS
		}
	}
};

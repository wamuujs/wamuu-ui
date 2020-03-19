const path = require('path');
const webpack = require('webpack');
const basePath = path.resolve(__dirname, '../');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const asserts = require('./asserts');
const devMode = process.env.NODE_ENV !== 'production';

const babelConfig = require('./getBabelCommonConfig')(false);

module.exports = {
	entry: './components/index.ts',
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: babelConfig
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
				// exclude: /(node_modules|bower_components)/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'less-loader'
				]
			}
		]
	},
	resolve: {
		alias: {
			'@': path.resolve(basePath, './components')
		},
		extensions: ['.tsx', '.ts', '.js']
	},
	externals: {
		react: {
			root: 'React',
			commonjs2: 'react',
			commonjs: 'react',
			amd: 'react'
		},
		'react-dom': {
			root: 'ReactDOM',
			commonjs2: 'react-dom',
			commonjs: 'react-dom',
			amd: 'react-dom'
		}
	},
	output: {
		filename: 'components.js',
		library: 'wamuu-ui',
		libraryTarget: 'umd',
		path: path.resolve(basePath, './lib')
	},
	plugins: [new CleanWebpackPlugin()],
	optimization: {}
};

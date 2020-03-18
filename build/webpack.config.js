const path = require('path');
const webpack = require('webpack');
const basePath = path.resolve(__dirname, '../');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const asserts = require('./asserts');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
	entry: './components/index.tsx',
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
				]
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	output: {
		filename: 'components.js',
		path: path.resolve(basePath, 'lib'),
		chunkFilename: '[name]/[name].[chunkhash:8].js'
	},
	plugins: [new CleanWebpackPlugin()],
	optimization: {
		splitChunks: {
			chunks(chunk) {
				console.log(` chunk.name `, chunk.name);
				// exclude `my-excluded-chunk`
				return chunk.name !== 'vendors~main';
			},
			cacheGroups: asserts.CACHE_GROUPS
		}
	}
};

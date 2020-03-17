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
				use: 'ts-loader',
				exclude: /node_modules/
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
			/*
			cacheGroups: {
				Header: {
					name: 'Header',
					test: /components\/Header/,
					chunks: 'all',
					priority: 10, //
					enforce: true // ignore minSize & minChunks & maxAsyncRequests & maxInitialRequests options and always create chunks
				},
				Footer: {
					name: 'Footer',
					test: /components\/Footer/,
					chunks: 'all',
					priority: 10, //
					enforce: true //
				}

        vendor: {
          name: 'vendor',
          chunks: 'all', // async module or not
          test: /[\\/]node_modules[\\/]/,
          priority: -10, // 
          enforce: true // 
        },
        commons: {
          name: 'commons',
          chunks: 'all',
          test: /src\/containers|src\/components|src\/config|src\/css|src\/utils/,
          priority: -20, // 
          enforce: true // 
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      
			}  */
		}
	}
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

const config = {
	mode: "production",
	entry: "./src/js/app.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.pug"
		}),
		new MiniCssExtractPlugin({
			filename: devMode ? "[name].css" : "[name].[hash].css",
			chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: "babel-loader"
			},
			{
				test: /\.pug$/,
				use: "pug-loader"
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					devMode
						? "style-loader"
						: {
								loader: MiniCssExtractPlugin.loader,
								options: {
									publicPath: path.join(__dirname, "dist")
								}
						  },
					"css-loader",
					"sass-loader"
				]
			}
		]
	}
};

module.exports = config;

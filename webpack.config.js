var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: { "index": "./src/js/index.js" },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: ['@babel/react']
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            templateContent: (htmlWebpackPlugin) => `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8"/>
                </head>
                <body>
                <div id="Calculator"></div>
                </body>
            </html>
            `
        }),
        new ESLintPlugin()
    ],
    devtool: "inline-source-map",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 5000
    }
};
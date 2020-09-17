const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCSS = require('mini-css-extract-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './build/app/app.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass)$/,
                use: [miniCSS.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(tsx|ts)$/,
                exclude:/node_modules/,
                use: 'ts-loader',
            },
            
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader?name=./assets/images/[name].[ext]'
                },],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader?name=./assets/fonts/[name].[ext]'
                },],
            },
        ],
    },
    resolve:{
         extensions:['.tsx','.ts','.js']       
    },
    plugins: [
        new miniCSS({
            filename: 'style.css'
        }),
        new copyWebpackPlugin({
            patterns: [{
                from:'./build/assets/images',
                to: './assets/images/'
            }]
        }),
        new HtmlWebpackPlugin({ 
            title:'My app',
            template: './build/index.html' })
    ]
};
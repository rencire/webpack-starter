const {resolve} = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const webpackValidator = require('webpack-validator')

module.exports = env =>  {

    const config = webpackValidator({
        context: resolve('src'),
        entry: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:4000',
            'webpack/hot/only-dev-server',
            './bootstrap'
        ],

        output: {
            filename: 'bundle.js',
            path: resolve('dist'),
        },
        devtool: 'inline-source-map',
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loaders: ['babel-loader'],
                    include: resolve('src')
                },
            ],
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new ProgressBarPlugin(),
            new HtmlWebpackPlugin({
                template: 'index.html'
            })
        ],
        devServer: {
            port: 4000,
            hot: true
        }
    })

    return config
}
const {resolve} = require('path')
const webpack = require('webpack')
const webpackValidator = require('webpack-validator')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const {getIfUtils} = require('webpack-config-utils')

module.exports = env =>  {
    const {ifProd} = getIfUtils(env)

    const config = webpackValidator({
        context: resolve('src'),
        entry: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            'webpack/hot/dev-server',
            './bootstrap.js'
        ],

        output: {
            filename: 'bundle.js',
            path: resolve('dist'),
        },
        devtool: ifProd('source-map', 'eval'),
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
            inline: false,
            port: 3000,
            hot: true
        }
    })

    return config
}
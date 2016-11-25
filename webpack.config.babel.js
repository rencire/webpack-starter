import {resolve} from 'path'
import webpackValidator from 'webpack-validator'
import {getIfUtils} from 'webpack-config-utils'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import webpack from 'webpack'

export default env =>  {
    const {ifProd} = getIfUtils(env)

    const config = webpackValidator({
        context: resolve('src'),
        entry: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch',
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
                    test: /\.js$/,
                    loaders: ['babel-loader'],
                    exclude: /node_modules/
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
            hot: true,
            contentBase: './'
        }
    })

    return config
}
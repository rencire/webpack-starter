import {resolve} from 'path'
import webpackValidator from 'webpack-validator'
import {getIfUtils} from 'webpack-config-utils'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default env =>  {
    const {ifProd} = getIfUtils(env)

    const config = webpackValidator({
        context: resolve('src'),
        entry: './bootstrap.js',
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
            new HtmlWebpackPlugin({
                template: 'index.html'
            })
        ]
    })

    return config
}
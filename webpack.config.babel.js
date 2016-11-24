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
            publicPath: '/dist/',
        },
        devtool: ifProd('source-map', 'eval'),
        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html'
            })
        ]
    })

    return config
}
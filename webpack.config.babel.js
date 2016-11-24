import {resolve} from 'path'
import webpackValidator from 'webpack-validator'
import {getIfUtils} from 'webpack-config-utils'

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
        devtool: ifProd('source-map', 'eval')
    })

    return config
}
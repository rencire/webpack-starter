/* eslint no-console:0 */

import {onLoad} from './App'

// this is only relevant when using `hot` mode with webpack
// special thanks to Eric Clemmons: https://github.com/ericclemmons/webpack-hot-server-example
const reloading = document.readyState === 'complete'
if (module.hot) {
    module.hot.accept(function(err) {
        console.log('❌  HMR Error:', err)
    })
    if (reloading) {
        console.log('🔁  HMR Reloading.')
        onLoad()
    } else {
        console.info('✅  HMR Enabled.')
        bootstrap()
    }
} else {
    console.info('❌  HMR Not Supported.')
    bootstrap()
}

function bootstrap() {
    window.addEventListener('load', onLoad)
    window.addEventListener('hashchange', onLoad)
}
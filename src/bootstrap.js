/* eslint no-console:0 */

import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

const e = React.createElement

const rootEl = document.getElementById('root');

ReactDom.render(
    e(AppContainer, null,
        e(App)
    ),
    rootEl
)

if (module.hot) {
  module.hot.accept('./App', (err) => {
    ReactDom.render(
        e(AppContainer, null,
            e(App)
        ),
        rootEl
    )
  })
} else {
  console.info('❌  HMR Not Supported.')
}


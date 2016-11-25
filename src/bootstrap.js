/* eslint no-console:0 */

import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

const e = React.createElement

const rootEl = document.getElementById('root')

ReactDom.render(
    <AppContainer>
        <App />
    </AppContainer>,
    rootEl
);

if (module.hot) {
  module.hot.accept('./App', (err) => {
      console.log('in hot accept')
      const NextApp = require('./App').default;
      ReactDOM.render(
          <AppContainer>
              <NextApp />
          </AppContainer>,
          rootEl
      );
    })
}


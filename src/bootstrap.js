/**
 * Created by Eric Ren on 11/24/16.
 */

import React from 'react'
import ReactDom from 'react-dom'

const e = React.createElement

const comp = e('div', null, 'Hello World')

ReactDom.render(comp, document.getElementById('App'))

/**
 * Created by Eric Ren on 11/24/16.
 */

import React from 'react'
import ReactDom from 'react-dom'

const comp = (
    div(null,
        h1(null, 'first comp')
    )
)

ReactDom.render(comp, document.getElementById('App'))

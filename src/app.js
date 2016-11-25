/**
 * Created by Eric Ren on 11/24/16.
 */

import React from 'react'
import ReactDom from 'react-dom'


export default function handleLoad() {
    const e = React.createElement

    const comp = e('div', null, 'Hellsfdsfo World dfsfd')

    ReactDom.render(comp, document.getElementById('App'))
    console.log('hi there')
}

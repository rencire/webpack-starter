/**
 * Created by Eric Ren on 11/24/16.
 */

import React, { Component } from 'react'
import Counter from './Counter'
// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

const e = React.createElement

export default class App extends Component {

    render() {
        return (
            <div style={{fontSize: 13}}>
            React tesdsfdft exampfdfsfsds adsfdf.
                <Counter />
            </div>
        );
    };
}

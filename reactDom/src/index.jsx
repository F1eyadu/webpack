import React from 'react'
import {render} from 'react-dom'
import './index.styl'
class App extends React.Component{
    render() {
        return (
            <div className="title">123123</div>
        )
    }
}

render(<App />, document.getElementById('app'))

if (module.hot) {
    module.hot.accept();
  }
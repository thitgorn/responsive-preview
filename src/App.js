import React, { Component } from 'react'
import { WrapWeb } from './Components/WrapWeb'
import { InputUrl } from './Components/InputUrl'
import { screens, DEFAULT_URL } from './config/setting'

export class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      URL: DEFAULT_URL,
      size: screens,
    }
  }

  handleChange (url) {
    this.setState({
      URL: url,
    })
  }

  render () {
    const wrapwebs = this.state.size.map( (value,id) =>
      <WrapWeb key={id} URL={this.state.URL} width={value.width} height={value.height} />
    )
    return (
      <div style={{ background: 'white', width: '100%', backgroundColor: '#108db8' }}>
        <InputUrl handleChange={this.handleChange.bind(this)} />
        <h1 style={{ marginLeft: '1%'}}>{this.state.URL}</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {wrapwebs}
        </div>
      </div>
    )
  }
}

export default App

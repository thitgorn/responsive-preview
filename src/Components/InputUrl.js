import React, { Component } from 'react'
import { DEFAULT_URL } from '../config/setting'
import hotkeys from 'hotkeys-js';

export class InputUrl extends Component {
  constructor (props) {
    super(props)
    this.state = {
      toggle: false,
      value: DEFAULT_URL,
      changeURL: this.props.handleChange,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    hotkeys('enter,esc' , (event, handler) => {
      event.preventDefault() 
      if(this.state.toggle) {
          console.log(handler.key)
          switch(handler.key) {
              case 'enter': 
                this.handleEnter(event); break
              case 'esc': 
                this.toggle(event); break
              default:;
          }
      }
    });
  }

  toggle(event) {
      this.setState({ toggle: !this.state.toggle })
  }

  handleEnter(event) {
    this.props.handleChange(this.state.value)
    this.toggle(event)
  }

  handleChange(event) {
      this.setState({
          value: event.target.value,
      })
  }

  handleEnterPress(e) {
      if(e.keyCode===13) {
          this.handleEnter(e)
      }
  }

  render () {
      if(this.state.toggle) {
        return (
            <div>
                <div style={{
                    width: '100%',
                    height: '100vh',
                    position: 'fixed',
                    top: '0px',
                    left: '0px' ,
                    backgroundColor: 'rgba(220,220,220,0.8)',
                    }} onClick={ () => this.toggle()}/>
                <div style={{ width: '50%', height: '30vh', position: 'fixed', zIndex: '98', top: '5%', left: '25%', backgroundColor: 'black' }}>
                    <div style={{position: 'fixed', top: '10%', left: '30%', zIndex: '99' , width: '40%'}}>
                        <input onKeyDown={ (e) => this.handleEnterPress(e) }  value={this.state.value} onChange={this.handleChange} style={{ width:'100%', fontSize: '30px' }} />
                        <button onClick={ (event) => this.handleEnter(event) } style={{ margin: '20px auto', padding: '10px', width: '101%', border: 'none', backgroundColor: 'green', fontSize: "20px"}}>Enter</button>
                    </div>
                </div>
            </div>
            )
      }
     else {
         return (
            <div style={{ position: 'fixed', top: '10px', right: '50px' }}>
                <button style={{
                    border: '1px solid yellow',
                    padding: '15px 32px',
                    backgroundColor: 'black',
                    color: 'white',
                    }} onClick={ () => this.toggle() }>
                    URL
                </button>
            </div>
            )
    }
  }
}

export default InputUrl

import React, { Component } from 'react'

export class WrapWeb extends Component {
  render () {
    return (
      <div style={{ background: 'white', width: this.props.width, height: this.props.height , margin: '10px', border: '5px solid black' }}>
        <iframe src={this.props.URL}
          title={this.props.URL}
          width={this.props.width}
          height={this.props.height} />
      </div>
    )
  }
}

export default WrapWeb

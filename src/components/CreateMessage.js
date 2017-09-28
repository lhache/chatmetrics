import React, { Component } from 'react'
import CreateMessageMutation from '../mutations/CreateMessageMutation'

class CreateMessage extends Component {

  state = {
    text: ''
  }

  render() {

    return (
      <div>
        <div>
          <input
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
            type='text'
            placeholder='Fill me up'
          />
        </div>
        <div
          className='button'
          onClick={() => this._createMessage(this.props.viewer.id)}
        >
          Submit
        </div>
      </div>
    )

  }

  _createMessage = (viewerId) => {
    const { text } = this.state
    // set the input text empty on creation success
    CreateMessageMutation(text, viewerId, () => this.setState({text: ''}))
  }

}

export default CreateMessage

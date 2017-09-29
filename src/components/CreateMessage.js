import React, { Component } from 'react'
import CreateMessageMutation from '../mutations/CreateMessageMutation'
import './CreateMessage.css'

class CreateMessage extends Component {

  state = {
    text: ''
  }

  render() {

    return (
      <div className="CreateMessage">
        <input
          className="CreateMessage-Input"
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
          type='text'
          placeholder='Fill me up'
        />
        <div
          className="CreateMessage-Button"
          onClick={() => this._createMessage(this.props.viewer.id)}
        >
          >>
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

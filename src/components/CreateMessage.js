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
          onClick={() => this._createMessage()}
        >
          Submit
        </div>
      </div>
    )

  }

  _createMessage = () => {
    const { text } = this.state
    CreateMessageMutation(text, () => console.log(`Mutation completed`))
  }

}

export default CreateMessage

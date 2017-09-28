import React, { Component } from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import DeleteMessageMutation from '../mutations/DeleteMessageMutation'

class Message extends Component {

  _handleDelete = () => {
    DeleteMessageMutation(this.props.message.id, null)
  }

  render() {
    const { text } = this.props.message
    return (
      <div>
        <div>{text}</div>
        <button onClick={this._handleDelete}>xxx</button>
      </div>
    )
  }
}

export default createFragmentContainer(Message, graphql`
  fragment Message_message on Message {
    id
    text
  }
`)

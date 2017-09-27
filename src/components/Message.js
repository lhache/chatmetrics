import React, { Component } from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

class Message extends Component {

  render() {
    return (
      <div>
        <div>{this.props.message.text}</div>
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

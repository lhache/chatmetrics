import React, { Component } from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import DeleteMessageMutation from '../mutations/DeleteMessageMutation'
import dateformat from 'dateformat'
import './Message.css'

class Message extends Component {

  _handleDelete = () => {
    DeleteMessageMutation(this.props.message.id, null)
  }

  render() {
    const { text, createdAt } = this.props.message
    return (
      <div className="Message">
        <div>
          <div className="Message-Text">{text}</div>
          <button className="Message-Delete" onClick={this._handleDelete}>X</button>
        </div>
        <div className="Message-CreatedAt">sent on {dateformat(new Date(createdAt), "dd/mm/yyyy hh:MM")}</div>
      </div>
    )
  }
}

export default createFragmentContainer(Message, graphql`
  fragment Message_message on Message {
    id
    text
    createdAt
  }
`)

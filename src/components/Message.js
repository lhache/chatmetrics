import React, { Component } from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import DeleteMessageMutation from '../mutations/DeleteMessageMutation'
import dateformat from 'dateformat'
import './Message.css'

class Message extends Component {

  _handleDelete = () => {
    DeleteMessageMutation(this.props.message.id, null)
  }

  _formatDate = date => {
    const dateFormat = "dd/mm/yyyy HH:MM"
    return date ? dateformat(new Date(date), dateFormat): dateformat(new Date(), dateFormat)
  }

  render() {
    const { text, createdAt } = this.props.message
    return (
      <div className="Message">
        <div>
          <div className="Message-Text">{text}</div>
          <button className="Message-Delete" onClick={this._handleDelete}>X</button>
        </div>
        <div className="Message-CreatedAt">sent on {this._formatDate(createdAt)}</div>
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

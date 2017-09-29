import React, { Component } from 'react'
import Message from './Message'
import { createFragmentContainer, graphql } from 'react-relay'
import CreateMessage from './CreateMessage'
import './MessageList.css'

class MessageList extends Component {

  render() {
    return (
      <div>
        <div className="MessageList-Counter">
          {this.props.viewer.allMessages.edges.length} items
        </div>
        <div className="MessageList">
          {this.props.viewer.allMessages.edges.map((edge) => {
            return (<Message key={edge.node.__id} message={edge.node} />)
          })}
        </div>
        <CreateMessage viewer={this.props.viewer}/>
      </div>
    )
  }

}

export default createFragmentContainer(MessageList, graphql`
  fragment MessageList_viewer on Viewer {
    id
    allMessages(last: 100, orderBy: createdAt_ASC) @connection(key: "MessageList_allMessages", filters: []) {
      edges {
        cursor
        node {
          ...Message_message
        }
      }
    }
  }
`)

import React, { Component } from 'react'
import Message from './Message'
import { createFragmentContainer, graphql } from 'react-relay'

class MessageList extends Component {

  render() {
    return (
      <div>
        {this.props.viewer.allMessages.edges.map(({node}) => {
          return (<Message key={node.__id} message={node} />)
        })}
      </div>
    )
  }

}

export default createFragmentContainer(MessageList, graphql`
  fragment MessageList_viewer on Viewer {
    allMessages(last: 100, orderBy: createdAt_DESC) @connection(key: "MessageList_allMessages", filters: []) {
      edges {
        node {
          ...Message_message
        }
      }
    }
  }
`)

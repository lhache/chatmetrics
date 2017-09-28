import React, { Component } from 'react'
import Message from './Message'
import { createFragmentContainer, graphql } from 'react-relay'
import CreateMessage from './CreateMessage'

// import NewMessageSubscription from '../subscriptions/NewMessageSubscription'

class MessageList extends Component {

  componentDidMount() {
    // NewMessageSubscription()
  }

  render() {
    return (
      <div>
        {this.props.viewer.allMessages.edges.map((edge) => {
          // debugger;
          return (<Message key={edge.node.__id} message={edge.node} />)
        })}
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

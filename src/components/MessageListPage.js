import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'
import MessageList from './MessageList'

const MessageListPageQuery = graphql`
  query MessageListPageQuery {
    viewer {
      ...MessageList_viewer
    }
  }
`
class MessageListPage extends Component {

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={MessageListPageQuery}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <MessageList viewer={props.viewer} />
          }
          return <div>Loading</div>
        }}
      />
    )
  }

}

export default MessageListPage

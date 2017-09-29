import { commitMutation, graphql } from 'react-relay'
import {ConnectionHandler} from 'relay-runtime'
import environment from '../Environment'

const mutation = graphql`
  mutation CreateMessageMutation($input: CreateMessageInput!) {
    createMessage(input: $input) {
      message {
        text
        createdAt
      }
    }
  }
`

export default (text, viewerId, callback) => {
  const variables = {
    input: {
      text: text,
      createdAt: new Date(),
      clientMutationId: ""
    },
  }
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onError: err => console.error(err),
      onCompleted: () => { callback() },
      updater: (proxyStore) => {

        const createdMessageField = proxyStore.getRootField('createMessage')
        const createdMessage = createdMessageField.getLinkedRecord('message')
        const viewerProxy = proxyStore.get('viewer-fixed')
        const connection = ConnectionHandler.getConnection(viewerProxy, 'MessageList_allMessages')

        // create an edge container the newly create node
        // otherwise the store would have an empty node that you can't render
        const voteEdge = ConnectionHandler.createEdge(proxyStore, connection, createdMessage, 'MessageEdge');

        if (connection) {
          ConnectionHandler.insertEdgeAfter(connection, voteEdge)
        }
      },
    },
  )
}

import { commitMutation, graphql } from 'react-relay'
import {ConnectionHandler} from 'relay-runtime'
import environment from '../Environment'

const mutation = graphql`
  mutation DeleteMessageMutation($input: DeleteMessageInput!) {
    deleteMessage(input: $input) {
      deletedId
    }
  }
`

export default (messageId, viewerId) => {
  const variables = {
    input: {
      id: messageId,
      clientMutationId: ""
    },
  }
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onError: err => console.error(err),
      updater: (proxyStore) => {
          const deleteMessageField = proxyStore.getRootField('deleteMessage')
          const deletedId = deleteMessageField.getValue('deletedId')
          const viewerProxy = proxyStore.get("viewer-fixed")
          const connection = ConnectionHandler.getConnection(viewerProxy, 'MessageList_allMessages')

          if (connection) {
            ConnectionHandler.deleteNode(connection, deletedId)
          }
        },
    },
  )
}

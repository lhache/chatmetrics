// import { graphql, requestSubscription } from 'react-relay'
// import environment from '../Environment'
//
// const newMessageSubscription = graphql`
//   subscription NewMessageSubscription{
//     message {
//       node {
//         id
//         text
//       }
//     }
//   }
// `
//
// export default () => {
//
//   const subscriptionConfig = {
//     subscription: newMessageSubscription,
//     variables: {},
//     updater: proxyStore => {
//       const createMessageField = proxyStore.getRootField('Message')
//       const newMessage = createMessageField.getMessageedRecord('node')
//       const updatedUrl = newMessage.getValue('text')
//     },
//     onError: error => console.log(`An error occured:`, error)
//   }
//
//   requestSubscription(
//     environment,
//     subscriptionConfig
//   )
// }

import React, { Component } from 'react'
import MessageListPage from './MessageListPage'
import CreateMessage from './CreateMessage'

class App extends Component {
  render() {
    return (
      <div>
        <MessageListPage />
        <CreateMessage />
      </div>

    )
  }
}

export default App

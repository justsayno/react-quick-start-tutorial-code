import React, { Component } from 'react';

class App extends Component {
  render() {
    const { appName } = this.props
    return (
      <div className='App'>
        Welcome to {appName}!
      </div>
    );
  }
}

export default App;
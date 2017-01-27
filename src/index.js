import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// Written as arrow function
const CraftBeer = ({beerName, brewery}) => (
  <div className='craftBeer'>
    <h3>{beerName}</h3>
    <p>Brewrey: {brewery}</p>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className='App'>
        Welcome to Crafty Code!
        <CraftBeer beerName='Book Binder' brewery='Emersons' />
        <CraftBeer beerName='Pernicious Weed' brewery='Garage Project' />
        <CraftBeer beerName='Bitter Bitch' brewery='Parrot Dog' />
      </div>
    )
  }
}

ReactDOM.render(
  <App appName='React' />,
  document.getElementById('root')
)
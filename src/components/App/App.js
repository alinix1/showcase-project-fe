import React, { Component } from 'react'
import Songs from '../Songs/Songs'
import { getSongsData } from '../../apiCalls'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import'./App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      songs: [],
      errorMessage: ""
    }
  }

  componentDidMount() {
    getSongsData(`/songs`)
    .then((data) => this.setState({ songs: data }))
    .catch((error) => {
      this.setState({
        ...this.state,
        errorMessage: 'An error occurred, please try again.'
      })
    })
  }
  
  render() {
    return (
    <div className="app-container">
      <Header />
      <main>
        <section className="main-container">
        <Songs songs={this.state.songs} />
        </section>
      </main>
    </div> 
    )
  }
}

export default App;

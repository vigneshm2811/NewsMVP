
import React, { Component } from 'react'
import Navbar from './component/Navbar'
import NewsComponent from './component/NewsComponent'

export default class App extends Component {
  monster='mvp'
  render() {
    return (
      <>
          <Navbar/>
          <NewsComponent/>
      </>
    )
  }
}




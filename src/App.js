
import React, { Component } from 'react'
import Navbar from './component/Navbar'
import NewsComponent from './component/NewsComponent'
import './style/navItemsStyle.scss'

import { Routes, Route } from "react-router-dom"

export default class App extends Component {
  monster='mvp'
  // pageSize=15
  render() {
    return (
      <>
      <Navbar/>
      <Routes>
        <Route exact  path="/" element={ <NewsComponent key="1" pageSize={this.pageSize} country="in" category="general"/> } />
        <Route exact  path="/general" element={ <NewsComponent key="general" pageSize={this.pageSize} country="in" category="general"/> } />
        <Route exact  path="/sports" element={ <NewsComponent key="sports" pageSize={this.pageSize} country="in" category="sports"/> } />
        <Route exact  path="/business" element={ <NewsComponent key="business" pageSize={this.pageSize} country="in" category="business"/> } />
        <Route exact  path="/entertainment" element={ <NewsComponent key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/> } />
        <Route exact  path="/health" element={ <NewsComponent key="health" pageSize={this.pageSize} country="in" category="health"/> } />
        <Route exact  path="/science" element={ <NewsComponent key="science" pageSize={this.pageSize} country="in" category="science"/> } />
        <Route exact  path="/technology" element={ <NewsComponent key="technology" pageSize={this.pageSize} country="in" category="technology"/> } />
      </Routes>
      {/* <NewsComponent pageSize={this.pageSize} country="in" category="sports"/> */}
      </>
    )
  }
}




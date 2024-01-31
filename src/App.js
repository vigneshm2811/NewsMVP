
import React, { Component } from 'react'
import Navbar from './component/Navbar'
import NewsComponent from './component/NewsComponent'
import './style/navItemsStyle.scss'

import { Routes, Route } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  monster='mvp'
  pageSize=10
 state={
  progress:0
 }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <>
      <Navbar/>
     
      <Routes>
        <Route exact  path="/" element={ <NewsComponent setProgress ={this.setProgress} key="1" pageSize={this.pageSize} country="in" category="general"/> } />
        <Route exact  path="/general" element={ <NewsComponent setProgress ={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/> } />
        <Route exact  path="/sports" element={ <NewsComponent setProgress ={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports"/> } />
        <Route exact  path="/business" element={ <NewsComponent setProgress ={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business"/> } />
        <Route exact  path="/entertainment" element={ <NewsComponent setProgress ={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/> } />
        <Route exact  path="/health" element={ <NewsComponent setProgress ={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health"/> } />
        <Route exact  path="/science" element={ <NewsComponent setProgress ={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science"/> } />
        <Route exact  path="/technology" element={ <NewsComponent setProgress ={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology"/> } />
      </Routes>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
       
      />
      {/* <NewsComponent setProgress ={this.setProgress} pageSize={this.pageSize} country="in" category="sports"/> */}
      </>
    )
  }
}




import React, { Component } from 'react'
import loader from '../loader.gif'

export default class Loader extends Component {
  render() {
    return (
      // <div className='text-center'>
      // <img src={loader} alt=""/>
      // </div>
    
   <div className='d-flex justify-content-center my-3'>
         <div class="loader"></div>
   </div>
 
    )
  }
}

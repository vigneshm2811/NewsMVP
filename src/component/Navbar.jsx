import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>
  
{/* <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">

  <div className="container">

    <button
      data-mdb-collapse-init
      className="navbar-toggler"
      type="button"
      data-mdb-target="/navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>


    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <a className="navbar-brand mt-2 mt-lg-0" to="/">
     News MVP
      </a>
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Technology</Link>
        </li>
      </ul>

    </div>
  </div>

</nav> */}

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <Link className="navbar-brand" to="/">News MVP</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
        <li className="nav-item">
          <Link className="nav-link" to="/">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link>
        </li>
      </ul>
  
    </div>
  </div>
</nav>

      </div>
    )
  }
}

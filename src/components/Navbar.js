import React, { Component } from 'react'
import "../index.css"

function Navbar() {
    return (
        <div><nav className="navbar navbar-expand-lg navbar-light ">
        <div>
          {" "}
          <a className="navbar-brand" href="#">
            <img src="http://vue.rainbowit.net/img/logo.ee62cd69.png" alt />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                <span className="about">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <span className="about">Service</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
           <span className="about">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
           <span className="about">Pages </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
           <span className="about">Blocks</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
           <span className="about">Contact</span>
                </a>
              </li>
              <li className="nav-item">
                <button className="btnn" href="#">
                BUY NOW
           
                </button>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
      
        </div>
    )
}

export default Navbar;

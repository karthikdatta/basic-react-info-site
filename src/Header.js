import React from "react";
import "./style.css";

export default function Header() {
  return (
      <header>
          <nav className="nav">
              <img className="nav-logo" src="./react-logo.png"></img>
              <ul className="nav-items">
                  <li>Pricing</li>
                  <li>About</li>
                  <li>Contact</li>
              </ul>
          </nav>
      </header>
  )
}